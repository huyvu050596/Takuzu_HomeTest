import clone from "clone";
import _ from "lodash";
/**
 |--------------------------------------------------
 | Game play
 |--------------------------------------------------
 */
const SIZE = 4;
const MAX_FILL = 4;
const MIN_FILL = 2;
const EMPTY = -1;
const ONE = 1;
const ZERO = 0;

export const get = array => (row, col) =>
{
    if (row === null && col === null) return array;
    if (row === null)
    {
        return array.reduce((colArray, row) =>
        {
            colArray.push(_.get(row, `[${col}]`));
            return colArray;
        }, []);
    }
    if (col === null) return _.get(array, `[${row}]`, []);
    return _.get(array, `[${row}][${col}]`);
};

export const count = array => value =>
{
    return array.reduce((sum, item) => (sum += value === item ? 1 : 0), 0);
};

export const randomNumber = (min, max) =>
{
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const createArray = () =>
{
    const array = [];

    //Create empty array
    for (let i = 0; i < SIZE; i++)
    {
        if (!array[i]) array[i] = [];
        for (let j = 0; j < SIZE; j++) array[i][j] = EMPTY;
    }

    //Generate array
    let fillNumber = randomNumber(MIN_FILL, MAX_FILL);
    for (let i = 0; i < fillNumber; i++)
    {
        while (true)
        {
            const index = randomNumber(0, SIZE * SIZE - 1);
            const row = Math.floor(index / SIZE);
            const col = index % SIZE;
            array[row][col] = randomNumber(0, 1) ? ONE : ZERO;
            if (isValid(array)) break;
            else array[row][col] = EMPTY;
        }
    }

    return array;
};

export const isFull = array =>
{
    for (let i = 0; i < SIZE; i++)
    {
        if (Array.isArray(array[i]))
        {
            for (let j = 0; j < SIZE; j++)
            {
                if (array[i][j] === EMPTY) return false;
            }
        } else if (array[i] === EMPTY) return false;
    }
    return true;
};

export const isValid = array =>
{
    const getArray = get(array);
    //Cannot have three identical numbers in a line
    for (let i = 0; i < SIZE; i++)
        for (let j = 0; j < SIZE; j++)
        {
            //Ignore unset pieces
            if (getArray(i, j) === EMPTY) continue;
            //Check row
            if (
                getArray(i, j) === getArray(i - 1, j) &&
                getArray(i, j) === getArray(i + 1, j)
            )
                return false;
            //Check col
            if (
                getArray(i, j) === getArray(i, j - 1) &&
                getArray(i, j) === getArray(i, j + 1)
            )
                return false;
        }

    //All rows and columns must have no more than the maximum (size/2) number of 0s or 1s
    //Check all row
    for (let i = 0; i < SIZE; i++)
    {
        const countRow = count(getArray(i, null));
        if (countRow(ZERO) > SIZE / 2 || countRow(ONE) > SIZE / 2) return false;

        const countCol = count(getArray(null, i));
        if (countCol(ZERO) > SIZE / 2 || countCol(ONE) > SIZE / 2) return false;
    }

    //No two rows or columns can be equal (ignore rows/columns that contain unset values)
    //all(...) on a row or column will be true iff all values are set
    for (let i = 0; i < SIZE; i++)
        for (let j = 0; j < i; j++)
        {
            const rowIArray = getArray(i, null);
            const rowJArray = getArray(j, null);
            const colIArray = getArray(null, i);
            const colJArray = getArray(null, j);

            if (
                isFull(rowIArray) &&
                isFull(colIArray) &&
                (rowIArray.toString() === rowJArray.toString() ||
                    colIArray.toString() === colJArray.toString())
            )
            {
                return false;
            }
        }

    // Whee passed all three conditions!
    return true;
};

export const isSolved = array =>
{
    //Return True iff this puzzle is solved.
    return isFull(array) && isValid(array);
};

export const solve = array =>
{
    // Solve a puzzle using backtracking (also a fall back for the human solver).
    const queue = [clone(array)];
    while (queue.length > 0)
    {
        const takuzu = queue.pop();
        if (isSolved(takuzu)) return takuzu;

        if (!isValid(takuzu)) continue;

        const FillNode = () =>
        {
            for (let i = 0; i < SIZE; i++)
                for (let j = 0; j < SIZE; j++)
                {
                    if (get(takuzu)(i, j) === EMPTY)
                    {

                        takuzu[i][j] = ZERO;
                        if (isValid(takuzu)) queue.push(clone(takuzu));

                        takuzu[i][j] = ONE;
                        if (isValid(takuzu)) queue.push(clone(takuzu));

                        return;
                    }
                }
        };

        FillNode();
    }
    return [];
};
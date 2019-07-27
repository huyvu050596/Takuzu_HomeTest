import {get, identity, pickBy, trim} from "lodash";
import React from "react";

// make setState as promise, await setState(this)(stateObject)
export const setState = instance => newState => new Promise(resolve => instance.setState(newState, resolve));


// get value from object
export const getValue = (path, defaultValue = undefined) => (object) => {
    return get(object, path, defaultValue);
};


// get number from object
export const getNumber = (path, defaultValue = 0) => (object) => {
    try {
        return parseInt(get(object, path, defaultValue));
    } catch (e) {
        console.warn(`Can't get number from ${path}`);
        return defaultValue;
    }
};

//fetch api return promise => {success, error, ...payload}
export const handleApi = async (func) => {
    if (!func) return { success: false };
    return func()
        .then(data => {
            return ({ success: true, ...data });
        })
        .catch(error => {
            return ({ success: false, error });
        });
};


//remove
export const removeFalsey = (obj) => {
    return pickBy(obj, identity);
};

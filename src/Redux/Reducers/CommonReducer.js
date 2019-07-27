import * as Types from '../types';
import defaultState from "./defaultState";
import {CommonUtils} from "../../Utils";

export default function commonReducer(state = defaultState.common, action) {
    switch (action.type) {
        case Types.SAVE_CORE: {
            const {dataScore} = state;
            let updateArray = [];
            if (dataScore.length >= 5){
                const itemMax = CommonUtils.findMaxItem(dataScore, 'time');
                updateArray = CommonUtils.orderByDesc([...dataScore.filter(item => item.id !== itemMax.id), ...action.payload], ['time'])
            }else {
                updateArray = CommonUtils.orderByDesc([...dataScore, ...action.payload], ['time']) ;
            }
            return {...state, dataScore: updateArray};
        }
        default:
            return state;
    }
}

import {get, identity, pickBy, trim} from "lodash";
import React from "react";

// make setState as promise, await setState(this)(stateObject)
export const setState = instance => newState => new Promise(resolve => instance.setState(newState, resolve));


// get value from object
export const getValue = (path, defaultValue = undefined) => (object) => {
    return get(object, path, defaultValue);
};

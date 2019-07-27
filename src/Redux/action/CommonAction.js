import * as Types from "../types";

export const saveCore = (payload) =>
{
    return {type: Types.SAVE_CORE, payload};
};

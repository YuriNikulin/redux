import * as TYPES from "../constants/action-types";

export const addArticle = article => ({
    type: TYPES.ADD_ARTICLE,
    payload: article
});

export const removeArticle = article => ({
    type: TYPES.REMOVE_ARTICLE,
    payload: article
});
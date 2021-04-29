import { ADD_FILTER, REMOVE_ITEM } from "./actionTypes";

export const setFilter = filter => ({ type: ADD_FILTER, payload: { filter } });

export const removeItem = item => ({ type: REMOVE_ITEM, payload: { item } });
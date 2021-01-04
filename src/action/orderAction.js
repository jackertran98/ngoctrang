import { ADD_TO_CART, REMOVE_TO_CART, REMOVE_ALL_TO_CART } from "./types";

export const addToCart = (text) => (dispatch) => {
  return dispatch({ type: ADD_TO_CART, payload: text });
};
export const removeToCart = (text) => (dispatch) => {
  return dispatch({ type: REMOVE_TO_CART, payload: text });
};

export const removeAllToCart = (text) => (dispatch) => {
  return dispatch({ type: REMOVE_ALL_TO_CART, payload: text });
};

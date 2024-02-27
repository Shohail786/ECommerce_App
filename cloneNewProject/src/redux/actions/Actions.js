import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_CART,
} from "../reducers/ActionTypes.js";

export const addItemToCart = (data) => ({
  type: ADD_TO_CART,
  payload: data,
});

export const addToWishlist = (data) => ({
  type: ADD_TO_WISHLIST,
  payload: data,
});

export const removeFromCart = (data) => ({
  type: REMOVE_FROM_CART,
  payload: data,
});

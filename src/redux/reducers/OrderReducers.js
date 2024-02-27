import { ADD_ORDER, DELETE_ORDER } from "./ActionTypes";

const OrderReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, action.payload];
    case DELETE_ORDER:
      const deletedArray1 = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletedArray1;

    default:
      return state;
  }
};

export default OrderReducers;

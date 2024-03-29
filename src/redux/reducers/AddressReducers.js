import { ADD_ADDRESS, DELETE_ADDRESS } from "./ActionTypes";

const AddressReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return [...state, action.payload];
    case DELETE_ADDRESS:
      const deletedArray1 = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletedArray1;

    default:
      return state;
  }
};

export default AddressReducers;

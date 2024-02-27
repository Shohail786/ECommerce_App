import { legacy_createStore as createStore } from "redux";
import Reducers1 from "../reducers/Reducers1";
import Reducers2 from "../reducers/Reducers2";
import AddressReducers from "../reducers/AddressReducers";
import OrderReducers from "../reducers/OrderReducers";
import { combineReducers } from "redux";

const routeReducer = combineReducers({
  Reducers1,
  Reducers2,
  AddressReducers,
  OrderReducers,
});
const store = createStore(routeReducer);

export default store;

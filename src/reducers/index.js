import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import ordersReducer from "./ordersReducer";
import menuReducer from "./menuReducer";
export default combineReducers({
  menu: menuReducer,
  employeeAccount: employeeReducer,
  waiter: ordersReducer
});

import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import ordersReducer from "./ordersReducer";
import menuReducer from "./menuReducer";
import tablesReducer from "./tablesReducer";
export default combineReducers({
  menu: menuReducer,
  employeeAccount: employeeReducer,
  waiter: ordersReducer,
  tables: tablesReducer
});

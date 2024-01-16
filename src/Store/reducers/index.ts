import { combineReducers } from "redux";
import EmployeeReducer from "../Employee/EmployeeReducer";

const RootReducer = combineReducers({
  employee: EmployeeReducer,
});

export default RootReducer;

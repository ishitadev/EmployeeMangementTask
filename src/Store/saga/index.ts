import { all } from "redux-saga/effects";
import EmployeeSaga from "../Employee/EmployeeSaga";
export default function* RootSaga() {
  yield all([EmployeeSaga()]);
}

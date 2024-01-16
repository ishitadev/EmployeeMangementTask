import { EmployeeActions } from "../Store/Employee/Action";

export default interface EmployeeModel {
  id: number;
  name: string;
  email: string;
  dob: Date;
  departmentId: string;
}
export interface DepartmentModel {
  id: number;
  name: string;
}
export interface EmployeeStateModel {
  data: EmployeeModel[];
  department: any;
  loading: boolean;
  error: boolean;
  message: string;
  isEmployeeUpdated: boolean;
  isEmployeeAdded: boolean;
  isEmployeeDeleted: boolean;
  employeelistLoading: boolean;
  success: boolean;
  departmentlistLoading: boolean;
  employeedetail: EmployeeModel;
}
type addEmployee =
  | EmployeeActions.addEmployeeRequestAction
  | EmployeeActions.addEmployeeRequestSuccessAction
  | EmployeeActions.addEmployeeRequestFailureAction;
type deleteEmployee =
  | EmployeeActions.deleteEmployeeRequestAction
  | EmployeeActions.deleteEmployeeRequestSuccessAction
  | EmployeeActions.deleteEmployeeRequestFailureAction;
type editEmployee =
  | EmployeeActions.editEmployeeRequestAction
  | EmployeeActions.editEmployeeRequestSuccessAction
  | EmployeeActions.editEmployeeRequestFailureAction;
type getEmployeeList =
  | EmployeeActions.getEmployeeListRequestAction
  | EmployeeActions.getEmployeeListRequestSuccessAction
  | EmployeeActions.getEmployeeListRequestFailureAction;
type getDepartmentList =
  | EmployeeActions.getDepartmentListRequestAction
  | EmployeeActions.getDepartmentListRequestSuccessAction
  | EmployeeActions.getDepartmentListRequestFailureAction;
type getEmployeeDetail =
  | EmployeeActions.getEmployeeDetailRequestAction
  | EmployeeActions.getEmployeeDetailRequestSuccessAction
  | EmployeeActions.getEmployeeDetailRequestFailureAction;
export type Actions =
  | addEmployee
  | deleteEmployee
  | editEmployee
  | getEmployeeList
  | getDepartmentList
  | getEmployeeDetail;

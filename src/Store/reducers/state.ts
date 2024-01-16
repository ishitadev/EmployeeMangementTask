import { EmployeeStateModel } from "../../Models/EmployeeModel";
export interface RootState {
  users: RootState.EmployeeState;
}

export namespace RootState {
  export type EmployeeState = EmployeeStateModel;
}

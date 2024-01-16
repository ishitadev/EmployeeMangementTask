import { useMemo } from "react";
import { bindActionCreators, Dispatch } from "redux";
import * as Constants from "./Constant";
import EmployeeModel from "../../Models/EmployeeModel";
import { Action, ActionCreator } from "../../Models/actions";
export namespace EmployeeActions {
  export type getEmployeeListRequestAction = Action<
    typeof Constants.getEmployeeListRequestActionType,
    null
  >;
  export type getEmployeeListRequestSuccessAction = Action<
    typeof Constants.getEmployeeListRequestSuccessActionType,
    any
  >;
  export type getEmployeeListRequestFailureAction = Action<
    typeof Constants.getEmployeeListRequestFailureActionType,
    null
  >;

  export function getEmployeeListRequest(): getEmployeeListRequestAction {
    return ActionCreator(Constants.getEmployeeListRequestActionType, null);
  }
  export function getEmployeeListRequestSuccess(
    P: any
  ): getEmployeeListRequestSuccessAction {
    return ActionCreator(Constants.getEmployeeListRequestSuccessActionType, P);
  }
  export function getEmployeeListRequestFailure(): getEmployeeListRequestFailureAction {
    return ActionCreator(
      Constants.getEmployeeListRequestFailureActionType,
      null
    );
  }

  export type addEmployeeRequestAction = Action<
    typeof Constants.addEmployeeRequestActionType,
    EmployeeModel
  >;
  export type addEmployeeRequestSuccessAction = Action<
    typeof Constants.addEmployeeRequestSuccessActionType,
    null
  >;
  export type addEmployeeRequestFailureAction = Action<
    typeof Constants.addEmployeeRequestFailureActionType,
    null
  >;

  export function addEmployeeRequest(
    P: EmployeeModel
  ): addEmployeeRequestAction {
    return ActionCreator(Constants.addEmployeeRequestActionType, P);
  }
  export function addEmployeeRequestSuccess(): addEmployeeRequestSuccessAction {
    return ActionCreator(Constants.addEmployeeRequestSuccessActionType, null);
  }
  export function addEmployeeRequestFailure(): addEmployeeRequestFailureAction {
    return ActionCreator(Constants.addEmployeeRequestFailureActionType, null);
  }

  export type editEmployeeRequestAction = Action<
    typeof Constants.editEmployeeRequestActionType,
    EmployeeModel
  >;
  export type editEmployeeRequestSuccessAction = Action<
    typeof Constants.editEmployeeRequestSuccessActionType,
    EmployeeModel
  >;
  export type editEmployeeRequestFailureAction = Action<
    typeof Constants.editEmployeeRequestFailureActionType,
    null
  >;

  export function editEmployeeRequest(
    P: EmployeeModel
  ): editEmployeeRequestAction {
    return ActionCreator(Constants.editEmployeeRequestActionType, P);
  }
  export function editEmployeeRequestSuccess(
    P: EmployeeModel
  ): editEmployeeRequestSuccessAction {
    return ActionCreator(Constants.editEmployeeRequestSuccessActionType, P);
  }
  export function editEmployeeRequestFailure(): editEmployeeRequestFailureAction {
    return ActionCreator(Constants.editEmployeeRequestFailureActionType, null);
  }

  export type getDepartmentListRequestAction = Action<
    typeof Constants.getDepartmentListRequestActionType,
    null
  >;
  export type getDepartmentListRequestSuccessAction = Action<
    typeof Constants.getDepartmentListRequestSuccessActionType,
    any
  >;
  export type getDepartmentListRequestFailureAction = Action<
    typeof Constants.getDepartmentListRequestFailureActionType,
    null
  >;

  export function getDepartmentListRequest(): getDepartmentListRequestAction {
    return ActionCreator(Constants.getDepartmentListRequestActionType, null);
  }
  export function getDepartmentListRequestSuccess(
    P: any
  ): getDepartmentListRequestSuccessAction {
    return ActionCreator(
      Constants.getDepartmentListRequestSuccessActionType,
      P
    );
  }
  export function getDepartmentListRequestFailure(): getDepartmentListRequestFailureAction {
    return ActionCreator(
      Constants.getDepartmentListRequestFailureActionType,
      null
    );
  }

  export type deleteEmployeeRequestAction = Action<
    typeof Constants.deleteEmployeeRequestActionType,
    number
  >;
  export type deleteEmployeeRequestSuccessAction = Action<
    typeof Constants.deleteEmployeeRequestSuccessActionType,
    null
  >;
  export type deleteEmployeeRequestFailureAction = Action<
    typeof Constants.deleteEmployeeRequestFailureActionType,
    null
  >;

  export function deleteEmployeeRequest(
    P: number
  ): deleteEmployeeRequestAction {
    return ActionCreator(Constants.deleteEmployeeRequestActionType, P);
  }
  export function deleteEmployeeRequestSuccess(): deleteEmployeeRequestSuccessAction {
    return ActionCreator(
      Constants.deleteEmployeeRequestSuccessActionType,
      null
    );
  }
  export function deleteEmployeeRequestFailure(): deleteEmployeeRequestFailureAction {
    return ActionCreator(
      Constants.deleteEmployeeRequestFailureActionType,
      null
    );
  }
  export type getEmployeeDetailRequestAction = Action<
    typeof Constants.getEmployeeDetailRequestActionType,
    string
  >;
  export type getEmployeeDetailRequestSuccessAction = Action<
    typeof Constants.getEmployeeDetailRequestSuccessActionType,
    EmployeeModel
  >;
  export type getEmployeeDetailRequestFailureAction = Action<
    typeof Constants.getEmployeeDetailRequestFailureActionType,
    null
  >;

  export function getEmployeeDetailRequest(
    P: string
  ): getEmployeeDetailRequestAction {
    return ActionCreator(Constants.getEmployeeDetailRequestActionType, P);
  }
  export function getEmployeeDetailRequestSuccess(
    P: EmployeeModel
  ): getEmployeeDetailRequestSuccessAction {
    return ActionCreator(
      Constants.getEmployeeDetailRequestSuccessActionType,
      P
    );
  }
  export function getEmployeeDetailRequestFailure(): getEmployeeDetailRequestFailureAction {
    return ActionCreator(
      Constants.getEmployeeDetailRequestFailureActionType,
      null
    );
  }
}
export type EmployeeActions = Omit<typeof EmployeeActions, "Type">;
export const useEmployeeActions = (dispatch: Dispatch) => {
  const { ...actions } = EmployeeActions;
  return useMemo(
    () => bindActionCreators(actions as any, dispatch),
    [dispatch]
  ) as EmployeeActions;
};

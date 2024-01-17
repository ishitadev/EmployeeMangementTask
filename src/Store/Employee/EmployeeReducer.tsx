import { EmployeeActions } from "./Action";
import { RootState } from "../reducers/state";
import EmployeeModel, { DepartmentModel } from "../../Models/EmployeeModel";
import { EmployeeStateModel } from "../../Models/EmployeeModel";
import { Actions } from "../../Models/EmployeeModel";
import * as Constants from "./Constant";
const initialState: RootState.EmployeeState = {
  data: [],
  department: [],
  loading: false,
  error: false,
  message: "",
  isEmployeeUpdated: false,
  isEmployeeAdded: false,
  isEmployeeDeleted: false,
  employeelistLoading: false,
  success: false,
  departmentlistLoading: false,
  employeedetail: {} as EmployeeModel,
};

function EmployeeReducer(
  state: EmployeeStateModel = initialState,
  action: Actions
): EmployeeStateModel {
  switch (action.type) {
    case Constants.getEmployeeListRequestActionType:
      return getEmployeeListAction(state);
    case Constants.getEmployeeListRequestSuccessActionType:
      return getEmployeeListSuccessAction(state, action);
    case Constants.getEmployeeListRequestFailureActionType:
      return getEmployeeListFailureAction(state, action);

    case Constants.getDepartmentListRequestActionType:
      return getDepartmentListAction(state);
    case Constants.getDepartmentListRequestSuccessActionType:
      return getDepartmentListSuccessAction(state, action);
    case Constants.getDepartmentListRequestFailureActionType:
      return getDepartmentListFailureAction(state, action);

    case Constants.addEmployeeRequestActionType:
      return addEmployeeAction(state);
    case Constants.addEmployeeRequestSuccessActionType:
      return addEmployeeSuccessAction(state, action);
    case Constants.addEmployeeRequestFailureActionType:
      return addEmployeeFailureAction(state, action);

    case Constants.editEmployeeRequestActionType:
      return editEmployeeAction(state);
    case Constants.editEmployeeRequestSuccessActionType:
      return editEmployeeSuccessAction(state, action);
    case Constants.editEmployeeRequestFailureActionType:
      return editEmployeeFailureAction(state, action);

    case Constants.deleteEmployeeRequestActionType:
      return deleteEmployeeAction(state);
    case Constants.deleteEmployeeRequestSuccessActionType:
      return deleteEmployeeSuccessAction(state, action);
    case Constants.deleteEmployeeRequestFailureActionType:
      return deleteEmployeeFailureAction(state, action);

    case Constants.getEmployeeDetailRequestActionType:
      return getEmployeeDetailAction(state);
    case Constants.getEmployeeDetailRequestSuccessActionType:
      return getEmployeeDetailSuccessAction(state, action);
    case Constants.getEmployeeDetailRequestFailureActionType:
      return getEmployeeDetailFailureAction(state, action);
    default:
      return state;
  }

  function addEmployeeAction(state: EmployeeStateModel): EmployeeStateModel {
    return {
      ...state,
      loading: true,
    };
  }
  function addEmployeeSuccessAction(
    state: EmployeeStateModel,
    action: EmployeeActions.addEmployeeRequestSuccessAction
  ): EmployeeStateModel {
    return {
      ...state,
      isEmployeeAdded: true,
      message: "Success",
      loading: false,
    };
  }
  function addEmployeeFailureAction(
    state: EmployeeStateModel,
    action: EmployeeActions.addEmployeeRequestFailureAction
  ): EmployeeStateModel {
    return {
      ...state,
      isEmployeeAdded: false,
      error: true,
      loading: false,
    };
  }
  function editEmployeeAction(state: EmployeeStateModel): EmployeeStateModel {
    return {
      ...state,
      loading: true,
    };
  }
  function editEmployeeSuccessAction(
    state: EmployeeStateModel,
    action: EmployeeActions.editEmployeeRequestSuccessAction
  ): EmployeeStateModel {
    return {
      ...state,
      isEmployeeUpdated: true,
      message: "Success",
      loading: false,
      data: state.data.map(emp => emp.id === action.payload?.id ? {...action.payload, dob: new Date(action.payload.dob).toISOString() } : emp)
    };
  }
  function editEmployeeFailureAction(
    state: EmployeeStateModel,
    action: EmployeeActions.editEmployeeRequestFailureAction
  ): EmployeeStateModel {
    return {
      ...state,
      isEmployeeUpdated: false,
      loading: false,
      error: true,
    };
  }
  function deleteEmployeeAction(state: EmployeeStateModel): EmployeeStateModel {
    return {
      ...state,
      loading: true,
      isEmployeeDeleted: false,
    };
  }
  function deleteEmployeeSuccessAction(
    state: EmployeeStateModel,
    action: EmployeeActions.deleteEmployeeRequestSuccessAction
  ): EmployeeStateModel {
    return {
      ...state,
      data: state.data.filter(x => x.id !== action.payload),
      isEmployeeDeleted: true,
      message: "Success",
      loading: false,
    };
  }

  function deleteEmployeeFailureAction(
    state: EmployeeStateModel,
    action: EmployeeActions.deleteEmployeeRequestFailureAction
  ): EmployeeStateModel {
    return {
      ...state,
      isEmployeeDeleted: false,
      loading: false,
      error: true,
    };
  }
  function getEmployeeListAction(
    state: EmployeeStateModel
  ): EmployeeStateModel {
    return {
      ...state,
      loading: true,
      employeelistLoading: true,
    };
  }
  function getEmployeeListSuccessAction(
    state: EmployeeStateModel,
    action: EmployeeActions.getEmployeeListRequestSuccessAction
  ): EmployeeStateModel {
    if (action.payload) {
      return {
        ...state,
        success: true,
        loading: false,
        data: action.payload,
        employeelistLoading: false,
      };
    }
    return state;
  }
  function getEmployeeListFailureAction(
    state: EmployeeStateModel,
    action: EmployeeActions.getEmployeeListRequestFailureAction
  ): EmployeeStateModel {
    return {
      ...state,
      success: false,
      loading: false,
    };
  }
  function getDepartmentListAction(
    state: EmployeeStateModel
  ): EmployeeStateModel {
    return {
      ...state,
      loading: true,
      departmentlistLoading: true,
    };
  }
  function getDepartmentListSuccessAction(
    state: EmployeeStateModel,
    action: EmployeeActions.getDepartmentListRequestSuccessAction
  ): EmployeeStateModel {
    if (action.payload) {
      return {
        ...state,
        success: true,
        loading: false,
        department: action.payload,
        departmentlistLoading: false,
      };
    }
    return state;
  }
  function getDepartmentListFailureAction(
    state: EmployeeStateModel,
    action: EmployeeActions.getDepartmentListRequestFailureAction
  ): EmployeeStateModel {
    return {
      ...state,
      success: false,
      loading: false,
    };
  }
  function getEmployeeDetailAction(
    state: EmployeeStateModel
  ): EmployeeStateModel {
    return {
      ...state,
      loading: true,
    };
  }
  function getEmployeeDetailSuccessAction(
    state: EmployeeStateModel,
    action: EmployeeActions.getEmployeeDetailRequestSuccessAction
  ): EmployeeStateModel {
    if (action.payload) {
      return {
        ...state,
        employeedetail: action.payload,
        loading: false,
      };
    }
    return state;
  }
  function getEmployeeDetailFailureAction(
    state: EmployeeStateModel,
    action: EmployeeActions.getEmployeeDetailRequestFailureAction
  ): EmployeeStateModel {
    return {
      ...state,
      success: false,
      loading: false,
    };
  }
}

export default EmployeeReducer;

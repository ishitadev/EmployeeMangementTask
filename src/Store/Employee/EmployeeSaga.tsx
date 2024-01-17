import { all, put, takeEvery } from "redux-saga/effects";
import { EmployeeActions } from "./Action";
import { AxiosResponse } from "axios";
import { ApiService } from "../../Utilities/api.service";
import * as Constants from "./Constant";
function* asyncAddEmployee(data: EmployeeActions.addEmployeeRequestAction) {
  try {
    const response: AxiosResponse = yield ApiService.postData(
      "api/Employee/Create",
      data.payload
    );
    if (response.status === 200) {
      yield put(EmployeeActions.addEmployeeRequestSuccess());
    }
  } catch (error) {
    console.log(error);
    yield put(EmployeeActions.addEmployeeRequestFailure());
  }
}

function* asyncEditEmployee(data: EmployeeActions.editEmployeeRequestAction) {
  try {
    const response: AxiosResponse = yield ApiService.patchData(
      `api/Employee/Update/${data.payload?.id}`,
      data.payload
    );
    if (response.status === 200) {
      yield put(
        EmployeeActions.editEmployeeRequestSuccess(data.payload)
      );
    }
  } catch (error) {
    console.log(error);
    yield put(EmployeeActions.editEmployeeRequestFailure());
  }
}

function* asyncGetEmployeeList(
  data: EmployeeActions.getEmployeeListRequestAction
) {
  try {
    const response: AxiosResponse = yield ApiService.getData(
      `api/Employee/GetAll`
    );
    if (response.status === 200) {
      yield put(
        EmployeeActions.getEmployeeListRequestSuccess(response.data.result)
      );
    }
  } catch (error) {
    console.log(error);
    yield put(EmployeeActions.getEmployeeListRequestFailure());
  }
}
function* asyncGetEmployeeDetails(
  data: EmployeeActions.getEmployeeDetailRequestAction
) {
  try {
    const response: AxiosResponse = yield ApiService.getData(
      `api/Employee/Details/${data.payload}`
    );
    if (response.status === 200) {
      yield put(
        EmployeeActions.getEmployeeDetailRequestSuccess(response.data.result)
      );
    }
  } catch (error) {
    console.log(error);
    yield put(EmployeeActions.getEmployeeDetailRequestFailure());
  }
}

function* asyncGetDepartmentList(
  data: EmployeeActions.getDepartmentListRequestAction
) {
  try {
    const response: AxiosResponse = yield ApiService.getData(
      `api/Department/GetAll`
    );
    if (response.status === 200) {
      yield put(
        EmployeeActions.getDepartmentListRequestSuccess(response.data.result)
      );
    }
  } catch (error) {
    console.log(error);
    yield put(EmployeeActions.getDepartmentListRequestFailure());
  }
}

function* asyncDeleteEmployee(
  { payload }: EmployeeActions.deleteEmployeeRequestAction
) {
  try {
    const response: AxiosResponse = yield ApiService.deleteData(
      `api/Employee?id=${payload}`
    );
    if (response.status === 200) {
      yield put(EmployeeActions.deleteEmployeeRequestSuccess(payload));
    }
  } catch (error) {
    console.log(error);
    yield put(EmployeeActions.deleteEmployeeRequestFailure());
  }
}
export default function* EmployeeSaga() {
  yield all([
    takeEvery(Constants.addEmployeeRequestActionType, asyncAddEmployee),
    takeEvery(Constants.editEmployeeRequestActionType, asyncEditEmployee),
    takeEvery(Constants.getEmployeeListRequestActionType, asyncGetEmployeeList),
    takeEvery(
      Constants.getDepartmentListRequestActionType,
      asyncGetDepartmentList
    ),
    takeEvery(Constants.deleteEmployeeRequestActionType, asyncDeleteEmployee),
    takeEvery(
      Constants.getEmployeeDetailRequestActionType,
      asyncGetEmployeeDetails
    ),
  ]);
}

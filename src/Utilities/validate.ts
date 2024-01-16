import EmployeeModel from "../Models/EmployeeModel"; // Update with your actual path

export type ErrorType = Record<string, string>;

const validate = (employee: EmployeeModel): ErrorType => {
  let error: ErrorType = {};

  if (!employee.name.trim()) {
    error["name"] = "Please fill in the name field";
  }

  if (!employee.email.trim()) {
    error["email"] = "Please fill in the email field";
  }

  return error;
};

export default validate;

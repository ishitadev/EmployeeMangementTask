import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import EmployeeModel from "../Models/EmployeeModel";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEmployeeActions } from "../Store/Employee/Action";
import validate from "../Utilities/validate";
import { ErrorType } from "../Utilities/validate";

const AddEmployeePage: React.FC = () => {
  const [employee, setEmployee] = useState<EmployeeModel>({
    id: 0,
    name: "",
    email: "",
    dob: new Date(),
    departmentId: "",
  });

  const [errorState, setErrorState] = useState<ErrorType>();

  const employeeSelector = useSelector((state: any) => state.employee);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const employeeAction = useEmployeeActions(dispatch);
  const handleNameChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | { name?: string; value: any }
    >
  ) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      name: value,
    }));
  };

  const handleEmailChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | { name?: string; value: any }
    >
  ) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      email: value,
    }));
  };
  const handleDateChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | { name?: string; value: any }
    >
  ) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      dob: new Date(value),
    }));
  };

  useEffect(() => {
    employeeAction.getDepartmentListRequest();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validateRes: ErrorType = validate(employee);


    if (validateRes?.name || validateRes?.email) {
      setErrorState(validateRes);
    } else {
      employeeAction.addEmployeeRequest(employee);
      navigate("/");
    }
  };

  const onBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <ArrowBack onClick={onBackClick} sx={{ marginRight: 2 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Add Employee
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Container component="form" onSubmit={handleSubmit} maxWidth="md">
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          name="name"
          fullWidth
          value={employee.name}
          onChange={handleNameChange}
          required
          helperText={errorState?.name}
          error={!!errorState?.name}
        />

        <TextField
          type="email"
          label="Email"
          variant="outlined"
          margin="normal"
          name="email"
          fullWidth
          value={employee.email}
          onChange={handleEmailChange}
          required
          helperText={errorState?.email}
          error={!!errorState?.email}
        />
        <TextField
          type="date"
          label="Date of Birth"
          variant="outlined"
          margin="normal"
          name="dob"
          fullWidth
          onChange={handleDateChange}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            max: new Date().toISOString().split("T")[0],
          }}
          required
        />
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="department-label">Department</InputLabel>
          <Select
            label="Department"
            name="department"
            value={employee.departmentId}
            onChange={(e) =>
              setEmployee({ ...employee, departmentId: e.target.value })
            }
            required
          >
            {employeeSelector.department.map((option: any) => (
              <MenuItem key={option?.id} value={option?.id}>
                {option?.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          size="large"
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginRight: 2 }}
        >
          Add Employee
        </Button>
        <Button
          size="large"
          type="button"
          variant="contained"
          color="error"
          onClick={onBackClick}
        >
          Cancel
        </Button>
      </Container>
    </>
  );
};

export default AddEmployeePage;

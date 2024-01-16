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
import EmployeeModel from "../Models/EmployeeModel";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEmployeeActions } from "../Store/Employee/Action";
import { ErrorType } from "../Utilities/validate";
import validate from "../Utilities/validate";
import { ArrowBack } from "@mui/icons-material";
import moment from "moment";

const month = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

const EmployeeEdit: React.FC = () => {
  const employeeSelector = useSelector((state: any) => state.employee);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams<string>();
  const employeeAction = useEmployeeActions(dispatch);

  useEffect(() => {
    if (id) employeeAction.getEmployeeDetailRequest(id);
  }, []);
  const [employee, setEmployee] = useState<EmployeeModel>({
    id: 0,
    name: "",
    email: "",
    dob: new Date(),
    departmentId: "",
  });

  const [errorState, setErrorState] = useState<ErrorType>();

  useEffect(() => {
    if (Object.keys(employeeSelector.employeedetail || {}).length) {
      console.log(employeeSelector.employeedetail);
      setEmployee({
        ...employeeSelector.employeedetail,
        dob: new Date(employeeSelector.employeedetail.dob),
      });
    }
  }, [employeeSelector.employeedetail]);
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
      HTMLInputElement | HTMLTextAreaElement | { name?: string; value: string }
    >
  ) => {
    const { name, value } = e.target;
    console.log(value, new Date(moment(value, "YYYY-MM-DD").toISOString()));
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      dob: new Date(moment(value, "YYYY-MM-DD").toISOString()),
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
      employeeAction.editEmployeeRequest(employee);
      navigate("/");
    }
  };

  const onBackClick = () => {
    navigate("/");
  };

  //   console.log({ employee });

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <ArrowBack onClick={onBackClick} sx={{ marginRight: 2 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Edit Employee
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
        />
        <TextField
          type="date"
          label="Date of Birth"
          variant="outlined"
          margin="normal"
          name="dob"
          value={moment(employee.dob).format("YYYY-MM-DD")}
          fullWidth
          onChange={handleDateChange}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            max: moment().format("YYYY-MM-DD"),
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
          Edit Employee
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

export default EmployeeEdit;

import React, { useEffect, useState } from "react";
import { useEmployeeActions } from "../Store/Employee/Action";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  TextField,
  Container,
  Button,
  Paper,
  Box,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Add, BorderColor, DeleteForever } from "@mui/icons-material";
import styles from "./style";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { DepartmentModel } from "../Models/EmployeeModel";

const EmployeeListing: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const employeeSelector = useSelector((state: any) => state.employee);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const employeeAction = useEmployeeActions(dispatch);
  const { state } = useLocation();

  const style = styles();
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#4990e2",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  useEffect(() => {
    if (!employeeSelector.department.length)
      employeeAction.getDepartmentListRequest();
    if (!employeeSelector.data.length || (state && state.reloadEmployees))
      employeeAction.getEmployeeListRequest();
  }, [employeeSelector.isEmployeeDeleted]);

  const handleAdd = () => {
    navigate(`/Add`);
  };

  const handleEdit = (id: number) => {
    navigate(`/Edit/${id}`);
  };

  const handleDelete = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        employeeAction.deleteEmployeeRequest(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your record has been deleted.",
          icon: "success",
        });
        navigate(`/`);
      }
    });
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          gap={2}
          marginY={2}
        >
          <Button
            variant="outlined"
            className="addButton"
            style={{ padding: "6px 15px" }}
            onClick={handleAdd}
          >
            <Add style={{ marginRight: "5px" }} /> Add
          </Button>
          <TextField
            label="Search"
            variant="outlined"
            value={searchTerm}
            placeholder="Search in Name or Email"
            onChange={(e) => setSearchTerm(e.target.value)}
            size="small"
          />
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Employee Name </StyledTableCell>
                <StyledTableCell>Employee Email</StyledTableCell>
                <StyledTableCell>Date Of Birth</StyledTableCell>
                <StyledTableCell>Department</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employeeSelector.data.length > 0 &&
                employeeSelector.data
                  .filter((row: { name: string; email: string }) =>
                    searchTerm.length > 0
                      ? row.name
                          .toLowerCase()
                          .includes(searchTerm.trim().toLowerCase()) ||
                        row.email
                          .toLowerCase()
                          .includes(searchTerm.trim().toLowerCase())
                      : true
                  )
                  .map((row: any) => (
                    <TableRow key={row.id} className="me-3">
                      <StyledTableCell component="th" scope="row">
                        {row?.name}
                      </StyledTableCell>
                      <StyledTableCell>{row?.email}</StyledTableCell>
                      <StyledTableCell>{row?.dob}</StyledTableCell>
                      <StyledTableCell>
                        {
                          employeeSelector.department.find(
                            (ele: DepartmentModel) =>
                              ele.id === row?.departmentId
                          )?.name
                        }
                      </StyledTableCell>
                      <StyledTableCell>
                        <BorderColor
                          className={style.iconstyle}
                          onClick={() => handleEdit(row.id)}
                        />
                        <DeleteForever
                          className={style.iconstyle}
                          style={{ color: "red" }}
                          onClick={() => handleDelete(row.id)}
                        />
                      </StyledTableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default EmployeeListing;

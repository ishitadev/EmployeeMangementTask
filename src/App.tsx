// App.tsx
import React from "react";
import EmployeeListing from "./Component/EmployeeListing";
import { Route, Routes } from "react-router-dom";
import EmployeeAdd from "./Component/EmployeeAdd";
import EmployeeEdit from "./Component/EmployeeEdit";

const App: React.FC = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<EmployeeListing />} />
          <Route path="/Add" element={<EmployeeAdd />} />
          <Route path="/Edit/:id" element={<EmployeeEdit />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

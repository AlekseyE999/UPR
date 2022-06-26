import React from "react";
import LoginPage from "./pages/LoginPage.jsx";
import { Route, Routes } from "react-router-dom";
import TasksTable from "./components/TasksTable";
import Loading from "./components/Loading";
import JwtProvider from "./components/JwtProvider";
import UserTablePage from "./pages/UserTablePage";

function App() {

  console.log('dasd');

  return  (
    <div className="App">
      <Routes>
        <Route index element={<JwtProvider consumer={<UserTablePage />} />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import AdminLoginPage from "./Components/Admin/AdminLogin";
import Form from "./Components/Form/Form";
// import "bootstrap/dist/css/bootstrap.min.css";
import Settings from "./Components/Admin/settings";
import Home from "./App";

// Function to check if the user is logged in
// const isLoggedIn = () => {
//   return localStorage.getItem("token") !== null;
// };

// Function to render routes based on login status
// const renderRoutes = () => {
//   if (isLoggedIn()) {
//     return (
//       <Routes>
//         <Route path="/" element={<Navigate replace to="dashboard" />} />
        // <Route path="/dashboard" element={<AdminDashboard />} />
//       </Routes>
//     );
//   } else {
//     return (
      // <Routes>
      //   <Route path="/" element={<Home />} />
      //   <Route path="/login" element={<AdminLoginPage />} />
      //   <Route path="*" element={<Navigate to="/" replace />} />
      // </Routes>
//     );
//   }
// };

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter>{renderRoutes()}</BrowserRouter> */}
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AdminLoginPage />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/form" element={<Form />} />


        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById("root")
);
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Addemp } from "./Addemp";
import { EmpDetail } from "./EmpDetail";
import { Dashboard } from "./Dashboard";
import Nav from "./Nav";
import Logout from "./Logout";
import Login from "./Login";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <br /> <br />
      <Routes>
        <Route path="/" element={<Addemp />} />
        <Route path="/empdetail" element={<EmpDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Addemp } from "./Addemp";
import { EmpDetail } from "./EmpDetail";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Addemp />} />
        <Route path="/empdetail" element={<EmpDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

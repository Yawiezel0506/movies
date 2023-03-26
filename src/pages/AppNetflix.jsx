import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Netflix from "./Netflix";
import SignUp from "./SignUp";

export default function AppNetflix() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exect path="/login" element ={<Login/>}/>
        <Route exect path="/signup" element ={<SignUp/>}/>
        <Route exect path="/" element ={<Netflix/>}/>
      </Routes>
    </BrowserRouter>
  );
}

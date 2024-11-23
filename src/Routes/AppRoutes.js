import React from "react";
import { Routes, Route } from "react-router";
import Home from "../Pages/Feed/Feed";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/admin" element={<div>About</div>} />
    </Routes>
  )
}

export default AppRoutes



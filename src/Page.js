import React , { Component }from "react";
import App from "./App"
import Login from "./Login"
import { Routes, Route } from 'react-router-dom';

const Linktest = () => {
  return (
   <Routes>
		 	<Route path="/" element={<App />}></Route>
      <Route path="/Login" element={<Login />}></Route>
    </Routes>
  );
}

export default Linktest;
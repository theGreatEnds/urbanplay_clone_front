import React from "react";
import App from "./App"
import Login from "./Login"
import Signup from "./Signup"
import Find from "./Find"
import { Routes, Route } from 'react-router-dom';

const Linktest = () => {
  return (
   <Routes>
		 	<Route path="/" element={<App />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Find" element={<Find />}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
    </Routes>
  );
}

export default Linktest;
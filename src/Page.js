import React , { Component }from "react";
import App from "./App"
import Signup from "./Signup"
import { Routes, Route } from 'react-router-dom';

const Linktest = () => {
  return (
   <Routes>
					<Route path="/" element={<App />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  );
}

export default Linktest;
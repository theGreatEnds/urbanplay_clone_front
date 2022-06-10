import React  from "react";
import {Reset} from 'styled-reset';

import Bg from "./components/Bg";
import { Routes, Route } from 'react-router-dom';


import Login from "./components/Login";
import Find from "./components/Find";
import Signup from "./components/Signup";
function App() {
  return (
    <>
    <Reset/>
    <Routes>
      <Route path="/" element={<Bg/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Find" element={<Find/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
    </Routes>
    </>
  );
}

export default App;
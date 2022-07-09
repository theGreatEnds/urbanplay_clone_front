import React  from "react";
import {Reset} from 'styled-reset';

import Home from "./components/Home";
import { Routes, Route } from 'react-router-dom';

import AboutOs from "./components/AboutOs";
import { RProvider } from './RecruitContext';
import { PProvider } from './PressContext';

import Login from "./components/Login";
import Find from "./components/Find";
import Signup from "./components/Signup";
import Recruit from "./components/Recruit";
import Press from "./components/Press";


function App() {
  return (
    <>
    <Reset/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/AboutOs" element={<AboutOs/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Find" element={<Find/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/Contact" element={<RProvider><Recruit/></RProvider>}></Route>
      <Route path="/Press" element={<PProvider><Press/></PProvider>}></Route>
    </Routes>
    </>
  );
}

export default App;
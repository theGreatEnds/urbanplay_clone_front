import React  from "react";
import {Reset} from 'styled-reset';

import Login from "./components/Login"
import Signup from "./components/Signup"
import Find from "./components/Find"
import { Routes, Route } from 'react-router-dom';

import Bg from "./components/Bg";
import Header from "./components/Header"
import SideIndex from "./components/SideIndex";


function App() {
  
  

  return (
    <>
    <Reset/>
    <Header/>
    <SideIndex/>
    <Routes>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Find" element={<Find />}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
    </Routes>
    <Bg/>
    </>
  );
}

export default App;
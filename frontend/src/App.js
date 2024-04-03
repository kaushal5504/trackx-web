import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import {MainLayout} from './styles/Layouts'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
import  Login  from './Components/Login';
import FirstComponent from './FirstComponent';


function App() {
  const {login}=useGlobalContext()
  if(!login)
  return <Login/>
  else return <FirstComponent/>
}

export default App;

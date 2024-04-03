

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
import { Login } from './Components/Login';
import Register from './Components/Register';
import News from './Components/News/News';
import Transactions from './Components/Transactions';
import Advisory from './Components/Advisory';
import Resource from './Components/Resources/Resource';

const FirstComponent=()=> {
  
  const [active, setActive] = useState(5)

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Transactions/>
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
        case 5:
         return <News/>
      case 6:
        return <Resource/>
      case 7:
          return <Advisory/>
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  
  position: relative;
  main{
    flex: 1;
    
    background-color:#f9f8f9;
    border:3px solid #f9f8f9;
    border-radius:10px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;




export default FirstComponent
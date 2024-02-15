import styled from 'styled-components';
import bg from './img/bg.png';
import {MainLayout} from './styles/Layouts';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
// import Dashboard from './Components/Dashboard/Dashboard';
import React, { useState } from 'react';
import { useMemo } from 'react';

const App = () => {
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch (active) {
      case 1:
        return <h1>Dashboard</h1>;
      case 2:
        return <h1>Analytics</h1>;
      case 3:
        return <h1>Settings</h1>;
      default:
        return <h1>Home</h1>;
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, [])
  
  return (
    <AppStyled bg={bg} className='App'>
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
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    padding: 2rem 1.5rem;
    
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

export default App;

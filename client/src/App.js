import React from 'react';
import Nav from './Components/Nav/Nav';
import Outlet from './Components/Outlet/Outlet';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

function App(props) {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Outlet></Outlet>
    </BrowserRouter>
  );
}

export default App;

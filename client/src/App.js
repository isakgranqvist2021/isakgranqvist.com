import React from 'react';
import Nav from './Components/Nav/Nav';
import Outlet from './Components/Outlet/Outlet';
import Alert from './Components/Alert/Alert';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';


const themes = {
  light: ['#ffffff', '#c7c7c7', '#cccccc', '#2c2c2caf', '#222222af', '#2c2c2c', '#333333'],
  dark: ['#333333', '#2c2c2c', '#2c2c2caf', '#afafaf', '#cccccc', '#c7c7c7', '#ffffff']
}


function setThemeVariables(theme) {
  let root = document.querySelector(':root');

  themes[theme].forEach((color, i) => {
    root.style.setProperty(`--color${i + 1}`, color);
  });
}

function App(props) {
  const [theme, setTheme] = React.useState('dark');
  setThemeVariables(theme);

  return (
    <BrowserRouter>
      <Nav setTheme={setTheme.bind(this)}></Nav>
      <Alert />
      <Outlet></Outlet>
    </BrowserRouter>
  );
}

export default App;

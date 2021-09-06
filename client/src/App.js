/** @format */

import React from 'react';
import Nav from './Components/Nav/Nav';
import Outlet from './Components/Outlet';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
	return (
		<BrowserRouter>
			<Nav></Nav>
			<Outlet></Outlet>
		</BrowserRouter>
	);
}

export default App;

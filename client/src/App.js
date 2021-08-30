/** @format */

import React from 'react';
import Nav from './Components/Nav';
import Outlet from './Components/Outlet';
import Alert from './Components/Alert';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
	return (
		<BrowserRouter>
			<Nav></Nav>
			<Alert />
			<Outlet></Outlet>
		</BrowserRouter>
	);
}

export default App;

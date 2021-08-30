/** @format */

import React from 'react';
import Router from './Router';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Projects from '../Pages/Projects';

const components = { Home, About, Contact, Projects };

function Outlet(props) {
	return (
		<div className='wrapper'>
			<main>
				<div className='content'>
					<Router {...components}></Router>
				</div>
			</main>
		</div>
	);
}

export default Outlet;

/** @format */

import React from 'react';
import Router from './Router';
import Home from '../Pages/Home';

const components = { Home };

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

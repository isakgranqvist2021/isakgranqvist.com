/** @format */

import React from 'react';
import navStore from '../../Store/nav.reducer';
import Router from '../Router';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import Projects from '../../Pages/Projects/Projects';

const components = { Home, About, Contact, Projects };

function Outlet(props) {
	const [open, setOpen] = React.useState(false);

	navStore.subscribe(() => setOpen(navStore.getState().open));

	return (
		<div className='wrapper'>
			<div
				onClick={() => navStore.dispatch({ type: 'toggle' })}
				className={open ? 'menu open' : 'menu'}>
				<i className={`fas ${open ? 'fa-times' : 'fa-bars'}`}></i>
			</div>

			<main>
				<div className='content'>
					<Router {...components}></Router>
				</div>
			</main>
		</div>
	);
}

export default Outlet;

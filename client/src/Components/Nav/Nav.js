/** @format */

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Nav.scss';

function Nav(props) {
	const [open, setOpen] = React.useState(false);
	const history = useHistory();

	const links = [
		{ to: '/', text: 'home' },
		{ to: '/about', text: 'about' },
		{ to: '/contact', text: 'contact' },
		{ to: '/projects', text: 'projects' },
	];

	const navigate = (e, to) => {
		e.preventDefault();
	};

	return (
		<nav id='Nav'>
			<div className='container'>
				<img
					src='https://static.isakgranqvist.com/svg/simple-logo.white.svg'
					alt='Isak Granqvist Logo'
				/>
				<div className={['nav-links', open ? 'open' : ''].join(' ')}>
					{links.map((link, i) => (
						<a
							key={i}
							href={link.to}
							onClick={(e) => navigate(e, link.to)}>
							{link.text}
						</a>
					))}
				</div>
				<span
					className='material-icons-outlined'
					id='sidenav-toggle'
					onClick={() => setOpen(!open ? true : false)}>
					{open ? 'close' : 'menu'}
				</span>
			</div>

			<div
				id='filler'
				className={open ? 'open' : ''}
				onClick={() => setOpen(false)}></div>
		</nav>
	);
}

export default Nav;

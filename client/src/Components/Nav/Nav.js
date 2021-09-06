/** @format */

import React from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.scss';
import Scrollspy from 'react-scrollspy';

function Nav(props) {
	const [open, setOpen] = React.useState(false);
	const history = useHistory();

	const links = [
		{ to: '/', text: 'home', selector: '#Hero' },
		{ to: '/projects', text: 'projects', selector: '#Projects' },
		{ to: '/about', text: 'about', selector: '#About' },
		{ to: '/contact', text: 'contact', selector: '#Contact' },
	];

	const navigate = (e, to) => {
		e.preventDefault();
		setOpen(false);
		document.querySelector(to).scrollIntoView({
			behavior: 'smooth',
		});
	};

	return (
		<nav id='Nav'>
			<div className='container'>
				<img
					src='https://static.isakgranqvist.com/svg/simple-logo.white.svg'
					alt='Isak Granqvist Logo'
				/>
				<div className={['nav-links', open ? 'open' : ''].join(' ')}>
					<Scrollspy
						items={['Hero', 'Projects', 'About', 'Contact']}
						currentClassName='is-current'>
						{links.map((link, i) => (
							<a
								key={i}
								href={link.selector.replace('#', '')}
								onClick={(e) => navigate(e, link.selector)}>
								{link.text}
							</a>
						))}
					</Scrollspy>
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

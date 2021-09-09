/** @format */

import React from 'react';
import './Nav.scss';
import Scrollspy from 'react-scrollspy';

function Nav(props) {
	const [open, setOpen] = React.useState(false);

	const links = [
		{ to: '/', text: 'home', selector: '#Home' },
		{ to: '/projects', text: 'projects', selector: '#Projects' },
		{ to: '/about', text: 'about', selector: '#About' },
		{ to: '/contact', text: 'contact', selector: '#Contact' },
	];

	return (
		<nav id='Nav'>
			<div className='container'>
				<a href='#Home'>
					<img
						src='https://static.isakgranqvist.com/svg/logo.svg'
						alt='Isak Granqvist Logo'
					/>
				</a>
				<div className={['nav-links', open ? 'open' : ''].join(' ')}>
					<Scrollspy
						items={['Home', 'Projects', 'About', 'Contact']}
						currentClassName='is-current'>
						{links.map((link, i) => (
							<a
								key={i}
								href={link.selector}
								onClick={(e) => setOpen(false)}>
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

/** @format */

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Nav.scss';

function Nav(props) {
	const history = useHistory();

	const links = [
		{ to: '/', text: 'home', icon: 'roofing' },
		{ to: '/about', text: 'about', icon: 'help_outline' },
		{ to: '/contact', text: 'contact', icon: 'mail_outline' },
		{ to: '/projects', text: 'projects', icon: 'work_outline' },
	];

	const navigate = (e, to) => {
		e.preventDefault();
		history.push(to, null);
	};

	return (
		<nav id='Nav'>
			<div className='container'>
				<img
					src='https://static.isakgranqvist.com/svg/simple-logo.white.svg'
					alt='Isak Granqvist Logo'
				/>
				<div className='nav-links'>
					{links.map((link, i) => (
						<a
							key={i}
							href={link.to}
							onClick={(e) => navigate(e, link.to)}>
							{link.text}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
}

export default Nav;
/*
<ul className='uk-nav uk-nav-default tm-nav uk-margin-top'>
	<li className='uk-nav-header'>More</li>{' '}
	<li>
		<a href='https://www.fiverr.com/isakgranqvis277'>
			Fiverr
		</a>
	</li>
	<li href='https://github.com/isakgranqvist2021'>
		<a>Github</a>
	</li>
	<li>
		<a href='https://www.linkedin.com/in/isak-granqvist-b1217a207/'>
			Linkedin
		</a>
	</li>
	<li>
		<a href='mailto:contact@isakgranqvist.com'>Email</a>
	</li>
</ul>
*/

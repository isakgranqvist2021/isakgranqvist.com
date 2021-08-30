/** @format */

import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Nav(props) {
	const links = [
		{ to: '/', text: 'home', icon: 'roofing' },
		{ to: '/about', text: 'about', icon: 'help_outline' },
		{ to: '/contact', text: 'contact', icon: 'mail_outline' },
		{ to: '/projects', text: 'projects', icon: 'work_outline' },
	];
	const history = useHistory();

	React.useEffect(() => {
		history.listen(() => {
			window.UIkit.offcanvas(document.querySelector('#offcanvas')).hide();
		});
	}, []);

	return (
		<div>
			<div
				uk-sticky='media: 960'
				className='uk-navbar-container tm-navbar-container uk-sticky'>
				<div className='uk-container uk-container-expand'>
					<nav className='uk-navbar uk-container'>
						<div className='uk-navbar-left'>
							<Link
								to='/'
								className='uk-navbar-item uk-logo'
								style={{ width: 100 }}>
								<img
									uk-svg=''
									src='https://static.isakgranqvist.com/svg/simple-logo.svg'
									style={{ maxWidth: 100, maxHeight: 50 }}
									className='uk-margin-small-right'
									hidden=''
								/>
							</Link>
						</div>
						<div className='uk-navbar-right'>
							<ul className='uk-navbar-nav uk-visible@m'>
								{links.map((link, i) => (
									<li key={i}>
										<Link to={link.to}>{link.text}</Link>
									</li>
								))}
							</ul>
							<a
								uk-navbar-toggle-icon=''
								href='#offcanvas'
								uk-toggle=''
								className='
						uk-navbar-toggle
						uk-hidden@m
						uk-icon
						uk-navbar-toggle-icon
					'
								aria-expanded='false'></a>
						</div>
					</nav>
				</div>
			</div>

			<div id='offcanvas' uk-offcanvas='mode: push; overlay: true'>
				<div className='uk-offcanvas-bar'>
					<button
						className='uk-offcanvas-close'
						type='button'
						uk-close='true'></button>

					<ul className='uk-nav uk-nav-default tm-nav uk-margin-top'>
						<li className='uk-nav-header'>Sitemap</li>{' '}
						{links.map((link, i) => (
							<li key={i}>
								<Link
									className='uk-text-capitalize'
									to={link.to}>
									{link.text}
								</Link>
							</li>
						))}
					</ul>

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
				</div>
			</div>
		</div>
	);
}

export default Nav;

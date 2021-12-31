import { useState } from 'react';

import { Container } from '../container';
import { Styled } from './nav.styled';

export const Nav = () => {
	const [open, setOpen] = useState(false);

	const links = [
		{ to: '/', text: 'home', selector: '#Home' },
		{ to: '/projects', text: 'projects', selector: '#Projects' },
		{ to: '/about', text: 'about', selector: '#About' },
		{ to: '/contact', text: 'contact', selector: '#Contact' },
	];

	return (
		<Styled.Nav>
			<Container className='container'>
				<a href='#Home'>
					<img
						src='https://static.isakgranqvist.com/svg/logo.svg'
						alt='Isak Granqvist Logo'
					/>
				</a>
				<div className={['nav-links', open ? 'open' : ''].join(' ')}>
					{links.map((link, i) => (
						<a key={i} href={link.selector} onClick={(e) => setOpen(false)}>
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
			</Container>

			<div
				id='filler'
				className={open ? 'open' : ''}
				onClick={() => setOpen(false)}></div>
		</Styled.Nav>
	);
};

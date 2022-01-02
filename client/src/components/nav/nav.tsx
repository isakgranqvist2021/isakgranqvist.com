import { useState } from 'react';

import { Container } from 'components/container';

import { Styled } from './nav.styled';

export const Nav = () => {
	const [open, setOpen] = useState(false);

	const links = [
		{ text: 'home', selector: '#Home' },
		{ text: 'Technology', selector: '#Features' },
		{ text: 'about', selector: '#About' },
		{ text: 'contact', selector: '#Contact' },
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

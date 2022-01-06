import { Container } from 'components';

import { LINKS } from './nav.constants';
import { useNavState } from './nav.helpers';
import { Styled } from './nav.styled';

export const Nav = () => {
	const { navIsOpen, closeNav, toggleNav } = useNavState();

	return (
		<Styled.Nav>
			<Container className='container'>
				<a href='#Home'>
					<Styled.Logo
						src='/static/images/logo.svg'
						alt='Isak Granqvist Logo'
					/>
				</a>
				<Styled.NavLinks open={navIsOpen}>
					{LINKS.map(({ selector, text }) => (
						<Styled.Link key={selector} href={selector} onClick={closeNav}>
							{text}
						</Styled.Link>
					))}
				</Styled.NavLinks>

				<Styled.Bars.Container onClick={toggleNav} open={navIsOpen}>
					<Styled.Bars.Line open={navIsOpen} />
					<Styled.Bars.Line open={navIsOpen} />
					<Styled.Bars.Line open={navIsOpen} />
				</Styled.Bars.Container>
			</Container>

			<Styled.Backdrop open={navIsOpen} onClick={closeNav} />
		</Styled.Nav>
	);
};

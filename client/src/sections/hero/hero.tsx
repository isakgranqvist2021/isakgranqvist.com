import { useEffect } from 'react';
import AOS from 'aos';

import { Button, Link, Text } from 'components';

import { Styled } from './hero.styled';

export const Hero = () => {
	const onClickHandler = (hash: string) => {
		window.location.hash = hash;
	};

	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

	return (
		<Styled.Hero id='Home'>
			<Styled.HeroContainer>
				<Styled.HeroContent>
					<Text variant='h1'>
						High Quality Software
						<br /> At Affordable Prices
					</Text>

					<p>
						I build professional websites, modern mobile applications and
						reliable server software. <Link href='#Contact'>Contact me</Link>{' '}
						for a quote or further information.
					</p>
					<Styled.HeroActions>
						<Button
							outlined
							data-aos='fade-right'
							onClick={() => onClickHandler('#Contact')}>
							Get in touch
						</Button>
						<Button
							data-aos='fade-left'
							onClick={() => onClickHandler('#Features')}>
							Technology
						</Button>
					</Styled.HeroActions>
				</Styled.HeroContent>
			</Styled.HeroContainer>
			<Styled.Phone src='/phone.svg' />
			<Styled.Artboard src='/artboard.svg' />
		</Styled.Hero>
	);
};

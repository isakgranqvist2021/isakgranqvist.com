import { useEffect } from 'react';
import AOS from 'aos';

import { Button } from 'components';

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
					<h1 className='ml12'>
						High Quality Software
						<br /> At Affordable Prices
					</h1>

					<p>
						Are you looking for a software developer who loves learning new
						technologies? I love working on new and challenging problems and
						come up with creative and innovative solutions.
					</p>
					<Styled.HeroActions>
						<Button
							data-aos='fade-right'
							onClick={() => onClickHandler('#Contact')}>
							<span>Get in touch</span>
						</Button>
						<Button
							data-aos='fade-left'
							onClick={() => onClickHandler('#Features')}>
							<span>Technology</span>
						</Button>
					</Styled.HeroActions>
				</Styled.HeroContent>
			</Styled.HeroContainer>
			<Styled.Image src='/phone.svg' bottom='60%' left='46%' />
			<Styled.Image src='/artboard.svg' left='50%' bottom={0} />
		</Styled.Hero>
	);
};

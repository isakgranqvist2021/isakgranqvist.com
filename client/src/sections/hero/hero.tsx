import { useEffect } from 'react';
import AOS from 'aos';

import { Button } from 'components';

import { Svg } from './svg';
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
					<h1 className='ml12'>High Quality Software At Affordable Prices</h1>

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
				<Svg />
			</Styled.HeroContainer>
		</Styled.Hero>
	);
};

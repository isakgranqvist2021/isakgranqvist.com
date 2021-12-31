import { useEffect } from 'react';
import AOS from 'aos';

import { Svg } from 'components';

import { Styled } from './hero.styled';

export const Hero = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

	return (
		<Styled.Hero>
			<Styled.HeroContainer>
				<Styled.HeroContent>
					<h1 className='ml12'>Swedish software developer</h1>

					<p>
						Are you looking for a software developer who loves learning new
						technologies? I love working on new and challenging problems and
						come up with creative and innovative solutions.
					</p>
					<Styled.HeroActions>
						<a href='#Contact' data-aos='fade-right'>
							<span>Get in touch</span>
						</a>
						<a href='#Projects' data-aos='fade-left'>
							<span>Recent Projects</span>
						</a>
					</Styled.HeroActions>
				</Styled.HeroContent>
				<Svg />
			</Styled.HeroContainer>
		</Styled.Hero>
	);
};

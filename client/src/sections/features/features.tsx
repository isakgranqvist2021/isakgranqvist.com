import { useEffect } from 'react';
import AOS from 'aos';

import { Container } from 'components';

import { Styled } from './features.styled';

export const Features = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

	return (
		<Styled.Features id='Features'>
			<Container>
				<Styled.FeaturesGrid>
					<div className='card' data-aos='fade-right'>
						<span className='material-icons-outlined'>business</span>
						<h3>Backend Development</h3>
						<p>
							Do you need reliable software to power your business
							infrastructure? I utilize popular tools like TypeScript, C# and Go
							to make that happen.
						</p>
					</div>
					<div className='card' data-aos='fade-up'>
						<span className='material-icons-outlined'>storefront</span>
						<h3>Frontend Development</h3>
						<p>
							Do you want a modern, fast and user friendly user interface? I
							build modern user interfaces with tools like React and Angular.
						</p>
					</div>
					<div className='card' data-aos='fade-left'>
						<span className='material-icons-outlined'>cloud</span>
						<h3>Cloud Development</h3>
						<p>
							Are you looking to scale your software infrastructure with tools
							provided by Google or Amazon? Then I would be glad to help you.
						</p>
					</div>
				</Styled.FeaturesGrid>
			</Container>
		</Styled.Features>
	);
};

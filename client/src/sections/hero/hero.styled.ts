import styled from 'styled-components';

import { Container } from 'components';

const Hero = styled('div')`
	padding: 310px 0;
	position: relative;

	@media (max-width: 950px) {
		padding: 160px 0;
	}

	@media (max-width: 600px) {
		padding: 50px 0;
	}
`;

const HeroContainer = styled(Container)``;

const HeroContent = styled('div')`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;

	@media (max-width: 600px) {
		padding: 160px 0 100px 0;
	}

	p {
		margin: 1.8rem 0;
		font-size: 1.3rem;
		font-weight: 500;
		max-width: 50ch;
		color: #333;

		@media (max-width: 360px) {
			font-size: 1rem;
		}

		@media (max-width: 325px) {
			font-size: 1rem;
		}
	}
`;

const HeroActions = styled('div')`
	display: flex;
	gap: 20px;

	@media (max-width: 600px) {
		flex-direction: column;
		width: 100%;
	}
`;

const Artboard = styled('img')`
	position: absolute;
	z-index: -1;
	left: 50%;
	bottom: 0;

	@media (max-width: 950px) {
		display: none;
	}
`;

const Phone = styled('img')`
	position: absolute;
	z-index: -1;
	bottom: 60%;
	left: 46%;
`;

export const Styled = {
	Hero,
	HeroContainer,
	HeroContent,
	HeroActions,
	Artboard,
	Phone,
};

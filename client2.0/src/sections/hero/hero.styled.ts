import { Container } from 'components';
import styled from 'styled-components';

const Hero = styled('div')`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 210px 0;

	.ml12 {
		@for $i from 8 through 15 {
			span:nth-child(#{$i}) {
				color: #cf3030;
			}
		}
	}

	@media (max-width: 600px) {
		padding: 100px 0 100px 0;
	}
`;

const HeroContainer = styled(Container)`
	display: flex;
`;

const HeroContent = styled('div')`
	display: flex;
	flex-direction: column;
	justify-content: center;

	h1 {
		font-size: 3.4rem;
		font-weight: 900;
		color: rgb(37, 37, 37);
		text-transform: capitalize;
		letter-spacing: 1.5px;
		color: #3f3f3f;
	}

	p {
		margin: 1.8rem 0;
		font-size: 1.3rem;
		font-weight: 500;
		max-width: 50ch;
		color: rgb(100, 100, 100);
	}

	@media (max-width: 1400px) {
		flex-direction: column;

		h1 {
			max-width: 18ch;
		}
	}

	@media (max-width: 600px) {
		padding: 160px 0 100px 0;
		align-items: center;

		h1 {
			font-size: 4rem;
			margin: 0 auto;
		}
	}

	@media (max-width: 420px) {
		h1 {
			font-size: 3rem;
		}
	}

	@media (max-width: 320px) {
		h1 {
			font-size: 2.6rem;
		}
	}
`;

const HeroActions = styled('div')`
	display: flex;
	gap: 20px;

	@media (max-width: 600px) {
		flex-direction: column;
		margin-top: 2rem;
		width: 100%;
	}
`;

export const Styled = { Hero, HeroContainer, HeroContent, HeroActions };

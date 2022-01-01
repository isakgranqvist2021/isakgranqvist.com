import styled, { css } from 'styled-components';

import { Container } from 'components';

import { ImageProps } from './hero.types';

const Hero = styled('div')`
	padding: 310px 0;
	position: relative;

	@media (max-width: 600px) {
		padding: 100px 0 100px 0;
	}
`;

const HeroContainer = styled(Container)``;

const HeroContent = styled('div')`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;

	h1 {
		font-size: 3.4rem;
		font-weight: 900;
		color: #333;
		text-transform: capitalize;
		letter-spacing: 1.5px;
		color: #3f3f3f;
	}

	p {
		margin: 1.8rem 0;
		font-size: 1.3rem;
		font-weight: 500;
		max-width: 50ch;
		color: #333;
	}

	@media (max-width: 760px) {
		h1 {
			font-size: 3rem;
		}
	}

	@media (max-width: 680px) {
		h1 {
			font-size: 2.5rem;
		}
	}

	@media (max-width: 600px) {
		padding: 160px 0 100px 0;
		h1 {
			font-size: 2rem;
		}
	}

	@media (max-width: 420px) {
		h1 {
			font-size: 1.85rem;
		}
	}

	@media (max-width: 360px) {
		h1 {
			font-size: 1.65rem;
		}
		p {
			font-size: 1rem;
		}
	}

	@media (max-width: 325px) {
		h1 {
			font-size: 1.45rem;
		}
		p {
			font-size: 1rem;
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

const Image = styled('img')<ImageProps>`
	position: absolute;
	z-index: -1;

	${(props) => css`
		${props.top !== undefined &&
		css`
			top: ${props.top};
		`}

		${props.right !== undefined &&
		css`
			right: ${props.right};
		`}

		${props.bottom !== undefined &&
		css`
			bottom: ${props.bottom};
		`}

		${props.left !== undefined &&
		css`
			left: ${props.left};
		`}
	`}
`;

export const Styled = {
	Hero,
	HeroContainer,
	HeroContent,
	HeroActions,
	Image,
};

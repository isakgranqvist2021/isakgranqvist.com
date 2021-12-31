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
		padding: 160px 0 100px 0;
	}
`;

const HeroContainer = styled(Container)`
	display: flex;
`;

const HeroContent = styled('div')`
	h1 {
		font-size: 3.4rem;
		font-weight: 900;
		color: rgb(37, 37, 37);
		text-transform: capitalize;
		letter-spacing: 1.5px;
		color: #3f3f3f;
	}

	p {
		margin: 1.5rem 0;
		font-size: 1.1rem;
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
`;

const HeroActions = styled('div')`
	a {
		display: inline-block;
		width: 200px;
		text-align: center;
		text-transform: uppercase;
		text-decoration: none;
		cursor: pointer;
		position: relative;
		border: 1px solid transparent;
		height: 50px;

		span {
			position: absolute;
			padding: 1rem;
			left: 50%;
			transform: translateX(-50%);
			width: 100%;
			z-index: 2;
		}

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			transform: scale(0);
			transition: all 400ms ease;
			z-index: 1;
		}

		&:last-of-type {
			margin-left: 0.5rem;
			background-color: #cf3030;
			color: #fff;

			&::before {
				background-color: #fff;
			}

			&:hover {
				color: #cf3030;
				border-color: #cf3030;
				&::before {
					transform: scale(1);
				}
			}
		}

		&:first-of-type {
			margin-right: 0.5rem;
			border: 1px solid #cf3030;
			color: #cf3030;

			&::before {
				background-color: #cf3030;
			}

			&:hover {
				color: #ffffff;
				&::before {
					transform: scale(1);
				}
			}
		}
	}

	@media (max-width: 600px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-top: 2rem;
		a {
			width: 100%;
			margin-left: 0 !important;
			margin-right: 0 !important;

			&:first-of-type {
				margin-bottom: 1rem;
			}
		}
	}
`;

export const Styled = { Hero, HeroContainer, HeroContent, HeroActions };

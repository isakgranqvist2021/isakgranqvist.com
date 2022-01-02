import styled from 'styled-components';

const Features = styled('div')`
	min-height: 50vh;
	display: flex;
	align-items: center;
	background-color: #333;

	@media (max-width: 1400px) {
		padding: 50px 0;
	}
`;

const FeaturesGrid = styled('div')`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;

	.card {
		display: flex;
		flex-direction: column;
		box-shadow: none;
		padding: 20px;

		span {
			font-size: 1.5rem;
			box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
			padding: 30px;
			border-radius: 50%;
			background-color: #fff;
			color: #333;
			width: 50px;
			height: 50px;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		h3 {
			font-size: 2rem;
			margin: 1.5rem 0 0.8rem 0;
			font-weight: 700;
			color: rgb(255, 255, 255);

			@media (max-width: 450px) {
				font-size: 1.7rem;
			}

			@media (max-width: 350px) {
				font-size: 1.5rem;
			}

			@media (max-width: 315px) {
				font-size: 1.35rem;
			}
		}

		p {
			font-size: 1.1rem;
			font-weight: 400;
			color: #f5f5f5;
		}
	}

	@media (max-width: 1400px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 820px) {
		grid-template-columns: 1fr;
	}
`;

export const Styled = { Features, FeaturesGrid };

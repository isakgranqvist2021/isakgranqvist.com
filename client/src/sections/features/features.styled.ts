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
		align-items: center;
		flex-direction: column;
		text-align: center;
		box-shadow: none;
		padding: 20px;

		span {
			font-size: 2.5rem;
			box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
			padding: 30px;
			border-radius: 50%;
			background-color: #fff;
			color: #333;
		}

		h3 {
			font-size: 2rem;
			margin: 1.5rem 0 0.5rem 0;
			font-weight: 700;
			color: rgb(255, 255, 255);
		}

		p {
			font-size: 1.2rem;
			font-weight: 500;
			color: #888888;
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

import styled from 'styled-components';

import { Container } from 'components';

const About = styled('div')`
	padding: 100px 0;
	min-height: 75vh;
	display: flex;
	align-items: center;
`;

const AboutContainer = styled(Container)`
	display: flex;
	height: 100%;

	h3 {
		font-size: 3.5rem;
		margin-bottom: 1rem;
		font-weight: 900;
		letter-spacing: 1px;
		color: #333;
	}

	p {
		line-height: 1.7;
		font-size: 1.1rem;
		letter-spacing: 1.1px;

		span {
			color: #df7c7c;
		}

		&:not(:last-of-type) {
			margin-bottom: 1rem;
		}
	}

	@media (max-width: 900px) {
		flex-direction: column;
		gap: 3rem;
	}

	@media (max-width: 900px) {
		h3 {
			font-size: 2.5rem;
		}
	}

	@media (max-width: 400px) {
		h3 {
			font-size: 2rem;
		}
	}

	@media (max-width: 320px) {
		h3 {
			font-size: 1.8rem;
		}
	}
`;

const FlexItem = styled('div')`
	flex-grow: 1;
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;

	svg {
		width: 300px;
		height: 300px;
		max-width: 100%;
		fill: #ffffff;
		margin: 0 auto;
	}

	@media (max-width: 900px) {
		svg {
			margin-bottom: 2rem;
		}
	}
`;

export const Styled = { About, AboutContainer, FlexItem };

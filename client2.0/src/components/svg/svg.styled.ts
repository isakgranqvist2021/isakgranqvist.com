import styled from 'styled-components';

const Svg = styled('svg')`
	/** @format */
	max-width: 50%;
	.line-text {
		animation-name: fadeIn;
		animation-timing-function: ease;
		animation-duration: 1s;
		animation-fill-mode: forwards;
		animation-direction: alternate-reverse;
		animation-iteration-count: 8;
	}

	@media (max-width: 1400px) {
		display: none;
	}

	@keyframes fadeIn {
		from {
			opacity: 0.2;
		}
		to {
			opacity: 1;
		}
	}
`;

export const Styled = { Svg };

import styled from 'styled-components';

const Svg = styled('svg')`
	position: absolute;
	z-index: -1;
	right: 10%;
	bottom: 0;
	max-width: 100%;
	.line-text {
		animation-name: fadeIn;
		animation-timing-function: ease;
		animation-duration: 1s;
		animation-fill-mode: forwards;
		animation-direction: alternate-reverse;
		animation-iteration-count: 8;
	}
`;

export const Styled = { Svg };

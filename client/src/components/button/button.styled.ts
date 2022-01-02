import styled, { css } from 'styled-components';

import { ButtonProps } from './button.types';

const button = css`
	border-width: 1px;
	border-style: solid;
	padding: 0.8rem 1.5rem;
	font-size: 0.75rem;
	text-align: center;
	text-transform: uppercase;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: all 300ms ease !important;
	font-weight: 700;
	letter-spacing: 1.1px;
	font-family: 'Arial';

	&:hover {
		border-radius: 1rem;
	}

	@media (max-width: 600px) {
		width: 100%;
	}
`;

const primary = styled('button')<ButtonProps>`
	${button};

	background-color: #cf3030;
	border-color: #cf3030;
	color: #fff;

	${(props) =>
		props.outlined &&
		css`
			background-color: transparent;
			border-color: #cf3030;
			color: #cf3030;
		`}
`;

const secondary = styled('button')<ButtonProps>`
	${button};

	background-color: #fff;
	border-color: #fff;
	color: #333;

	&:hover {
		background-color: #d6d6d6;
	}

	${(props) =>
		props.outlined &&
		css`
			background-color: transparent;
			border-color: #fff;
			color: #fff;
		`}
`;

export const Styled = { primary, secondary };

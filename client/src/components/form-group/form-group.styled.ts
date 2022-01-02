import styled, { css } from 'styled-components';

import { FormGroupProps } from './form-group.types';

const FormGroup = styled('section')<FormGroupProps>`
	${(props) =>
		props.mb &&
		css`
			margin-bottom: ${props.mb + 'px'};
		`}

	label {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
		text-transform: uppercase;
		color: #fff;
		font-weight: 600;
		font-size: 0.9rem;
	}

	input,
	textarea {
		width: 100%;
		padding: 0.66rem;
		border: none;
		outline: none;
		border-radius: 0.25rem;
		transition: all 300ms ease;
		resize: none;
	}

	textarea {
		height: 11rem;
	}
`;

export const Styled = { FormGroup };

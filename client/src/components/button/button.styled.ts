import styled from 'styled-components';

const Button = styled('button')`
	background-color: #cf3030;
	border: 1px solid #cf3030;
	color: #fff;
	padding: 0.8rem;
	width: 200px;
	text-align: center;
	text-transform: uppercase;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: all 300ms ease;

	&:hover {
		background-color: rgba(0, 0, 0, 0);
		color: #cf3030;
	}

	@media (max-width: 600px) {
		width: 100%;
	}
`;

export const Styled = { Button };

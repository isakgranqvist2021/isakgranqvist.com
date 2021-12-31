import styled from 'styled-components';

const Alert = styled('div')`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 1rem;
	margin-bottom: 1rem;
	border-radius: 0.5rem;
	font-weight: 800;

	span {
		cursor: pointer;
		transition: all 300ms ease;

		&:hover {
			transform: rotate(360deg);
		}
	}

	&.alert-danger {
		background-color: #cf3030;
		color: #fff;
	}

	&.alert-success {
		background-color: #69dd86;
		color: rgb(61, 61, 61);
	}
`;

export const Styled = { Alert };
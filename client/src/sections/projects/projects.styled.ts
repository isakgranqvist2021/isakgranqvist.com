import styled, { css } from 'styled-components';

import { StyledProjectProps } from './projects.types';

const Projects = styled('div')`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 300px;

	@media (max-width: 1250px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 900px) {
		grid-auto-rows: 400px;
		grid-template-columns: 1fr;
	}
`;

const Project = styled('div')<StyledProjectProps>`
	background-image: url(${(props) => props.src});
	background-size: ${(props) => props.bgSize.default};
	background-position: center center;
	background-repeat: no-repeat;

	${(props) =>
		props.bgSize.default === 'hidden' &&
		css`
			display: none;
		`}

	@media (max-width: 580px) {
		background-size: ${(props) => props.bgSize.xs};
		${(props) =>
			props.bgSize.xs === 'hidden'
				? css`
						display: none;
				  `
				: css`
						display: block;
				  `}
	}
`;

export const Styled = { Projects, Project };

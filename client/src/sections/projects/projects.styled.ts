import styled from 'styled-components';

const Projects = styled('div')``;

const Project = styled('div')`
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 100%;
		height: 50%;
		object-fit: contain;
	}
`;

export const Styled = { Projects, Project };

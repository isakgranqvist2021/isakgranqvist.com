import styled from 'styled-components';

const Projects = styled('div')`
	padding: 150px 0;
	border-bottom: 1px solid #f2f2f2;
`;

const Project = styled('div')`
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 50px;

	img {
		width: 100%;
		height: 50%;
		object-fit: contain;
	}
`;

export const Styled = { Projects, Project };

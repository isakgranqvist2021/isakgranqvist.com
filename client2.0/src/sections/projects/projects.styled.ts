import styled from 'styled-components';

const Projects = styled('div')`
	padding: 110px 0;
	overflow: hidden;
`;

const ProjectsHeader = styled('header')`
	margin-bottom: 110px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	h3 {
		font-size: 4rem;
		font-weight: 900;
		margin-bottom: 0.66rem;
		color: rgb(56, 56, 56);
	}

	p {
		max-width: 60ch;
		font-size: 1.3rem;
		letter-spacing: 1.2px;

		a {
			text-decoration: none;
			color: #cf3030;
		}
	}

	@media (max-width: 620px) {
		h3 {
			font-size: 3rem;
		}

		p {
			font-size: 1.125rem;
		}
	}
`;

const ProjectsGrid = styled('div')`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const ProjectContainer = styled('div')`
	width: 100%;
	height: 500px;
`;

export const Styled = {
	Projects,
	ProjectsHeader,
	ProjectsGrid,
	ProjectContainer,
};

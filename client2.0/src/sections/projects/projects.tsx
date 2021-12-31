import { useState, useEffect } from 'react';

import { Container } from 'components';
import { ProjectModel } from 'models';
import { GET } from 'services';

import { Project } from './project';
import { Styled } from './projects.styled';

export const Projects = () => {
	const [projects, setProjects] = useState<ProjectModel[] | null>(null);

	useEffect(() => {
		(async () => {
			const abortController = new AbortController();
			const response = await GET('/projects', abortController.signal);

			if (response.success) {
				setProjects(response.data);
			}

			return () => abortController.abort();
		})();
	}, []);

	return (
		<Styled.Projects>
			<Container>
				<Styled.ProjectsHeader>
					<h3>Recent Projects</h3>
					<p>
						These are some of my most recent projects, you can view all of my
						projects on my{' '}
						<a href='https://github.com/isakgranqvist2021'>github</a>. Some of
						these projects are private and used by clients. If you want to see
						some part of the code please contact me.
					</p>
				</Styled.ProjectsHeader>

				<Styled.ProjectsGrid>
					{projects?.map((project, i) => (
						<Styled.ProjectContainer key={i}>
							<Project project={project}></Project>
						</Styled.ProjectContainer>
					))}
				</Styled.ProjectsGrid>
			</Container>
		</Styled.Projects>
	);
};

/** @format */

import React, { useEffect } from 'react';

import Project from '../Project/Project';
import http from '../../Utils/http';
import './Projects.scss';

function Projects(props) {
	const [projects, setProjects] = React.useState([]);

	const fetchProjects = React.useCallback(async () => {
		const abortController = new AbortController();
		const response = await http.GET('/projects');

		if (response.success) {
			setProjects(response.data);
		}

		return () => abortController.abort();
	}, []);

	useEffect(() => {
		fetchProjects();
	}, [fetchProjects]);

	return (
		<div id='Projects' className='container'>
			<header>
				<h3>Recent Projects</h3>
				<p>
					These are some of my most recent projects, you can view all
					of my projects on my{' '}
					<a href='https://github.com/isakgranqvist2021'>github</a>.
					Some of these projects are private and used by clients. If
					you want to see some part of the code please contact me.
				</p>
			</header>

			<div className='projects-grid'>
				{projects.map((project, i) => (
					<div key={i} style={{ width: '50%' }}>
						<Project
							{...project}
							padding={i % 2 === 0 ? 'right' : 'left'}></Project>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projects;

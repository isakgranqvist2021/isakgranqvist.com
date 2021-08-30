/** @format */

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Project from '../Components/Project';
import http from '../Utils/http';

function Projects(props) {
	window.document.title = 'Isak Granqvist - My Projects';
	const [projects, setProjects] = React.useState([]);

	const animation = {
		initial: { scale: 0 },
		animate: { scale: 1 },
		exit: { scale: 0 },
		transition: { duration: 0.5 },
	};

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
		<motion.div {...animation} className='uk-container uk-margin-large-top'>
			<header>
				<h1 className='uk-heading-medium'>Recent Projects</h1>
				<p style={{ maxWidth: '80ch' }}>
					These are some of my most recent projects, you can view all
					of my projects on my{' '}
					<a href='https://github.com/isakgranqvist2021'>github</a>.
					Some of these projects are private and used by clients. If
					you want to see some part of the code please contact me.
				</p>
			</header>

			<div className='projects'>
				{projects.map((project, i) => (
					<div key={i}>
						<Project {...project}></Project>
						<hr className='uk-divider-icon' />
					</div>
				))}
			</div>

			<div className='nav-f-actions'>
				<Link to='/' href='/'>
					<span uk-icon='icon: chevron-left'></span> Home
				</Link>
				<Link to='/about' href='/about'>
					About <span uk-icon='icon: chevron-right'></span>
				</Link>
			</div>
		</motion.div>
	);
}

export default Projects;

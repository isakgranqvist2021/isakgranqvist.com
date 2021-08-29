/** @format */

import React, { useEffect } from 'react';
import './Projects.scss';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Project from '../../Components/Project/Project';
import http from '../../Utils/http';

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
		<motion.div {...animation} className='container projectsPage'>
			<header>
				<h1>Recent Projects</h1>
				<p>
					These are some of my most recent projects, you can view all
					of my projects on my{' '}
					<a href='https://github.com/isakgranqvist2021'>github</a>
				</p>
				<p>
					Some of these projects are private and used by clients. If
					you want to see some part of the code please contact me.
				</p>
			</header>

			<div className='projects'>
				{projects.map((project, i) => (
					<Project {...project} key={i}></Project>
				))}
			</div>

			<div className='nav-f-actions'>
				<Link to='/'>
					<i className='fas fa-arrow-left'></i> Home
				</Link>
				<Link to='/about'>
					About <i className='fas fa-arrow-right'></i>
				</Link>
			</div>
		</motion.div>
	);
}

export default Projects;

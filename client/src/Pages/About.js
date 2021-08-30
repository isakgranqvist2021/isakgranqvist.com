/** @format */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Block from '../Components/Block';
import http from '../Utils/http';

function About(props) {
	window.document.title = 'Isak Granqvist - About Me';
	const [blocks, setBlocks] = React.useState([]);

	const animation = {
		initial: { rotate: -25, opacity: 0, x: '-100%', scale: 0.2 },
		animate: { rotate: 0, opacity: 1, x: 0, scale: 1 },
		exit: { rotate: 25, x: '100%', scale: 0.2 },
		transition: { duration: 0.5 },
	};

	const fetchText = React.useCallback(async () => {
		const abortController = new AbortController();
		const response = await http.GET('/about');

		if (response.success) {
			setBlocks(response.data);
		}

		return abortController.abort();
	}, []);

	useEffect(() => {
		fetchText();
	}, [fetchText]);

	return (
		<motion.div {...animation} className='uk-container uk-margin-large-top'>
			{blocks.map((block, i) => (
				<div>
					<Block key={i} i={i} {...block}></Block>
					<hr className='uk-divider-icon' />
				</div>
			))}

			<footer>
				<p
					className='uk-text-meta uk-text-center uk-margin-medium-top uk-margin-auto'
					style={{ maxWidth: '80ch', padding: '0 10px' }}>
					Thank you for taking the time to read about me. If you would
					like to have a longer chat about programming or potentially
					hiring me, you can reach me via{' '}
					<a
						className='uk-text-primary'
						href='mailto:contact@isakgranqvist.com'>
						mail
					</a>{' '}
					or the
					<Link to='/contact' className='uk-text-primary'>
						{' '}
						contact form
					</Link>
				</p>
			</footer>

			<div className='nav-f-actions'>
				<Link to='/projects'>
					<span uk-icon='icon: chevron-left'></span> Projects
				</Link>
				<Link to='/contact'>
					Contact <span uk-icon='icon: chevron-right'></span>
				</Link>
			</div>
		</motion.div>
	);
}

export default About;

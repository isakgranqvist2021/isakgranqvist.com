/** @format */

import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home(props) {
	window.document.title = 'Isak Granqvist - Swedish Software Developer';

	const animation = {
		initial: { scaleY: 0 },
		animate: { scaleY: 1 },
		exit: { scaleY: 0 },
		transition: { duration: 0.5 },
	};

	return (
		<motion.div {...animation} className='homePage'>
			<div className='hero-section'>
				<div className='content'>
					<div className='content-inner'>
						<h1>
							swedish software
							<br /> developer
						</h1>
						<p>
							Are you looking for a software developer who loves
							learning new technologies? I love working on new and
							challenging problems and come up with creative and
							innovative solutions.
						</p>
						<div className='actions'>
							<Link to='/projects'>
								<span>Projects</span>
							</Link>
							<a href='https://github.com/isakgranqvist2021'>
								<span>Github</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Home;

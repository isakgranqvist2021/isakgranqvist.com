/** @format */

import React from 'react';
import Hero from '../Components/Hero/Hero';
import Features from '../Components/Features/Features';
import Projects from '../Components/Projects/Projects';
import About from '../Components/About/About';
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
		<motion.div {...animation}>
			<Hero />
			<Features />
			<Projects />
			<About />
		</motion.div>
	);
}

export default Home;

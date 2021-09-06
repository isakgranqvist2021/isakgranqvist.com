/** @format */

import React from 'react';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App(props) {
	return (
		<div>
			<Nav></Nav>
			<Hero />
			<Features />
			<Projects />
			<About />
			<Contact />
		</div>
	);
}

export default App;

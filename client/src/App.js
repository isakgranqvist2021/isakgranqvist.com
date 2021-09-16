/** @format */

import { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function Sphere(props) {
	const mesh = useRef();

	useEffect(() => {
		let prevPos = window.scrollY;
		let sl = window.addEventListener('scroll', (e) => {
			let scrollDown = window.scrollY > prevPos;

			if (scrollDown) {
				mesh.current.position.x += 0.1;
			} else {
				mesh.current.position.x -= 0.1;
			}

			prevPos = window.scrollY;
		});

		return () => window.removeEventListener('scroll', sl);
	}, []);

	return (
		<mesh
			ref={mesh}
			visible
			userData={{ hello: 'world' }}
			position={[1, 4, -50]}
			rotation={[Math.PI / 2, 0, 0]}>
			<sphereGeometry args={[4, 100, 90]} />
			<meshStandardMaterial color='hotpink' />
		</mesh>
	);
}

export default function App(props) {
	return (
		<div id='App'>
			<Canvas id='site-bg'>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<Sphere position={[0, 5, 3]} />
			</Canvas>
			<Nav />
			<Hero />
			<Features />
			<Projects />
			<About />
			<Contact />
		</div>
	);
}

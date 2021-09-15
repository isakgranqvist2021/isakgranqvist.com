/** @format */

import { useEffect, useRef, useState } from 'react';
import {
	Scene,
	PerspectiveCamera,
	WebGLRenderer,
	BoxGeometry,
	MeshBasicMaterial,
	Mesh,
} from 'three';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

export default function App(props) {
	const bgRef = useRef();
	const cubes = [];

	const initThree = () => {
		const scene = new Scene();
		const camera = new PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);

		const renderer = new WebGLRenderer({ alpha: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(0xffffff, 0);
		bgRef.current.appendChild(renderer.domElement);

		createCube({ scene, camera, renderer });
		draw({ scene, camera, renderer });
	};

	const createCube = (three) => {
		const geometry = new BoxGeometry();
		const material = new MeshBasicMaterial({ color: 0xcf3030 });
		const cube = new Mesh(geometry, material);
		three.scene.add(cube);
		three.camera.position.z = 15;
		cubes.push(cube);
	};

	const draw = ({ scene, camera, renderer }) => {
		window.requestAnimationFrame(() =>
			draw({
				scene,
				camera,
				renderer,
			})
		);

		renderer.render(scene, camera);
	};

	useEffect(() => {
		initThree();

		let prevPos = window.scrollY;
		let sl = window.addEventListener('scroll', (e) => {
			if (cubes.length <= 0) return;
			let neg = window.scrollY > prevPos;

			cubes.forEach((cube) => {
				console.log(cube);
				if (neg) {
					cube.rotation.x += 0.05;
					cube.rotation.y += 0.05;
				} else {
					cube.rotation.x -= 0.05;
					cube.rotation.y -= 0.05;
				}
			});

			prevPos = window.scrollY;
		});

		return () => window.removeEventListener('scroll', sl);
	}, []);

	return (
		<div id='App'>
			<div ref={bgRef} id='site-bg'></div>
			<Nav />
			<Hero />
			<Features />
			<Projects />
			<About />
			<Contact />
		</div>
	);
}

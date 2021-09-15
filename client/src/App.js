/** @format */

import { useEffect, useRef } from 'react';
import {
	Scene,
	PerspectiveCamera,
	WebGLRenderer,
	MeshBasicMaterial,
	Mesh,
	SphereGeometry,
} from 'three';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

import * as dat from 'dat.gui';
const gui = new dat.GUI();

export default function App(props) {
	const bgRef = useRef();
	const spheres = [];

	const initThree = () => {
		const scene = new Scene();
		const camera = new PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);

		const renderer = new WebGLRenderer({
			// alpha: true,
		});
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(0xffffff, 0);
		bgRef.current.appendChild(renderer.domElement);
		bgRef.current.style.zIndex = '1000';
		document.querySelector('.dg.ac').style.zIndex = '1001';
		createSphere({ scene, camera });
		draw({ scene, camera, renderer });
	};

	const createSphere = ({ scene, camera }) => {
		const geometry = new SphereGeometry(5, 12, 6);
		const material = new MeshBasicMaterial({
			color: 0x4287f5,
		});
		const sphere = new Mesh(geometry, material);
		camera.position.z = 15;
		scene.add(sphere);

		spheres.push(sphere);
		gui.add(sphere.rotation, 'x', 0, 1000, 1);
		gui.add(sphere.rotation, 'y', 0, 1000, 1);
		gui.add(sphere.rotation, 'z', 0, 1000, 1);
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
			let neg = window.scrollY > prevPos;

			if (spheres.length > 0) {
				spheres.forEach((sphere) => {
					if (neg) {
						sphere.rotation.x += 0.05;
						sphere.rotation.y += 0.05;
					} else {
						sphere.rotation.x -= 0.05;
						sphere.rotation.y -= 0.05;
					}
				});
			}

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

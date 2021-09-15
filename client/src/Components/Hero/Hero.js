/** @format */

import { useEffect } from 'react';
import Svg from '../Svg/Svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.scss';

export default function Hero() {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});

		var textWrapper = document.querySelector('.ml12');
		textWrapper.innerHTML = textWrapper.textContent.replace(
			/\S/g,
			"<span class='letter'>$&</span>"
		);

		window.anime.timeline({ loop: false }).add({
			targets: '.ml12 .letter',
			translateX: [40, 0],
			translateZ: 0,
			opacity: [0, 1],
			easing: 'easeOutExpo',
			duration: 1200,
			delay: (el, i) => 500 + 30 * i,
		});
	}, []);

	return (
		<div id='Home' className='container'>
			<div className='hero-content'>
				<h1 className='ml12'>Swedish software developer</h1>

				<p>
					Are you looking for a software developer who loves learning
					new technologies? I love working on new and challenging
					problems and come up with creative and innovative solutions.
				</p>
				<div className='actions'>
					<a href='#Contact' data-aos='fade-right'>
						<span>Get in touch</span>
					</a>
					<a href='#Projects' data-aos='fade-left'>
						<span>Recent Projects</span>
					</a>
				</div>
			</div>

			<Svg />
		</div>
	);
}

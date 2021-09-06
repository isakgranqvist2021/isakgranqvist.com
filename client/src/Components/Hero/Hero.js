/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

import './Hero.scss';

export default function Hero() {
	React.useEffect(() => {
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
		<div id='Hero' className='container'>
			<div className='hero-content'>
				<h1 className='ml12'>Swedish software developer</h1>

				<p>
					Are you looking for a software developer who loves learning
					new technologies? I love working on new and challenging
					problems and come up with creative and innovative solutions.
				</p>
				<div className='actions'>
					<a
						href='https://github.com/isakgranqvist2021'
						id='mgf'
						className='uk-button uk-button-default uk-margin-right'>
						<span>Get in touch</span>
					</a>
					<a className='uk-button uk-button-primary'>
						<span>Recent Projects</span>
					</a>
				</div>
			</div>
			<img
				alt='Computer Guy'
				src='https://static.isakgranqvist.com/svg/undraw_Design_notes_re_eklr.svg'
			/>
		</div>
	);
}

/** @format */

import React from 'react';
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

	const bodyHeight = () => {
		let nav = document.getElementById('main-nav');
		if (nav !== null) {
			let navHeight = nav.getBoundingClientRect().height;
			return `calc(100vh - ${navHeight}px)`;
		}

		return `calc(100vh - 80px)`;
	};

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
		<motion.div
			{...animation}
			className='uk-flex uk-flex-middle'
			id='home-page'
			style={{ minHeight: 'calc(100vh - 80px)' }}>
			<div className='uk-container' id='content'>
				<div
					className='uk-column-1-2@m'
					style={{ position: 'relative' }}>
					<div className='uk-margin-medium@m' id='hpc'>
						<h1
							className='uk-heading-small uk-text-uppercase ml12'
							id='hpt'>
							Swedish software developer
						</h1>

						<p
							className='uk-text-default uk-text-muted'
							style={{ maxWidth: '50ch' }}>
							Are you looking for a software developer who loves
							learning new technologies? I love working on new and
							challenging problems and come up with creative and
							innovative solutions.
						</p>
						<div className='actions'>
							<a
								href='https://github.com/isakgranqvist2021'
								id='mgf'
								className='uk-button uk-button-default uk-margin-right'>
								<span>Github</span>
							</a>
							<Link
								to='/projects'
								className='uk-button uk-button-primary'>
								<span>Projects</span>
							</Link>
						</div>
					</div>
					<img
						className='svg'
						alt='Computer Guy'
						src='https://static.isakgranqvist.com/svg/undraw_code_inspection_bdl7.svg'
					/>
				</div>
			</div>

			<svg
				id='waves'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1440 320'>
				<path
					fill='#0e6dcd'
					fill-opacity='1'
					d='M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,218.7C840,235,960,245,1080,250.7C1200,256,1320,256,1380,256L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'></path>
			</svg>
		</motion.div>
	);
}

export default Home;

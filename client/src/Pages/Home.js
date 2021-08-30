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

	const [text, setText] = React.useState('Swedish software developer');

	React.useEffect(() => {
		var textWrapper = document.querySelector('.ml12');
		textWrapper.innerHTML = textWrapper.textContent.replace(
			/\S/g,
			"<span class='letter'>$&</span>"
		);

		window.anime
			.timeline({ loop: true })
			.add({
				targets: '.ml12 .letter',
				translateX: [40, 0],
				translateZ: 0,
				opacity: [0, 1],
				easing: 'easeOutExpo',
				duration: 1200,
				delay: (el, i) => 500 + 30 * i,
			})
			.add({
				targets: '.ml12 .letter',
				translateX: [0, -30],
				opacity: [1, 0],
				easing: 'easeInExpo',
				duration: 1100,
				delay: (el, i) => 100 + 30 * i,
			});
	}, []);

	return (
		<motion.div
			{...animation}
			className='uk-margin-xlarge-top'
			id='home-page'
			style={{ height: '100vh' }}>
			<div className='uk-container'>
				<div
					className='uk-column-1-2@m'
					style={{ position: 'relative' }}>
					<img
						alt='Blob'
						src='https://static.isakgranqvist.com/svg/blob-haikei.svg'
						className='blob'
					/>
					<div className='uk-margin-medium@m' id='hpc'>
						<h1
							className='uk-heading-small uk-text-capitalize ml12'
							id='hpt'>
							Swedish software developer
						</h1>

						<p className='uk-text-default uk-text-muted'>
							Are you looking for a software developer who loves
							learning new technologies? I love working on new and
							challenging problems and come up with creative and
							innovative solutions.
						</p>
						<div className='actions'>
							<a
								href='https://github.com/isakgranqvist2021'
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
		</motion.div>
	);
}

export default Home;

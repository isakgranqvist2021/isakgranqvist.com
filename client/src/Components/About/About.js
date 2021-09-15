/** @format */

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.scss';

function About(props) {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

	return (
		<div id='About' className='bg-dark'>
			<div className='container'>
				<div className='flex-item' data-aos='fade-up-right'>
					<h3>About Me</h3>
					<p>
						The main <span>purpose</span> of my business is to
						deliver fast, modern and reliable software to clients
						all over the world. At affordable prices.
					</p>
					<p>
						I mostly deliver <span>custom</span> software solutions
						tailored to specific business requirements. I will build
						a custom application which solved some problem for your
						business.
					</p>
					<p>
						The most important asset for any business are the
						customers. Without customers there's no business to be
						conducted. I strive to satisfy my customers and live up
						to their expectations. Customer satisfaction is my
						absolute number one priority and will always be.
					</p>
				</div>
				<div className='flex-item' data-aos='zoom-in'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'>
						<path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z' />
					</svg>
				</div>
			</div>
		</div>
	);
}

export default About;

/** @format */

import React, { useEffect } from 'react';

import './About.scss';

/*
	Thank you for taking the time to read about me. If you
	would like to have a longer chat about programming or
	potentially hiring me, you can reach me via mail or the
	contact form
*/

function About(props) {
	return (
		<div id='About' className='bg-dark'>
			<div className='container'>
				<div className='flex-item'>
					<h3>About My Business</h3>
					<p>
						The main purpose of my business is to deliver fast,
						modern and reliable software to clients all over the
						world. I mostly deliver custom software solutions
						tailored to specific business requirements. I value
						client relationships very highly because without clients
						there's no business. Do you wanna become one of my
						highly valued clients? I would love to work for you and
						your business.
					</p>
				</div>
				<div className='flex-item'>
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

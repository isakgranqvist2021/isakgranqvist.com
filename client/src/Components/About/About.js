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
				<h3>What is Lorem Ipsum?</h3>
				<p>
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book. It has survived not only five centuries,
					but also the leap into electronic typesetting, remaining
					essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum
					passages, and more recently with desktop publishing software
					like Aldus PageMaker including versions of Lorem Ipsum.
				</p>
			</div>
		</div>
	);
}

export default About;

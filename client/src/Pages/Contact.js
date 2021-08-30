/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import http from '../Utils/http';
import alertsReducer from '../Store/alerts.reducer';

function Contact(props) {
	window.document.title = 'Isak Granqvist - Contact Me';

	const [formData, setFormData] = React.useState({
		email: '',
		name: '',
		message: '',
	});

	const animation = {
		initial: { scaleY: 0 },
		animate: { scaleY: 1 },
		exit: { scaleY: 0 },
		transition: { duration: 0.5 },
	};

	const submit = async () => {
		try {
			const response = await http.POST('/contact', formData);

			alertsReducer.dispatch({
				message: response.message,
				type: `${response.success ? 'success' : 'danger'}`,
			});
		} catch (err) {
			window.alert('message could not be sent');
		}
	};

	return (
		<motion.div
			{...animation}
			className='uk-container uk-container-xsmall uk-margin-large-top'>
			<header>
				<h1 className='uk-heading-medium uk-margin-remove-bottom'>
					Contact
				</h1>

				<div className='uk-flex uk-margin-top uk-margin-medium-bottom uk-flex-wrap'>
					<a
						href='mailto:contact@isakgranqvist.com'
						className='uk-margin-right uk-margin-bottom'
						title='email'>
						<span
							className='uk-margin-small-right'
							uk-icon='icon: mail'></span>
						contact@isakgranqvist.com
					</a>
					<p
						className='uk-margin-remove uk-margin-remove-bottom uk-margin-remove-top'
						style={{ lineHeight: 1.5 }}
						title='discord'>
						<span
							className='uk-margin-small-right'
							uk-icon='icon: discord'></span>
						IsakGranqvist#6926
					</p>
				</div>
			</header>

			<form>
				<section className='uk-margin-bottom'>
					<label
						htmlFor='email'
						className='uk-display-block uk-margin-small-bottom'>
						Email
					</label>
					<input
						id='email'
						className='uk-input'
						placeholder='peter-smith@email.com'
						value={formData.email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
					/>
				</section>
				<section className='uk-margin-bottom'>
					<label
						htmlFor='name'
						className='uk-display-block uk-margin-small-bottom'>
						Full Name
					</label>
					<input
						id='name'
						className='uk-input'
						placeholder='Peter Smith'
						value={formData.name}
						onChange={(e) =>
							setFormData({ ...formData, name: e.target.value })
						}
					/>
				</section>
				<section className='uk-margin-bottom'>
					<label
						htmlFor='message'
						className='uk-display-block uk-margin-small-bottom'>
						Message
					</label>
					<textarea
						id='message'
						className='uk-textarea'
						placeholder='Message'
						value={formData.message}
						onChange={(e) =>
							setFormData({
								...formData,
								message: e.target.value,
							})
						}></textarea>
				</section>

				<button
					type='button'
					onClick={submit}
					className='uk-button uk-button-primary uk-display-block uk-margin-auto-left'>
					Send Message
				</button>
			</form>

			<div className='nav-f-actions uk-margin-top'>
				<Link to='/about'>
					<span uk-icon='icon: chevron-left'></span> About
				</Link>
				<Link to='/'>
					Home <span uk-icon='icon: chevron-right'></span>
				</Link>
			</div>
		</motion.div>
	);
}
export default Contact;

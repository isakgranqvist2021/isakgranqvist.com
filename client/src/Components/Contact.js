/** @format */

import React from 'react';
import http from '../Utils/http';
import alertsReducer from '../Store/alerts.reducer';
import Alert from './Alert';

function Contact(props) {
	const [formData, setFormData] = React.useState({
		email: '',
		name: '',
		message: '',
	});

	const submit = async () => {
		try {
			const response = await http.POST('/contact', formData);

			alertsReducer.dispatch({
				message: response.message,
				type: `${response.success ? 'success' : 'danger'}`,
			});

			if (response.success) {
				setFormData({
					email: '',
					name: '',
					message: '',
				});
			}
		} catch (err) {
			window.alert('message could not be sent');
		}
	};

	return (
		<div style={{ height: 'calc(100vh - 80px)' }}>
			<div className='uk-width-100'>
				<div className='uk-container uk-container-xsmall uk-flex uk-flex-column uk-flex-center uk-height-1-1'>
					<header>
						<h1 className='uk-heading-medium uk-margin-medium-bottom'>
							Contact
						</h1>
					</header>
					<Alert />
					<form>
						<section className='uk-margin-medium-bottom'>
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
									setFormData({
										...formData,
										email: e.target.value,
									})
								}
							/>
						</section>
						<section className='uk-margin-medium-bottom'>
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
									setFormData({
										...formData,
										name: e.target.value,
									})
								}
							/>
						</section>
						<section className='uk-margin-medium-bottom'>
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
				</div>
			</div>
			<div className='uk-width-100' id='contact-bg'>
				<div className='uk-card uk-card-default uk-card-body uk-margin-top uk-margin-left'>
					<ul className='uk-list'>
						<li title='email'>
							<a href='mailto:contact@isakgranqvist.com'>
								<span
									uk-icon='icon: mail'
									className='uk-margin-small-right'></span>
								contact@isakgranqvist.com
							</a>
						</li>
						<li title='Discord username'>
							<a>
								<span
									uk-icon='icon: discord'
									className='uk-margin-small-right'></span>
								IsakGranqvist#6926
							</a>
						</li>
						<li title='Linkedin profile'>
							<a
								href='https://www.linkedin.com/in/isak-granqvist-b1217a207/'
								className='uk-flex'>
								<span
									uk-icon='icon: linkedin'
									className='uk-margin-small-right'></span>
								Linkedin
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
export default Contact;

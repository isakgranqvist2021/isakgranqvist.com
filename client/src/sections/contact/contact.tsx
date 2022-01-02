import { useState, useEffect } from 'react';
import AOS from 'aos';

import { Alert, Button, FormGroup } from 'components';
import { ContactModel } from 'models';
import { postContact } from 'services';

import { INITIAL_FORM_STATE } from './contact.constants';
import { Styled } from './contact.styled';

export const Contact = () => {
	const [formData, setFormData] = useState<ContactModel>(INITIAL_FORM_STATE);

	const submit = async () => {
		const response = await postContact(formData);
		if (response.success) setFormData(INITIAL_FORM_STATE);
	};

	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

	return (
		<Styled.Contact id='Contact'>
			<Styled.ContactContainer>
				<Styled.Form data-aos='fade-right'>
					<Alert />
					<FormGroup mb={32}>
						<label htmlFor='email'>Email</label>
						<input
							id='email'
							placeholder='Email'
							autoComplete='email'
							value={formData.email}
							onChange={(e) =>
								setFormData({
									...formData,
									email: e.target.value,
								})
							}
						/>
					</FormGroup>
					<FormGroup mb={32}>
						<label htmlFor='name'>Full Name</label>
						<input
							id='name'
							placeholder='Your name'
							value={formData.name}
							autoComplete='name'
							onChange={(e) =>
								setFormData({
									...formData,
									name: e.target.value,
								})
							}
						/>
					</FormGroup>
					<FormGroup mb={10}>
						<label htmlFor='message'>Message</label>
						<textarea
							id='message'
							placeholder='Message'
							value={formData.message}
							onChange={(e) =>
								setFormData({
									...formData,
									message: e.target.value,
								})
							}></textarea>
					</FormGroup>

					<Button onClick={submit}>Send Message</Button>
				</Styled.Form>
				<Styled.Social>
					<h3 data-aos='fade-left'>
						You can also reach me through my social channels
					</h3>
					<div className='icons' data-aos='fade-up'>
						<a
							href='https://www.instagram.com/isakgranqvist2021/'
							title='Instagram'>
							<img
								src='https://static.isakgranqvist.com/icons/instagram.svg'
								alt='Instagram Icon'
							/>
						</a>
						<a
							href='https://www.linkedin.com/in/isak-granqvist-b1217a207/'
							title='Linkedin'>
							<img
								src='https://static.isakgranqvist.com/icons/linkedin.svg'
								alt='Linkedin Icon'
							/>
						</a>
						<a href='https://github.com/isakgranqvist2021' title='Github'>
							<img
								src='https://static.isakgranqvist.com/icons/github.svg'
								alt='Github Icon'
							/>
						</a>
						<a href='mailto:contact@isakgranqvist.com' title='Send mail'>
							<img
								src='https://static.isakgranqvist.com/icons/email.svg'
								alt='Email Icon'
							/>
						</a>
					</div>
				</Styled.Social>
			</Styled.ContactContainer>
		</Styled.Contact>
	);
};

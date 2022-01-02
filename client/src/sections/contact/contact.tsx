import { useEffect } from 'react';
import AOS from 'aos';

import {
	Alert,
	FormGroup,
	Input,
	Label,
	Textarea,
	Text,
	Spinner,
} from 'components';

import { useContactState } from './contact.helpers';
import { Styled } from './contact.styled';

export const Contact = () => {
	const { values, alert, isLoading, submit, setValue, clearAlert } =
		useContactState();

	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

	return (
		<Styled.Contact id='Contact'>
			<Styled.ContactContainer>
				<Styled.Form data-aos='fade-right'>
					<FormGroup mb={32}>
						<Label htmlFor='email'>Email</Label>
						<Input
							id='email'
							placeholder='Email'
							autoComplete='email'
							disabled={isLoading}
							value={values.email}
							onChange={(e) => setValue('email', e.target.value)}
						/>
					</FormGroup>
					<FormGroup mb={32}>
						<Label htmlFor='name'>Full Name</Label>
						<Input
							id='name'
							placeholder='Your name'
							value={values.name}
							autoComplete='name'
							disabled={isLoading}
							onChange={(e) => setValue('name', e.target.value)}
						/>
					</FormGroup>
					<FormGroup mb={10}>
						<Label htmlFor='message'>Message</Label>
						<Textarea
							id='message'
							placeholder='Message'
							value={values.message}
							disabled={isLoading}
							onChange={(e) => setValue('message', e.target.value)}></Textarea>
					</FormGroup>

					<Alert alert={alert} onClose={clearAlert} />

					<Styled.SendButton
						outlined
						variant='secondary'
						disabled={isLoading}
						onClick={submit}>
						{isLoading ? <Spinner /> : 'Send Message'}
					</Styled.SendButton>
				</Styled.Form>
				<Styled.Social>
					<Text
						variant='h3'
						text='You can also reach me through my social channels'
						data-aos='fade-left'
					/>

					<Styled.SocialIcons data-aos='fade-up'>
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
					</Styled.SocialIcons>
				</Styled.Social>
			</Styled.ContactContainer>
		</Styled.Contact>
	);
};

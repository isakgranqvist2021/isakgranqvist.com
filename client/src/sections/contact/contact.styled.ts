import styled from 'styled-components';

import { Container } from 'components';

const Contact = styled('div')`
	padding: 100px 0;
	overflow: hidden;
	background-color: #333;

	@media (max-width: 600px) {
		padding: 50px 0;
	}
`;

const ContactContainer = styled(Container)`
	display: flex;

	@media (max-width: 1100px) {
		flex-direction: column-reverse;
		gap: 50px;
	}

	@media (max-width: 600px) {
		gap: 25px;
	}
`;

const Form = styled('form')`
	width: 100%;
	margin-right: 50px;

	@media (max-width: 500px) {
		margin-right: 0;
	}
`;

const Social = styled('div')`
	width: 100%;
	margin-left: 50px;

	h3 {
		font-size: 3rem;
		font-weight: 900;
		color: #fff;
	}

	.icons {
		display: flex;
		flex-wrap: wrap;
		margin-top: 20px;

		a {
			box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
			padding: 1rem;
			border-radius: 50%;
			transition: all 200ms ease;
			background-color: #fff;

			&:hover {
				box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
					0 10px 10px rgba(0, 0, 0, 0.22);
			}

			&:not(:last-of-type) {
				margin-right: 1rem;
			}

			img {
				height: 32px;
				width: 32px;
				display: block;
			}
		}
	}

	@media (max-width: 1100px) {
		margin: 50px 0 0 0 !important;
		text-align: center;

		.icons {
			justify-content: center;
		}
	}

	@media (max-width: 500px) {
		h3 {
			font-size: 2rem;
		}
	}

	@media (max-width: 500px) {
		h3 {
			max-width: 20ch;
		}

		.icons {
			margin-top: 25px;
			a {
				margin-bottom: 10px;
			}
		}
	}
`;

export const Styled = { Contact, ContactContainer, Form, Social };

import styled from 'styled-components';

import { Container } from 'components';

const Footer = styled('footer')`
	padding: 20px 0;
	background-color: #333;
	border-top: 1px solid #3d3d3d;
`;

const FooterContent = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #919191;

	a {
		color: #919191;
	}

	@media (max-width: 400px) {
		flex-direction: column;

		p {
			margin-top: 20px;
		}
		a {
			display: block;
			margin: 20px 0;
		}
	}
`;

export const Styled = { Footer, FooterContent };

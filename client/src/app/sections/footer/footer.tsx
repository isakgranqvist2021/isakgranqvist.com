import { Styled } from './footer.styled';

export const Footer = () => {
	return (
		<Styled.Footer>
			<Styled.FooterContent>
				<p>&copy; isakgranqvist.com 2021</p>
				<Styled.LinkGroup>
					<a href='https://www.allabolag.se/980107SLKD/verksamhet'>
						Privacy Policy
					</a>
					<a href='https://www.allabolag.se/980107SLKD/verksamhet'>
						Business Info
					</a>
				</Styled.LinkGroup>
			</Styled.FooterContent>
		</Styled.Footer>
	);
};

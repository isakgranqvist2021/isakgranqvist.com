import { Styled } from './footer.styled';
import { FooterProps } from './footer.types';

export const Footer = (props: FooterProps) => {
	const { onPrivacyClick } = props;

	return (
		<Styled.Footer>
			<Styled.FooterContent>
				<p>&copy; isakgranqvist.com 2021</p>
				<Styled.LinkGroup>
					<a onClick={onPrivacyClick}>Privacy Policy</a>
					<a href='https://www.allabolag.se/980107SLKD/verksamhet'>
						Business Info
					</a>
				</Styled.LinkGroup>
			</Styled.FooterContent>
		</Styled.Footer>
	);
};

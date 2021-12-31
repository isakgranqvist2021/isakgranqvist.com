import { Styled } from './link.styles';
import { LinkProps } from './link.types';

export const Link = (props: LinkProps) => {
	const { children, ...rest } = props;

	return <Styled.Link {...rest}>{children}</Styled.Link>;
};

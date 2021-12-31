import { Styled } from './button.styled';
import { ButtonProps } from './button.types';

export const Button = (props: ButtonProps) => {
	const { children, ...rest } = props;

	return (
		<Styled.Button type='button' {...rest}>
			{children}
		</Styled.Button>
	);
};

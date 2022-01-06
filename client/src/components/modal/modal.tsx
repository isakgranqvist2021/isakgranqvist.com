import { ModalText } from './modal.constants';
import { Styled } from './modal.styled';
import { ModalProps } from './modal.types';

export const Modal = (props: ModalProps) => {
	const { open, title, onClose } = props;

	const onPreventClose = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation();
	};

	return (
		<Styled.Modal.Container open={open} onClick={onClose}>
			<Styled.Modal.Body open={open} onClick={onPreventClose}>
				{!!title && (
					<Styled.Modal.Header>
						<h3>{title}</h3>
					</Styled.Modal.Header>
				)}
				<Styled.Modal.Content>
					<ModalText />
				</Styled.Modal.Content>
				<Styled.Modal.Footer>
					<p>Modal Footer</p>
				</Styled.Modal.Footer>
			</Styled.Modal.Body>
		</Styled.Modal.Container>
	);
};

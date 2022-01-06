export interface ModalState {
	open: boolean;
}

export interface ModalProps extends ModalState {
	onClose: () => void;
	title?: string;
}

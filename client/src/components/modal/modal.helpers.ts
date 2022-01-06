import { useState } from 'react';

export const useModalState = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	return { modalIsOpen, openModal, closeModal };
};

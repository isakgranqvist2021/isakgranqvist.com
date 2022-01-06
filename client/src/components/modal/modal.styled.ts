import styled from 'styled-components';

const Modal = {
	Container: styled('div')`
		position: fixed;
		inset: 0;
		z-index: 16;
		background-color: rgba(0, 0, 0, 0.5);
		padding: 30px;
	`,
	Body: styled('div')`
		width: 100%;
		height: 100%;
		background-color: #fff;
	`,
};

export const Styled = { Modal };

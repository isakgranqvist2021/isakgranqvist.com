import styled, { css } from 'styled-components';

export const title = css`
	font-weight: 900;
	color: #333;
	text-transform: capitalize;
	letter-spacing: 1.5px;
	color: #3f3f3f;
`;

const h1 = styled('h1')`
	${title};

	font-size: 4.4rem;

	@media (max-width: 960px) {
		font-size: 3.6rem;
	}

	@media (max-width: 800px) {
		font-size: 3.2rem;
	}

	@media (max-width: 760px) {
		font-size: 3rem;
	}

	@media (max-width: 680px) {
		font-size: 2.5rem;
	}

	@media (max-width: 600px) {
		font-size: 2rem;
	}

	@media (max-width: 420px) {
		font-size: 1.85rem;
	}

	@media (max-width: 360px) {
		font-size: 1.65rem;
	}

	@media (max-width: 325px) {
		font-size: 1.45rem;
	}
`;

const h2 = styled('h2')`
	${title};
`;

const h3 = styled('h3')`
	${title};
`;

const h4 = styled('h4')`
	${title};
`;

const h5 = styled('h5')`
	${title};
`;

const h6 = styled('h6')`
	${title};
`;

export const Titles = {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
};

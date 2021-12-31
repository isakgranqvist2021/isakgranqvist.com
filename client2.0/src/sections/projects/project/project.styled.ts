import styled from 'styled-components';

const Project = styled('div')`
	width: 100%;

	.swiper {
		width: 100%;
	}

	.swiper-slide img {
		display: block;
		width: 100%;
		height: 400px;
	}

	.swiper-container {
		border: 6px solid #333;
	}

	.swiper-pagination-bullet.swiper-pagination-bullet-active {
		background-color: #cf3030;
	}

	@media (max-width: 1400px) {
		padding: 0 0 5rem 0 !important;
	}
`;

const ProjectBody = styled('div')`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;

	h4 {
		text-transform: capitalize;
		font-size: 2.4rem;
		font-weight: 800;
		margin: 20px 0;
		color: rgb(68, 68, 68);
	}

	@media (max-width: 820px) {
		text-align: center;
	}
`;

const ProjectActions = styled('div')`
	margin-top: 25px;
	display: flex;
	align-items: center;

	a {
		display: inline-block;
		padding: 0.8rem;
		text-align: center;
		text-transform: uppercase;
		text-decoration: none;
		border: 1px solid transparent;
		transition: all 300ms ease;

		&.disabled {
			border: 1px solid #999999 !important;
			background-color: #cccccc !important;
			color: #666666 !important;
			cursor: not-allowed;
		}

		&:last-of-type {
			margin-left: 0.5rem;
			background-color: #cf3030;
			color: #fff;

			&:hover {
				background-color: #ffffff;
				color: #cf3030;
				border-color: #cf3030;
			}
		}

		&:first-of-type {
			margin-right: 0.5rem;
			border: 1px solid #cf3030;
			color: #cf3030;

			&:hover {
				background-color: #cf3030;
				color: #fff;
				border-color: #cf3030;
			}
		}
	}

	@media (max-width: 820px) {
		display: flex;
		flex-direction: column-reverse;
		width: 100%;
		a {
			width: 100%;
			margin: 0.5rem 0 !important;
		}
	}

	@media (max-width: 620px) {
		width: 100%;
		a {
			width: 100%;
		}
	}
`;

export const Styled = { Project, ProjectBody, ProjectActions };

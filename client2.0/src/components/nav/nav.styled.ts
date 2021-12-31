import styled from 'styled-components';

const Nav = styled('nav')`
	background-color: rgb(207, 48, 48);
	height: 80px;
	position: fixed;
	top: 0;
	z-index: 10;
	width: 100%;
	.container {
		height: inherit;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	a {
		display: block;
		img {
			display: block;
			height: 100%;
			max-width: 200px;
		}
	}

	.nav-links {
		a {
			color: #fff;
			text-transform: uppercase;
			display: inline-block;
			text-decoration: none;
			font-weight: 600;
			letter-spacing: 1.1px;
			padding: 5px 0;
			transition: all 200ms ease;
			position: relative;

			&::before,
			&::after {
				content: '';
				background-color: #fff;
				height: 2px;
				position: absolute;
				width: 0;
				top: 100%;
				transition: all 200ms ease;
			}

			&::before {
				left: 0;
			}

			&::after {
				right: 0;
			}

			&:hover,
			&.is-current {
				&::before,
				&::after {
					width: 50%;
				}
			}

			&:not(:first-of-type) {
				margin-left: 1rem;
			}
		}
	}

	#sidenav-toggle,
	#filler {
		display: none;
	}

	@media (max-width: 760px) {
		padding: 0 1rem;

		img {
			display: block;
			height: 50%;
		}

		.nav-links {
			position: fixed;
			background: rgb(255, 255, 255);
			top: 0;
			left: 0;
			height: 100%;
			overflow: hidden;
			width: 0;
			transition: all 300ms ease;
			z-index: 15;

			ul {
				display: flex;
				flex-direction: column;
			}

			a {
				margin-left: 0 !important;
				margin-bottom: 1rem;
				padding: 0rem 1rem 0 1rem;
				color: #333;
				&::before,
				&::after {
					display: none;
				}
				&:first-of-type {
					margin-top: 30px;
				}
			}

			&.open {
				width: 200px;
			}
		}

		#sidenav-toggle {
			display: block;
			color: #fff;
			font-size: 2.5rem;
			z-index: 15;
			cursor: pointer;
		}

		#filler {
			display: block;
			position: fixed;
			inset: 0;
			background-color: rgba(0, 0, 0, 0);
			z-index: 14;
			pointer-events: none;
			transition: all 300ms ease;

			&.open {
				background-color: rgba(0, 0, 0, 0.568);
				pointer-events: all;
			}
		}
	}
`;

export const Styled = { Nav };

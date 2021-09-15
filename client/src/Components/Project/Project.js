/** @format */

import { useEffect } from 'react';
import SwiperCore, { Pagination, EffectCube } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/swiper-bundle.css';
import 'swiper/components/effect-cube/effect-cube.min.css';
import 'swiper/components/pagination/pagination.min.css';

import './Project.scss';

SwiperCore.use([EffectCube, Pagination]);

function Project(props) {
	const styles =
		props.padding === 'left'
			? { paddingLeft: '3rem' }
			: { paddingRight: '3rem' };

	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

	return (
		<div
			className='Project'
			style={styles}
			data-aos={props.padding === 'left' ? 'fade-left' : 'fade-right'}>
			<Swiper
				effect={'cube'}
				grabCursor={true}
				cubeEffect={{
					shadow: true,
					slideShadows: true,
					shadowOffset: 20,
					shadowScale: 0.94,
				}}
				loop={true}
				pagination={true}>
				{props.images.map((img, i) => (
					<SwiperSlide key={i}>
						<img src={img.src} alt={img.alt} />
					</SwiperSlide>
				))}
			</Swiper>{' '}
			<div className='project-body'>
				<h4>{props.label}</h4>
				<div className='actions'>
					{props.href !== null && props.href.length > 0 ? (
						<a href={props.href}>website</a>
					) : (
						<a
							href='https://isakgranqvist.com'
							className='disabled'
							title='Not available'
							aria-label='Not available'>
							website
						</a>
					)}
					{props.github !== null && props.github.length > 0 ? (
						<a href={props.github}>github repository</a>
					) : (
						<a
							href='https://isakgranqvist.com'
							className='disabled'
							title='Not available'
							aria-label='Not available'>
							github repository
						</a>
					)}
				</div>
			</div>
		</div>
	);
}

export default Project;

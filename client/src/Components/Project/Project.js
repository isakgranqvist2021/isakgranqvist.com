/** @format */

import React from 'react';
import SwiperCore, { Pagination, EffectCube } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

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

	return (
		<div className='Project' style={styles}>
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
						<img src={img.src} />
					</SwiperSlide>
				))}
			</Swiper>{' '}
			<div className='project-body'>
				<h4>{props.label}</h4>
				<div className='actions'>
					{props.href !== null ? (
						<a href={props.href}>website</a>
					) : (
						''
					)}
					{props.github !== null ? (
						<a href={props.github}>github repository</a>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
}

export default Project;

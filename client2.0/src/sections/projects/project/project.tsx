import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';

import { Styled } from './project.styled';
import { ProjectProps } from './project.types';

export const Project = (props: ProjectProps) => {
	const { project } = props;

	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

	return (
		<Styled.Project>
			<Styled.ProjectBody>
				<h4>{project.label}</h4>
				<Styled.ProjectActions>
					<a
						title='Not available'
						aria-label='Not available'
						href={project.href || 'https://isakgranqvist.com'}>
						website
					</a>
					<a
						href={project.github || 'https://isakgranqvist.com'}
						title={project.github ? project.label : 'Not available'}
						aria-label='Not available'>
						github repository
					</a>
				</Styled.ProjectActions>
			</Styled.ProjectBody>
		</Styled.Project>
	);
};

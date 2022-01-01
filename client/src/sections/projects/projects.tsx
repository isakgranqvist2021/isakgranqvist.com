import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

import { images } from './images';
import { breakpoints } from './projects.constants';
import { Styled } from './projects.styled';

export const Projects = () => {
	return (
		<Styled.Projects>
			<Swiper
				modules={[Navigation, Pagination, A11y]}
				navigation
				slidesPerGroup={3}
				loopFillGroupWithBlank={true}
				pagination={{ clickable: true }}
				breakpoints={breakpoints}>
				{images?.map((src) => (
					<SwiperSlide>
						<Styled.Project key={src}>
							<img src={src} alt='' />
						</Styled.Project>
					</SwiperSlide>
				))}
			</Swiper>
		</Styled.Projects>
	);
};

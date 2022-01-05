import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';

import { Container } from 'components';

import { images } from './images';
import { breakpoints } from './projects.constants';
import { Styled } from './projects.styled';

export const Projects = () => {
	return (
		<Styled.Projects>
			<Container>
				<Swiper
					modules={[Pagination, A11y]}
					loopFillGroupWithBlank={true}
					pagination={{ clickable: true }}
					breakpoints={breakpoints}>
					{images?.map((src) => (
						<SwiperSlide key={src}>
							<Styled.Project>
								<img src={src} alt='' />
							</Styled.Project>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</Styled.Projects>
	);
};

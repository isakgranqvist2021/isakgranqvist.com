import { images } from './images';
import { Styled } from './projects.styled';

export const Projects = () => {
	return (
		<Styled.Projects>
			{images?.map((image) => (
				<Styled.Project key={image.src} {...image} />
			))}
		</Styled.Projects>
	);
};

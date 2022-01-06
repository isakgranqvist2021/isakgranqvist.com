import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'aos/dist/aos.css';

import { Modal } from 'components';
import { GlobalStyles } from 'theme';

import { Nav } from './nav';
import { Hero, Features, About, Contact, Projects, Footer } from './sections';

export const App = () => {
	return (
		<>
			<GlobalStyles />
			<Nav />
			<Hero />
			<Features />
			<Projects />
			<About />
			<Contact />
			<Footer />

			<Modal />
		</>
	);
};

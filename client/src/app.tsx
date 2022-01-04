import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'aos/dist/aos.css';

import { Nav } from './components';
import { Hero, Features, About, Contact, Projects, Footer } from './sections';
import { GlobalStyles } from './theme';

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
		</>
	);
};

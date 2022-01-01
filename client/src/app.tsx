import 'swiper/css';
import 'aos/dist/aos.css';

import { Nav } from './components';
import { Hero, Features, About, Contact, Projects } from './sections';
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
		</>
	);
};

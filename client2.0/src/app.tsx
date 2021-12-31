import 'swiper/css';
import 'aos/dist/aos.css';

import { Nav } from './components';
import { Hero, Features, Projects, About, Contact } from './sections';
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

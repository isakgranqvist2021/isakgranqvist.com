import React from 'react';
import './About.scss';
import { Link } from 'react-router-dom';
import aboutStore from '../../State/about.reducer';
import text from '../../Data/text';
import Block from '../../Components/Block/Block';
import { motion } from 'framer-motion';

function About(props) {
    window.document.title = 'Isak Granqvist - About Me';

    const animation = {
        initial: { rotate: -25, opacity: 0, x: '-100%', scale: .2 },
        animate: { rotate: 0, opacity: 1, x: 0, scale: 1 },
        exit: { rotate: 25, x: '100%', scale: .2 },
        transition: { duration: .5 }
    }

    const [blocks, setBlocks] = React.useState([
        { title: 'Who am I?', body: text.who_am_i, visible: true, focused: false },
        { title: 'Development Journey', body: text.development_journey, visible: true, focused: false },
        { title: 'My Goals', body: text.goals, visible: true, focused: false }
    ]);

    aboutStore.subscribe(() => {
        const newState = aboutStore.getState();

        newState.type === 'enter' && newState.value != null
            ? setBlocks(blocks.map((block, i) => ({ ...block, visible: i === newState.value, focused: newState.value === i })))
            : setBlocks(blocks.map(block => ({ ...block, focused: false, visible: true })));
    });

    return (
        <motion.div {...animation} className="container aboutPage">
            <header>
                <h1>About</h1>
            </header>

            {blocks.map((block, i) => <Block key={i} i={i} {...block}></Block>)}

            <footer>
                <p>If you would like to have a longer chat about programming or potentially hiring me, you can reach me via mail or the <Link to="/contact">contact form</Link></p>
            </footer>

            <div className="nav-f-actions">
                <Link to="/projects"><i className="fas fa-arrow-left"></i> Projects</Link>
                <Link to="/contact">Contact <i className="fas fa-arrow-right"></i></Link>
            </div>
        </motion.div>
    );
}

export default About;
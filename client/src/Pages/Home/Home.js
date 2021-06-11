import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home(props) {
    window.document.title = 'Isak Granqvist - Swedish Software Developer';

    const animation = {
        initial: { scaleY: 0 },
        animate: { scaleY: 1 },
        exit: { scaleY: 0 },
        transition: { duration: .5 }
    }

    return (
        <motion.div {...animation} className="homePage">
            <div className="hero-section">
                <div className="content">
                    <div className="content-inner">
                        <h1>swedish software developer</h1>
                        <p>Are you looking for a software developer who loves learning new technologies?</p>
                        <p>I love working on new and challenging problems and come up with creative and innovative solutions.</p>
                        <div className="actions">
                            <Link to="/projects"><span>Projects</span></Link>
                            <a href="https://github.com/isakgranqvist2021"><span>Github</span></a>
                        </div>
                    </div>
                </div>
                <div className="img"></div><div className="img-m"><img src="https://static.isakgranqvist.com/svg/logo.svg" alt="site logo" /></div>
            </div>
        </motion.div>
    );
}

export default Home;
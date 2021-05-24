import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

class Home extends React.Component {
    constructor(props) {
        super();

        this.images = [
            'angular.svg',
            'go.svg',
            'mongodb.svg',
            'mysql.svg',
            'nodejs.svg',
            'react.svg',
            'vue.svg'
        ]

        window.document.title = 'Isak Granqvist - Swedish Software Developer';
    }

    render() {
        const variants = {
            hidden: { opacity: 0, scale: .8 },
            visible: { opacity: 1, scale: 1 }
        }

        return (
            <motion.div initial="hidden" animate="visible" variants={variants}>
                <div className="hero-section">
                    <div className="content">
                        <div className="content-inner">
                            <h1>swedish software developer</h1>
                            <p>Are you looking for a software developer who loves learning new technologies?</p>
                            <p>I love working on new and challenging problems and come up with creative and innovative solutions.</p>
                            <div className="actions">
                                <Link to="/projects">Projects</Link>
                                <a href="https://github.com/isakgranqvist2021">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="img"></div>
                </div>
            </motion.div>
        );
    }
}

export default Home;
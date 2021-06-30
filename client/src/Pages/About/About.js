import React, { useEffect } from 'react';
import './About.scss';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Block from '../../Components/Block/Block';
import http from '../../Utils/http';

function About(props) {
    window.document.title = 'Isak Granqvist - About Me';
    const [blocks, setBlocks] = React.useState([]);

    const animation = {
        initial: { rotate: -25, opacity: 0, x: '-100%', scale: .2 },
        animate: { rotate: 0, opacity: 1, x: 0, scale: 1 },
        exit: { rotate: 25, x: '100%', scale: .2 },
        transition: { duration: .5 }
    };

    const fetchText = React.useCallback(async () => {
        const abortController = new AbortController();
        const response = await http.GET("/about");

        if (response.success) {
            setBlocks(response.data);
        }

        return abortController.abort();
    }, []);

    useEffect(() => {
        fetchText();
    }, [fetchText])

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
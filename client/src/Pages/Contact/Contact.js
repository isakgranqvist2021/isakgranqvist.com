import React from 'react';
import { motion } from 'framer-motion';

class Contact extends React.Component {
    constructor(props) {
        super();
        window.document.title = 'Isak Granqvist - Contact Me';
    }

    render() {
        const variants = {
            visible: { x: '0' },
            hidden: { x: '100%' }
        }

        return (
            <motion.div className="container" initial="hidden" animate="visible" variants={variants}>
                <header>
                    <h1>Contact</h1>
                </header>
            </motion.div>
        );
    }
}

export default Contact;
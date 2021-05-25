import React from 'react';
import './Contact.scss';
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
            <motion.div className="container contact-page" initial="hidden" animate="visible" variants={variants}>
                <header>
                    <h1>Contact</h1>
                </header>

                <form>
                    <fieldset>
                        <legend>E-mail</legend>
                        <input placeholder="peter-smith@email.com" />
                    </fieldset>
                    <fieldset>
                        <legend>What should I call you?</legend>
                        <input placeholder="Peter Smith" />
                    </fieldset>
                    <fieldset>
                        <legend>Message</legend>
                        <textarea></textarea>
                    </fieldset>

                    <button>Send Message</button>
                </form>

                <footer>
                    <p title="email"><img src="https://static.isakgranqvist.com/icons/letter.png" alt="letter icon" />isakwebdev@gmail.com</p>
                    <p title="discord"><img src="https://static.isakgranqvist.com/icons/discord.png" alt="Discord icon" /> IsakGranqvist#6926</p>
                </footer>
            </motion.div>
        );
    }
}

export default Contact;
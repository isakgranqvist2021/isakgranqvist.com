import React from 'react';
import './Contact.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import http from '../../Utils/http';
import alertsReducer from '../../Store/alerts.reducer';

function Contact(props) {
    window.document.title = 'Isak Granqvist - Contact Me';

    const [formData, setFormData] = React.useState({
        email: '',
        name: '',
        message: ''
    });

    const animation = {
        initial: { scaleY: 0 },
        animate: { scaleY: 1 },
        exit: { scaleY: 0 },
        transition: { duration: .5 }
    }

    const submit = async () => {
        try {
            const response = await http.POST('/contact', formData);

            alertsReducer.dispatch({
                message: response.message,
                type: `${response.success ? 'success' : 'error'}`
            })
        } catch (err) {

        }
    }

    return (
        <motion.div {...animation} className="container contactPage">
            <header>
                <h1>Contact</h1>
            </header>

            <form>
                <fieldset>
                    <legend>E-mail</legend>
                    <input placeholder="peter-smith@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </fieldset>

                <fieldset>
                    <legend>What should I call you?</legend>
                    <input placeholder="Peter Smith" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </fieldset>

                <fieldset>
                    <legend>Message</legend>
                    <textarea placeholder="Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                </fieldset>

                <div className="form-footer">
                    <button type="button" onClick={submit}>Send Message</button>
                </div>
            </form>

            <footer>
                <p title="email"><i className="far fa-envelope fa-2x"></i> isakwebdev@gmail.com</p>
                <p title="discord"><i className="fab fa-discord fa-2x"></i> IsakGranqvist#6926</p>
            </footer>

            <div className="nav-f-actions">
                <Link to="/about"><i className="fas fa-arrow-left"></i> About</Link>
                <Link to="/">Home <i className="fas fa-arrow-right"></i></Link>
            </div>
        </motion.div>
    );
}
export default Contact;
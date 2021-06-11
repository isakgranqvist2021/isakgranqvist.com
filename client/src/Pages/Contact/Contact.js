import React from 'react';
import './Contact.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

async function sendMail(data) {
    const response = await fetch('https://isakgranqvist.com/api/send-mail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return await response.json();
}

function Alert(props) {
    if (props.text.length > 0)
        return <div className={`alert ${props.type}`}><p>{props.text}</p></div>

    return <div className="alert"></div>
}

function Contact(props) {
    window.document.title = 'Isak Granqvist - Contact Me';
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [alert, setAlert] = React.useState({
        type: '',
        text: ''
    });

    const animation = {
        initial: { scaleY: 0 },
        animate: { scaleY: 1 },
        exit: { scaleY: 0 },
        transition: { duration: .5 }
    }

    const submit = async () => {
        try {
            const response = await sendMail({
                email: email,
                name: name,
                message: message
            });

            setAlert({ type: 'success', text: response.message });
            setEmail('');
            setName('');
            setMessage('');

        } catch (err) {
            setAlert({ type: 'error', text: err });
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
                    <input placeholder="peter-smith@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </fieldset>
                <fieldset>
                    <legend>What should I call you?</legend>
                    <input placeholder="Peter Smith" value={name} onChange={(e) => setName(e.target.value)} />
                </fieldset>
                <fieldset>
                    <legend>Message</legend>
                    <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </fieldset>

                <div className="form-footer">
                    <Alert type={alert.type} text={alert.text}></Alert>
                    <span></span>
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
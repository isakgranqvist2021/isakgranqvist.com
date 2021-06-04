import React from 'react';
import './Contact.scss';

async function SendMail(data) {
    return fetch('http://localhost:8081/api/send-mail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
}

function Alert(props) {
    if (props.text.length > 0)
        return <div className={`alert ${props.type}`}><p>{props.text}</p></div>

    return <div className="alert"></div>
}

class Contact extends React.Component {
    constructor(props) {
        super();

        this.state = {
            email: '',
            name: '',
            message: '',
            alert: {
                type: '',
                text: ''
            }
        };

        window.document.title = 'Isak Granqvist - Contact Me';
    }

    submit() {
        SendMail({
            email: this.state.email,
            name: this.state.name,
            message: this.state.message
        }).then(response =>
            response.success
                ? this.setState({ alert: { type: 'success', text: response.message }, email: '', name: '', message: '' })
                : this.setState({ alert: { type: 'error', text: response.message } }))
            .catch(_ => this.setState({ alert: { type: 'error', text: 'unable to send mail' } }));
    }

    render() {
        return (
            <div className="container contact-page">
                <header>
                    <h1>Contact</h1>
                </header>

                <form>
                    <fieldset>
                        <legend>E-mail</legend>
                        <input placeholder="peter-smith@email.com" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </fieldset>
                    <fieldset>
                        <legend>What should I call you?</legend>
                        <input placeholder="Peter Smith" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </fieldset>
                    <fieldset>
                        <legend>Message</legend>
                        <textarea placeholder="Message" value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })}></textarea>
                    </fieldset>

                    <div className="form-footer">
                        <Alert type={this.state.alert.type} text={this.state.alert.text}></Alert>
                        <span></span>
                        <button type="button" onClick={() => this.submit()}>Send Message</button>
                    </div>
                </form>

                <footer>
                    <p title="email"><i className="far fa-envelope fa-2x"></i> isakwebdev@gmail.com</p>
                    <p title="discord"><i className="fab fa-discord fa-2x"></i> IsakGranqvist#6926</p>
                </footer>
            </div>
        );
    }
}
export default Contact;
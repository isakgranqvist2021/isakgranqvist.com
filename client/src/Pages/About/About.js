import React from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutStore from '../../State/about.reducer';
import text from '../../State/text';

function Block(props) {
    let classList = ['block'];

    if (!props.data.visible) {
        classList.push('hide');
    }

    if (props.data.focused) {
        classList.push('focused');
    }

    return (
        <div className={classList.map(c => c).join(' ')}>
            <h2>{props.data.title}</h2>
            <p>{props.data.body}</p>
            <div
                onMouseEnter={() => aboutStore.dispatch({ type: 'enter', value: props.data.i })}
                onMouseLeave={() => aboutStore.dispatch({ type: 'leave' })}
                className="circle-toggle">
            </div>
        </div>
    );
}

class About extends React.Component {
    constructor(props) {
        super();

        this.state = {
            blocks: [
                {
                    title: 'Who am I?',
                    body: text.who_am_i,
                    visible: true,
                    focused: false
                },
                {
                    title: 'Development Journey',
                    body: text.development_journey,
                    visible: true,
                    focused: false
                },
                {
                    title: 'My Goals',
                    body: text.goals,
                    visible: true,
                    focused: false
                }
            ]
        }

        window.document.title = 'Isak Granqvist - About Me';
    }

    componentDidMount() {
        aboutStore.subscribe(() => {
            aboutStore.getState().type === 'enter' && aboutStore.getState().value != null
                ? this.setState({
                    blocks: this.state.blocks.map((block, i) => {

                        if (aboutStore.getState().value === i) {
                            block.focused = true;
                        }

                        block.visible = i !== aboutStore.getState().value ? false : true;
                        return block;
                    })
                }) : this.setState({
                    blocks: this.state.blocks.map(block => {
                        block.focused = false;
                        block.visible = true;
                        return block;
                    })
                });
        });
    }

    render() {
        const variants = {
            visible: { x: '0' },
            hidden: { x: '-100%' }
        }

        return (
            <motion.div className="container about-page" initial="hidden" animate="visible" variants={variants}>
                <header>
                    <h1>About</h1>
                </header>

                {
                    this.state.blocks.map((block, i) => {
                        return <Block key={i} data={{ i, ...block }}></Block>;
                    })
                }

                <footer>
                    <p>If you would like to have a longer chat about programming or potentially hiring me, you can reach me via mail or the <Link to="/contact">contact form</Link></p>
                </footer>
            </motion.div>
        );
    }
}

export default About;
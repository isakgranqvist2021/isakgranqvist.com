import React from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutStore from '../../State/about.reducer';

function Block(props) {
    return (
        <div className={props.data.visible ? 'block' : 'block hide'}>
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
                    body: 'I am a 23 year old technology enthusiast and  “mostly” self-taught software developer. I have always been interested in computers and technology. I have mostly been interested in video games throughout my childhood like most young guys are. I was especially into the competitive aspect of video games. I played titles like World Of Warcraft and League Of Legends. I am still interested in video games but more ones that challenge my brain like chess.',
                    visible: true
                },
                {
                    title: 'Development Career',
                    body: 'At the age of eighteen I began watching youtube videos and searching online for programming related content and ended up learning HTML, CSS, JavaScript. Since the age of 18 I have been programming a lot and have been trying several programming languages. I would consider myself a JavaScript developer but I have moderate expertise in Golang, TypeScript, Python, C# - in order from best to worst. I have since built countless crud applications, mostly with the MEAN-stack but also with other stacks. Like this application your currently browsing is built with React and C#.',
                    visible: true
                },
                {
                    title: 'My Goals',
                    body: 'My number one goal for the foreseeable future is to become a hireable software developer where I can devote my drive to produce excellent software. Outside of work/study life I have very minimal goals like improving at chess. Being in a community or company where excellent software is being produced and where learning is happening on a daily basis would be a dream come true.',
                    visible: true
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
                        block.visible = i !== aboutStore.getState().value ? false : true;
                        return block;
                    })
                }) : this.setState({
                    blocks: this.state.blocks.map(block => {
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
            <motion.div className="container" initial="hidden" animate="visible" variants={variants}>
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
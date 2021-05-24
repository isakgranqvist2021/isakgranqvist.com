import React from 'react';
import './Projects.scss';
import projects from './data';
import { motion } from 'framer-motion';

class Project extends React.Component {
    constructor(props) {
        super();

        this.state = {
            focused: props.data.focused,
            data: props.data
        };

        window.document.title = 'Isak Granqvist - My Projects';
    }



    selectImage(i) {
        console.log(i)
        this.setState({ focused: i });
    }

    render() {
        return (
            <motion.div className="project">
                <h2>{this.state.data.label}</h2>
                <div className="images">
                    {this.state.data.images.map((img, i) => {
                        if (this.state.focused === i) {
                            return <img className="in-focus" src={img.src} alt={img.alt} key={i} />
                        }

                        return null;
                    })}
                    <div className="picker">
                        {this.state.data.images.map((img, i) => {
                            return <img className={this.state.focused === i ? 'focused' : null} src={img.src} alt={img.alt} key={i} onClick={() => this.selectImage(i)} />
                        })}
                    </div>

                    <p>{this.state.data.description}</p>
                </div>

                <div className="actions">
                    <a href={this.state.data.href}>website</a>
                    {this.state.data.github != null ? <a href={this.state.data.github}>github repository</a> : ''}
                </div>
            </motion.div>
        );
    }
}


class Projects extends React.Component {
    constructor(props) {
        super();
        this.projects = projects;
    }

    render() {
        const variants = {
            visible: { y: 0 },
            hidden: { y: 200 }
        }

        return (
            <motion.div className="container" initial="hidden" animate="visible" variants={variants}>
                <header>
                    <h1>Projects</h1>
                    <p>These are some of my most recent projects, you can view all of my projects on my <a href="https://github.com/isakgranqvist2021">github</a></p>
                </header>
                <div className="projects">
                    {this.projects.map((project, i) => <Project data={project} key={i}></Project>)}
                </div>
            </motion.div>
        );
    }
}

export default Projects;
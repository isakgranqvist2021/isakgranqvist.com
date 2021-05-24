import { motion } from 'framer-motion';
import React from 'react';
import './Projects.scss';
import projects from './data';
import Project from './Project';

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
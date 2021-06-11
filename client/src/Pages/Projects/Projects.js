import React from 'react';
import './Projects.scss';
import projectsData from '../../Data/projects';
import Project from '../../Components/Project/Project';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Projects(props) {
    window.document.title = 'Isak Granqvist - My Projects';
    const [projects, setProjects] = React.useState(projectsData);

    const animation = {
        initial: { scale: 0 },
        animate: { scale: 1 },
        exit: { scale: 0 },
        transition: { duration: 0.5 }
    }

    return (
        <motion.div {...animation} className="container projects-page">
            <header>
                <h1>Projects</h1>
                <p>These are some of my most recent projects, <br /> you can view all of my projects on my <a href="https://github.com/isakgranqvist2021">github</a></p>
            </header>
            <div className="projects">
                {projects.map((project, i) => <Project {...project} key={i}></Project>)}
            </div>

            <div className="nav-f-actions">
                <Link to="/"><i class="fas fa-arrow-left"></i> Home</Link>
                <Link to="/about">About <i class="fas fa-arrow-right"></i></Link>
            </div>
        </motion.div>
    );
}

export default Projects;
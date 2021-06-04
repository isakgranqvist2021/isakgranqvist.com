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
        return (
            <div className="container projects-page">
                <header>
                    <h1>Projects</h1>
                    <p>These are some of my most recent projects, <br /> you can view all of my projects on my <a href="https://github.com/isakgranqvist2021">github</a></p>
                </header>
                <div className="projects">
                    {this.projects.map((project, i) => <Project data={project} key={i}></Project>)}
                </div>
            </div>
        );
    }
}

export default Projects;
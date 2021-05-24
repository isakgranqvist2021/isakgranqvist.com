import React from 'react';
import './Projects.scss';
import projects from './data';

class Project extends React.Component {
    constructor(props) {
        super();

        this.state = {
            focused: props.data.focused,
            data: props.data
        };
    }



    selectImage(i) {
        console.log(i)
        this.setState({ focused: i });
    }

    render() {
        return (
            <div className="project">
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
            </div>
        );
    }
}


class Projects extends React.Component {
    constructor(props) {
        super();
        this.projects = projects;
    }

    render() {
        return (
            <div className="container">
                <div className="projects">
                    {this.projects.map((project, i) => <Project data={project} key={i}></Project>)}
                </div>
            </div>
        );
    }
}

export default Projects;
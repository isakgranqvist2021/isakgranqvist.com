import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super();

        this.images = [
            'angular.svg',
            'go.svg',
            'mongodb.svg',
            'mysql.svg',
            'nodejs.svg',
            'react.svg',
            'vue.svg'
        ]
    }

    render() {
        return (
            <div>
                <div className="hero-section">
                    <div className="content">
                        <div className="content-inner">
                            <h1>swedish software developer</h1>
                            <p>
                                Are you looking for a software developer who loves learning new technologies? <br />
                                I love working on new and challenging problems and come up with creative and innovative solutions.
                            </p>

                            <div className="actions">
                                <Link to="/projects">Projects</Link>
                                <a href="https://github.com/isakgranqvist2021">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="img"></div>
                </div>
            </div>
        );
    }
}

export default Home;
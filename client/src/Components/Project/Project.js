import React from 'react';
import './Project.scss';

function Project(props) {
    const [focused, setFocused] = React.useState(0);

    return (
        <div className="project">
            <div className="images">
                <img className="in-focus" src={props.images[focused].src} alt={props.images[focused].alt} />

                <div className="picker">
                    {props.images.map((img, i) =>
                        <img loading="lazy" src={img.src} alt={img.alt} key={i} onClick={() => setFocused(i)} />)}
                </div>

                <h2>{props.label}</h2>
                <p>{props.description}</p>
            </div>

            <div className="actions">
                {props.href != null ? <a href={props.href}>website</a> : ''}
                {props.github != null ? <a href={props.github}>github repository</a> : ''}
            </div>
        </div>
    );
}

export default Project;
import React from 'react';
import './Block.scss';

function Block(props) {
    return (
        <div className="block">
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    );
}

export default Block;
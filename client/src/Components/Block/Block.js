import React from 'react';
import aboutStore from '../../State/about.reducer';

function Block(props) {
    let classList = ['block'];

    if (!props.visible) {
        classList.push('hide');
    }

    if (props.focused) {
        classList.push('focused');
    }

    return (
        <div className={classList.map(c => c).join(' ')}>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <div
                onMouseEnter={() => aboutStore.dispatch({ type: 'enter', value: props.i })}
                onMouseLeave={() => aboutStore.dispatch({ type: 'leave' })}
                className="circle-toggle">
            </div>
        </div>
    );
}

export default Block;
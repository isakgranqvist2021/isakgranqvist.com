import React from 'react';

class Transition extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

    }

    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}

export default Transition;
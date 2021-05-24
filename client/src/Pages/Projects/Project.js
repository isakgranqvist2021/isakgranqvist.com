import React from 'react';

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
            <div className="project">
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
                    <h2>{this.state.data.label}</h2>

                    <p>{this.state.data.description}</p>
                </div>

                <div className="actions">
                    {this.state.data.href != null ? <a href={this.state.data.href}>website</a> : ''}
                    {this.state.data.github != null ? <a href={this.state.data.github}>github repository</a> : ''}
                </div>
            </div>
        );
    }
}

export default Project;
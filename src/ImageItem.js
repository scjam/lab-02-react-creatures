import React from 'react';

export default class ImageItem extends React.Component {
    render() {
        return (
            <div className="image">
                <h2>{this.props.title}</h2>
                <img src={this.props.picture} alt={this.props.title} />
                <p>{this.props.description}</p>
                <p>Horns: {this.props.horns}</p>
            </div>
        );
    }
}
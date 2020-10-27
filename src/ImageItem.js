import React from 'react';

export default class ImageItem extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img className="image" src={this.props.picture} alt={this.props.title}></img>
            </div>
        );
    }
}
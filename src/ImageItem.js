import React from 'react';

export default class ImageItem extends React.Component {
    render() {
        return (
            <div>{this.props.caption}</div>
        );
    }
}
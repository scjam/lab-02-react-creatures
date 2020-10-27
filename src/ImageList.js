import React, { Component } from 'react';
import ImageItem from './ImageItem.js';
import images from './data.js';

export default class ImageList extends Component {
    render() {
        return (
            <div className="images">
                {
                    images.map(image =>
                        <ImageItem 
                        caption={image.title}
                        />)
                }
            </div>
        )
    }
}
import React from 'react'
import ImageItem from './ImageItem.js'

export default class FilterList extends React.Component {
    
    render() {
        return (
            <>
            <div className="images">
                {
                    this.props.images.filter((image) => {
                        if (!this.props.filter) return true;
                        if (image.keyword === this.props.filter) return true;
                        return false
                    })
            
                    .filter((image) => {
                        if (!this.props.horns) return true;
                        if (image.horns === +this.props.horns) return true;
                        return false
                    })

                    .map((image) =>
                    <ImageItem 
                    picture={image.url}
                    title={image.title}
                    description={image.description}
                    horns={image.horns}
                    />)
                }
            </div>
            </>
        )
    }
}


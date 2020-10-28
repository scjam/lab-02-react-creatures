import React, { Component } from 'react'
import ImageItem from './ImageItem.js'

export default class FilterList extends React.Component {
    state = {
        filter: '',
        horns: '',
    }

    handleChangeHorns = e => {
        this.setState({
            horns: e.target.value
        });
    }

    handleChange = e => {
        this.setState({
            filter: e.target.value
        });
    }

    render() {
        return (
            <>
            <div className="drop-down">
            <select onChange={this.handleChange}>
                    <option value=''>What Type:</option>
                    <option value='narwhal'>narwhal</option>
                    <option value='rhino'>rhino</option>
                    <option value='unicorn'>unicorn</option>
                    <option value='unilego'>unilego</option>
                    <option value='unicorn'>triceratops</option>
                    <option value='unilego'>markhor</option>
                    <option value='unicorn'>mouflon</option>
                    <option value='unilego'>addax</option>
                    <option value='unicorn'>chameleon</option>
                    <option value='unilego'>lizard</option>
                    <option value='unilego'>dragon</option>
                </select>
                <select onChange={this.handleChangeHorns}>
                    <option value=''>How Many Horns:</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='100'>100</option>
                </select>
            </div>
            <div className="images">
                {
                    this.props.images.filter((image) => {
                        if (!this.state.filter) return true;
                        if (image.keyword === this.state.filter) return true;
                        return false
                    })
            
                    .filter((image) => {
                        if (!this.state.horns) return true;
                        if (image.horns === +this.state.horns) return true;
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


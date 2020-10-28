import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        return (
            <div className="drop-down">
                <select onChange={this.props.handleChange}>
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
                <select onChange={this.props.handleChangeHorns}>
                    <option value=''>How Many Horns:</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='100'>100</option>
                </select>
            </div>
        )
    }
}
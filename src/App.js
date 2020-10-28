import React from 'react';
import './App.css';
import Header from './Header.js';
import FilterList from './FilterList.js';
import DropDown from './DropDown.js';
import images from './data.js';

export default class App extends React.Component {
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
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <div className="filter-div">
          <DropDown handleChange={this.handleChange} handleChangeHorns={this.handleChangeHorns} />
          <FilterList images={images} filter={this.state.filter} horns={this.state.horns}/>
        </div>
      </div>
    );
  }
}

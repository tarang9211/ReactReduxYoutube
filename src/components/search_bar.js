import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    //initializing component state
    this.state = { searchTerm: '' };
  }

  render() {
    return (
      <div>
        <input
          value = { this.state.searchTerm }
          placeholder = 'Search for a video!'
          onChange = { (e) => this.setState({ searchTerm: e.target.value })} />
      </div>
    );
  }

}

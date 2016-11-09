import React, { Component } from 'react';

//SearchBar is a class based component which has access to props, states.
export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    //initializing component state
    this.state = { searchTerm: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value = { this.state.searchTerm }
          placeholder = 'Search for a video!'
          onChange = { (e) => this.setState({ searchTerm: e.target.value })} />
      </div>
    );
  }

}

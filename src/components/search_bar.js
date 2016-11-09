import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return <input onChange = { (event) => console.log(event.target.value)} />
  }

}

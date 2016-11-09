import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBwwj4UuzrSiF3L1ajGGMl-7e5pNgeSyGc';

class App extends Component {
  constructor(props) {
    super(props);

    //initializing state
    this.state = { videos: [] };

    //consuming the YT search api with a sample search
    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      //ES6 equivalent of videos: videos
      this.setState({ videos });
    });
  }

  render() {
      return (
          <div>
            <SearchBar />
            <VideoList videos= { this.state.videos }/>
          </div>
      );
  }
};

/*
* <App /> creates an instance of const App variable
* Functional components take in some information and return JSX
*/
ReactDOM.render(<App />, document.querySelector('.container'));

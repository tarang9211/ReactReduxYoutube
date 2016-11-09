import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBwwj4UuzrSiF3L1ajGGMl-7e5pNgeSyGc';

class App extends Component {
  constructor(props) {
    super(props);

    //initializing state
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch();
  }

  videoSearch(term='surfboards') {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      //ES6 equivalent of videos: videos
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
      return (
          <div>
            <SearchBar handleSearchTermChange={ term => this.videoSearch(term)} />
            <VideoDetail video={ this.state.selectedVideo }/>
            <VideoList
              handleVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
              videos= { this.state.videos }/>
          </div>
      );
  }
};

/*
* <App /> creates an instance of const App variable
* Functional components take in some information and return JSX
*/
ReactDOM.render(<App />, document.querySelector('.container'));

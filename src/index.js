import React from 'react';
import ReactDOM from 'react-dom';

//importing components
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBwwj4UuzrSiF3L1ajGGMl-7e5pNgeSyGc';

//Step 1: create a component that will produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

//Step 2: take the component's generated HTMl and put it on the page

/*
*<App /> creates an instance of const App variable
*/
ReactDOM.render(<App />, document.querySelector('.container'));

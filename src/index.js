import React from 'react';
import ReactDOM from 'react-dom';

//Step 1: create a component that will produce some HTML
const App = () => {
  return <div>Hi!</div>
}

//Step 2: take the component's generated HTMl and put it on the page

/*
*<App /> creates an instance of const App variable
*/
ReactDOM.render(<App />, document.querySelector('.container'));

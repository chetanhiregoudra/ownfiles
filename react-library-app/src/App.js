import React, { Component } from 'react';
import {BrowserRouter}  from 'react-router-dom';

import './App.css';
import LibraryMain from './container/LibraryMain/LibraryMain';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="App">
          <LibraryMain />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

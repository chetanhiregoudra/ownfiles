import React, { Component } from 'react';
import {BrowserRouter}  from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import LibraryMain from './container/LibraryMain/LibraryMain';
import rootReducer from './rootReducer';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter >
          <div className="App">
            <LibraryMain />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

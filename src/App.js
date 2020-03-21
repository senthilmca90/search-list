import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
const store = createStore(rootReducer, applyMiddleware(thunk))
function App() {
  return (
    <div className="App">
        <Provider store={store}>
        <Search />
        </Provider>
    </div>
  );
}

export default App;

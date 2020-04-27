import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import allReducer from './Reducers';
import thunk from 'redux-thunk';
/* const api = 'https://jsonplaceholder.typicode.com/users'; */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myStore = createStore(allReducer,
composeEnhancer(applyMiddleware(thunk)),
);
ReactDOM.render(
  <React.StrictMode>
  <Provider store={myStore}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

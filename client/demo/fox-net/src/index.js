import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Registration from './components/Registration.js';
import Authorisation from './components/Authorisation.js'
import Dialogs from './components/Dialogs.js'
import reducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// ReactDOM.render(
//   <Provider store = {store}>
//     <Registration/>
//   </Provider>,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <Provider store = {store}>
//     <Authorisation/>
//   </Provider>,
//   document.getElementById('root')
// )


ReactDOM.render(
  <Provider store = {store}>
    <Dialogs/>
  </Provider>,
  document.getElementById('root')
)

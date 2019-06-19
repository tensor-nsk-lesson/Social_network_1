import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Registration from './container/Registration.js';
import Authorisation from './container/Authorisation.js';
import Dialogs from './container/Dialogs.js';
import Profile from './container/Profile.js';
import Friends from './container/Friends.js';
import reducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

  ReactDOM.render(
    <Provider store = {store}>
      <Router>
        <Route exact path="/" component={Authorisation}/>
        <Route path="/registration" component={Registration}/>
        <Route path='/friends' component={Friends}/>
        <Route path='/dialogs' component={Dialogs}/>
        <Route path='/profile' component={Profile}/>
      </Router>
    </Provider>,
    document.getElementById('root')
  )

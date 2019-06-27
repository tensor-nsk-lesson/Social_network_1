import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Registration from './components/Registration.js';
import Authorisation from './components/Authorisation.js';
import Dialogs from './container/Dialogs.js';
import Profile from './container/Profile.js';
import Friends from './components/Friends.js';
import Settings from './container/Settings.js';
import Mafia from './container/Mafia.js';
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
        <Route path='/profile/:id' component={Profile}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/mafia' component={Mafia}/>
      </Router>
    </Provider>,
    document.getElementById('root')
  )

import React from 'react';
import {Component} from 'react';

class SettingsNav extends Component{
  render(){
    return(
      <div className="settingsNav">
        <ul>
          <li id='activeSetting'>Main information</li>
          <li>Privacy</li>
          <li>Black list</li>
        </ul>
      </div>
    )
  }
}

export default SettingsNav

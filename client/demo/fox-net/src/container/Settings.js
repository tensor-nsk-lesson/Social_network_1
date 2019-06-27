import React from 'react';
import {Component} from 'react';
import Header from '../components/Header.js';
import SettingsNav from './SettingsNav.js';
import SettingsBlock from '../components/SettingsBlock';

class Settings extends Component{
  render(){
    return(
      <React.Fragment>
        <Header/>
        <div class="settingsWrap">
          <SettingsBlock/>
          <SettingsNav/>
        </div>
      </React.Fragment>
    )
  }
}

export default Settings

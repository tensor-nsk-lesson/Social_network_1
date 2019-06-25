import React from 'react';
import {Component} from 'react';
import Header from './Header.js';
import MafiaChat from './MafiaChat.js';
import MafiaSettings from './MafiaSettings';

class Mafia extends Component{
  render(){
    return(
      <React.Fragment>
        <Header/>
        <section className='dialogWrap'>
          <MafiaSettings/>
          <MafiaChat/>
        </section>
      </React.Fragment>
    )
  }
}

export default Mafia

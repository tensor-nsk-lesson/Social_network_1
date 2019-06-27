import React from 'react';
import {Component} from 'react';
import Header from '../components/Header.js';
import MafiaChat from '../components/MafiaChat.js';
import MafiaSettings from '../components/MafiaSettings';

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

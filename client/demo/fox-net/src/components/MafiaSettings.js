import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

class MafiaSettings extends Component{
  render(){
    return(
      <form className='mafiaForm'>
        <div className="mafiaButtos">
          <div className='mafiaGuessButton'>
            <input placeholder='Nickname'/>
            <input placeholder='Nickname'/>
            <input placeholder='Nickname'/>
            <input placeholder='Nickname'/>
          </div>
          <div className='mafiaUserButton'>
            <input placeholder='Username'/>
            <input placeholder='Username'/>
            <input placeholder='Username'/>
            <input placeholder='Username'/>
          </div>
        </div>
        <div id='mafiaSubmit'>
          <input type='submit'/>
        </div>
      </form>
    )
  }
}

export default connect(
  state =>({

  }),
  dispatch =>({

  })
)(MafiaSettings)

import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import DialogChat from './DialogChat.js'

class MafiaChat extends Component{
  render(){
    return(
      <div className="dialogMessages">
        <div className="messageProfileInfo">
          <img src='' alt="MAFIA"/>
        </div>
        <div className="dialogBlock">

        </div>
        <textarea placeholder='Enter your message' className='messageInput'></textarea>
        <button className='sendMessage'><img src='' alt='M'/></button>
      </div>
    )
  }
}
export default connect(
  state =>({

  }),
  dispatch =>({

  })
)(MafiaChat)

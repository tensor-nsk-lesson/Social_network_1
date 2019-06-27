import React from 'react';
import {Component} from 'react';
import userPhoto from '../pics/dialog.png'

class DialogElement extends Component{
  render(){
    return(
      <div className="dialog">
        <div className="dialogProfileInfo">
          <img src={userPhoto} alt="userPhoto"/>
          <h4>{this.props.dialog}</h4>
        </div>
        <p className="message">{this.props.lastMessage}<span className='messageTime'>{this.props.lastMessageTime}</span></p>
      </div>
    )
  }
}

export default DialogElement

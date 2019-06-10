import React from 'react';
import {Component} from 'react';
import userPhoto from '../pics/profilePhoto.jpg'

class DialogElement extends Component{
  render(){
    return(
      <div className="dialog">
        <div className="dialogProfileInfo">
          <img src={userPhoto} alt="userPhoto"/>
          <h4>{this.props.dialogs}</h4>
        </div>
        <p className="message">{this.props.lastMessage}<span className='messageTime'>{this.props.lastMessageTime}</span></p>
      </div>
    )
  }
}

export default DialogElement
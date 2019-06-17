import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import userPhoto from '../pics/profilePhoto.jpg'
import sendMessage from '../pics/sendMessage.png'


class Chat extends Component{
  render(){
    // let messages = this.props.messages.map((item,key) =>{
    //   return <div className={this.props.sender[key]} key={key}><p>{item}</p> <span className='messageTime'>{this.props.time[key]}</span></div>
    // });
    return(
      <div className="dialogMessages">
        <div className="messageProfileInfo">
          <img src={userPhoto} alt="userPhoto"/>
          <h4>{this.props.interlocutor}</h4>
        </div>
        <p className='isOnline'>online</p>
        <div className="dialogBlock">
          
        </div>
        <textarea placeholder='Enter your message' className='messageInput'></textarea>
        <button className='sendMessage'><img src={sendMessage}/></button>
      </div>
    )
  }
}

export default connect(
  state =>({
    // interlocutor: state.dialog.interlocutor,
    // messages: state.messagesList.messages,
    // time: state.messagesList.time,
    // sender: state.messagesList.sender
  }),
  dispatch =>({})
)(Chat)

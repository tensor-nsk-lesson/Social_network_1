import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';
import userPhoto from '../pics/profilePhoto.jpg';
import sendMessage from '../pics/sendMessage.png';
import {getMessages} from '../actions/getMessages.js';
import {postMessage} from '../actions/messages.js';


class Chat extends Component{
  constructor(props){
    super(props);
    this.state = {className: ''}
  }
  componentDidMount(){
    this.props.onGetMessages('/dialog/61536/get_messages')
  }
  sendMessage(){
    // let socket = io.connect('http://localhost');
    let message = this.messageInput.value;
    let now = new Date();
    let date = now.getDate() + '.' +
      now.getMonth() + '.' +
      now.getFullYear() + ' ' +
      now.getHours() + ':' +
      now.getMinutes() + ':' +
      now.getSeconds();
    let postData = {
      message: message,
      id_dialog: 61536,
      time: date
    }

    console.log(postData);
    // let data = {
    //   message: message,
    //   room: 555
    // }
    // socket.send('message', JSON.stringify(data))
    // socket.on('response')
    this.props.onSendMessage('/push_message', postData)
  }
  render(){
    // let messages = this.props.messages.map((item,key) =>{
    //   return <div className={this.props.sender[key]} key={key}><p>{item}</p> <span className='messageTime'>{this.props.time[key]}</span></div>
    // });
    let arr = [];
    for(let i=0; i<this.props.messages; i++){
      arr.push(this.props.friends[i])
    }
    let dialog = this.props.messages.map((item,key) =>{
      let className;
      if (item.IdUser != this.props.user){
        className = 'interlocutorMessage';
      }else{
        className = 'yourMessage';
      }
      return <div className={className} key={key}><p>{item.Message}</p></div>
    })

    console.log(this.props.messages);
    return(
      <div className="dialogMessages">
        <div className="messageProfileInfo">
          <img src={userPhoto} alt="userPhoto"/>
          <h4>Кот ЕвГЕНИЙ</h4>
        </div>
        <p className='isOnline'></p>
        <div className="dialogBlock">
          {dialog}
        </div>
        <textarea placeholder='Enter your message' className='messageInput'  ref={(input) => {this.messageInput = input}} ></textarea>
        <button className='sendMessage' onClick={this.sendMessage.bind(this)}><img src={sendMessage}/></button>
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
    messages: state.getMessages,
    user: state.header.Id
  }),
  dispatch =>({
    onGetMessages : (url) =>{
      dispatch(getMessages(url))
    },
    onSendMessage: (url, data) =>{
      dispatch(postMessage(url,data))
    }
  })
)(Chat)

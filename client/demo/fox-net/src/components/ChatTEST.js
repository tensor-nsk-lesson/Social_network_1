import io from 'socket.io-client';
import {connect} from 'react-redux'
import React, {Component} from 'react';
import {loadInitialDataSocket} from '../actions/ChatTEST.js';
import {addNewItemSocket} from '../actions/ChatTEST.js';

class ChatTEST extends Component{

  constructor(props){
    super(props);
    let socket = io.connect('http://localhost');
    socket.on('join', () => {
        console.log('connected')
    });
    socket.emit('join', {username: '1', room: '1'});
    socket.emit('message', {room: 1, message: 'hello'})
    socket.on('message', (data) =>{
        console.log(data);
    })
  }
  render(){
    return(
      <p>server</p>
    )
  }
}

export default connect(
  state =>({

  }),
  dispatch =>({

  })
)(ChatTEST)

// import React from 'react';
// import {Component} from 'react';
// import {connect} from 'react-redux';
// import io from 'socket.io-client';
// import socket from 'socket.io-client';
//
// class Chat extends Component{
//   constructor(props){
//     super(props);
//     socket = io.connect("http://localhost:3000")
//     dispatch(loadInitialDataSocket(socket))
//
//     socket.on('itemAdded', (res) => {
//       dispatch(AddItem(res))
//     })
//     socet.on('itemMarked', (res) => {
//       dispatch(completeItem(res))
//     })
//   }
//   componentWillUnmount(){
//     socket.dis
//   }
// }
//
// export default connect(
//   state => ({
//
//   }),
//   dispatch => ({
//
//   })
// )(Chat)

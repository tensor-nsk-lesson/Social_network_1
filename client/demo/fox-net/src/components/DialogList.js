import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import DialogElList from './DialogElList.js';
import {createDialog} from '../actions/dialog.js';
import {subscribeChat} from '../actions/ChatTEST.js';
import {addInDialog} from '../actions/addInDialog.js';
import io from 'socket.io-client';

class DialogList extends Component{
  shouldComponentUpdate( nextProps, nextState ){
    return true
  }
  createDialog(){
    let socket = io.connect('http://localhost');
    this.props.onCreateDialog('/dialog/');
    let postData = {
          username: '1',
          room: '10357'
        }
    socket.emit('join', postData)
  }
  createDialog2(){
    let socket = io.connect('http://localhost');
    let data = {id_user: '2', id_dialog: '71233'}
    this.props.onAddInDialog('/add_in_dialog', data);
    let postData = {
          username: '2',
          room: '10357'
        }
    socket.emit('join', postData)
  }
  render(){
      let dialogList = <p>Loading</p>;
      if(this.props.dialogs[0] != undefined){
        dialogList = this.props.dialogs.map((item, index) =>{
          return <DialogElList key={index} dialog={item.NameDialog}/>
        });
      }else{
        dialogList = <h3>You have not got dialogs yet</h3>
      }
    return(
      <div className="dialogList">
        {dialogList}
        <button onClick={this.createDialog.bind(this)}>Создать</button>
        <button onClick={this.createDialog2.bind(this)}>Добавть</button>
      </div>
    )
  }
}

export default connect(
  state =>({
    dialogs: state.dialogs,
    dialogId: state.dialogs,
    dialogsAmount: state.dialogs
  }),
  dispatch =>({
    onCreateDialog: (url) =>{
      dispatch(createDialog(url));
    },
    onAddInDialog: (url, data) =>{
      dispatch(addInDialog(url,data));
    },
    onSubscribeChat: (url) =>{
      dispatch(subscribeChat(url))
    }
  })
)(DialogList)

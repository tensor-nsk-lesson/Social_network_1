import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import DialogElList from '../container/DialogElList.js';
import {createDialog} from '../actions/dialog.js';
import {addInDialog} from '../actions/addInDialog.js';
import io from 'socket.io-client';
import {getDialogs} from '../actions/dialogs.js';

class DialogList extends Component{
  componentDidMount(){
    this.props.onGetDialogs("/dialogs/");
  }
  createDialog(){
  //   let socket = io.connect('http://localhost');
  //   this.props.onCreateDialog('/dialog/');
  //   let postData = {
  //         username: '1',
  //         room: '10357'
  //       }
  //   socket.emit('join', postData)
  // }
  // createDialog2(){
  //   let socket = io.connect('http://localhost');
  //   let data = {id_user: '2', id_dialog: '71233'}
  //   this.props.onAddInDialog('/add_in_dialog', data);
  //   let postData = {
  //         username: '2',
  //         room: '10357'
  //       }
  //   socket.emit('join', postData)
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
    onGetDialogs: (url) =>{
      dispatch(getDialogs(url))
    }
  })
)(DialogList)

import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import Dialogs from '../container/dialogElList.js'

class DialogList extends Component{
  render(){
    let dialogList = this.props.dialogs.map((item, index) =>{
      return <Dialogs key={index} dialogs={item} lastMessage={this.props.lastMessage[index]} lastMessageTime={this.props.lastMessageTime[index]}/>
    })
    return(
      <React.Fragment>
        {dialogList}
      </React.Fragment>
    )
  }
}

export default connect(
  state =>({
    dialogState: state,
    dialogs :  state.dialog.dialogs,
    lastMessage: state.dialog.lastMessage,
    lastMessageTime: state.dialog.lastMessageTime
  }),
  dispatch =>({
  })
)(DialogList)

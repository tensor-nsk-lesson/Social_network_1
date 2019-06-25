import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import DialogElList from './DialogElList.js'

class DialogList extends Component{
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
    dialogs: state.dialogs
  }),
  dispatch =>({
  })
)(DialogList)

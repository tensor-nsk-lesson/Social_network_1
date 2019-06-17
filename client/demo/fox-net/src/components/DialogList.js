import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import DialogElList from './DialogElList.js'

class DialogList extends Component{
  render(){
    let dialogList = this.props.dialogs.map((item, index) =>{
      return <DialogElList key={index} dialog={item.NameDialog}/>
    })
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

import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import '../style.css'
import Header from '../container/header.js'
import DialogList from './DialogList.js'
import Chat from './DialogChat.js'

class Dialogs extends Component{
  render(){
    return(
      <React.Fragment>
      <Header user='Венимин Аноним'/>
      <section className='dialogWrap'>
        <DialogList />
        <Chat/>
      </section>
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    user: state.user
  }),
  dispatch =>({
    onChooseDialog: (dialog) =>{
      dispatch({type: 'CHANGE_DIALOG', dialog: dialog})
    }
  })
)(Dialogs)

import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import '../style.css'
import Header from '../components/Header.js'
import DialogList from '../components/DialogList.js'
import Chat from '../components/DialogChat.js';
import {getDialogs} from '../actions/dialogs.js'

class Dialogs extends Component{
  componentDidMount(){
    this.props.onGetDialogs("/dialogs/")
  }
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

  }),
  dispatch =>({
    onGetDialogs: (url) =>{
      dispatch(getDialogs(url))
    }
  })
)(Dialogs)

import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import '../style.css'
import Header from '../container/header.js'
import DialogList from './DialogList.js'
import Chat from './DialogChat.js';
import {test} from '../actions/test.js';
import { Redirect } from 'react-router'

class Dialogs extends Component{
  constructor(props){
    super(props);
    this.state ={redirect : false}
  }
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
      dispatch(test(url))
    }
  })
)(Dialogs)

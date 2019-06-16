import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import '../style.css'
import Header from '../container/header.js'
import DialogList from './DialogList.js'
import Chat from './DialogChat.js';
import {test} from '../actions/test.js';

class Dialogs extends Component{
  componentDidMount(){
    this.props.onGet("/dialogs/846cfbaa315df72273f4")
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
    onGet: (url) =>{
      dispatch(test(url))
    }
  })
)(Dialogs)

import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../container/header.js'
import ProfileInfo from '../container/profileInfo.js'

class Profile extends Component{
  render(){
    return(
      <React.Fragment>
      <Header user='Венимин Аноним'/>
      <div class='profile'>
        <ProfileInfo/>
      </div>
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(Profile)

import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../container/header.js'
import ProfileInfo from '../container/profileInfo.js'
import Wall from '../container/profileWall.js'
import {getProfile} from '../actions/profile.js'

class Profile extends Component{
  render(){
    return(
      <React.Fragment>
      <Header user='Венимин Аноним'/>
      <div className='profile'>
        <ProfileInfo/>
        <Wall/>
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

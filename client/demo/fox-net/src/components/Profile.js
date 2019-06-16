import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../container/header.js'
import ProfileInfo from '../container/profileInfo.js'
import Wall from '../container/profileWall.js'

class Profile extends Component{
  componentDidMount(){
    fetch("/dialogs/eb7209b8faf067427a47",{
       method: 'GET',
       credentials: 'include'
    })
  }
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

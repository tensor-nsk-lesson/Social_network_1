import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header.js'
import ProfileInfo from '../components/ProfileInfo.js'
import Wall from '../components/ProfileWall.js'

class Profile extends Component{
  render(){
    return(
      <React.Fragment>
      <Header/>
      <div className='profile'>
        <ProfileInfo  userId={this.props.match.params.id}/>
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

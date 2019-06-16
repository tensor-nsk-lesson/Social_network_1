import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import userPhoto from '../pics/profilePhoto.jpg'
import {getProfile} from '../actions/profile.js'

class ProfileInfo extends Component{
  componentDidMount(){
    this.props.onGetProfile('/get_profile/')
  }
  render(){
    return(
      <div className='profileInfoWrap'>
        <div className='profileInfo'>
          <img src={userPhoto} />
          <h3>{this.props.FirstName} {this.props.SecondName}</h3>
          <div className='profileInfoButtons'>
            <button>User information</button>
            <button>Add friend</button>
            <button>Send message</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    FirstName: state.profile.FirstName,
    SecondName: state.profile.SecondName
  }),
  dispatch =>({
    onGetProfile: (url) =>{
      dispatch(getProfile(url))
    }
  })
)(ProfileInfo)

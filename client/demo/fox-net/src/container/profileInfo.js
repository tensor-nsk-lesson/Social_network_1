import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import userPhoto from '../pics/profilePhoto.jpg'

class ProfileInfo extends Component{
  render(){
    return(
      <div className='profileInfoWrap'>
        <div className='profileInfo'>
          <img src={userPhoto} />
          <h3>{this.props.userName}</h3>
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
    userName: state.dialog.user
  }),
  dispatch =>({

  })
)(ProfileInfo)

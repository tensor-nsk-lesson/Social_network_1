import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import userPhoto from '../pics/profilePhoto.jpg';
import ProfilePopup from '../components/ProfilePopup.js';

class ProfileInfo extends Component{
  render(){
    return(
      <React.Fragment>
      <ProfilePopup/>
      <div className='profileInfoWrap'>
        <div className='profileInfo'>
          <img src={userPhoto} />
          <h3>{this.props.FirstName} {this.props.SecondName}</h3>
          <div className='profileInfoButtons'>
            <button onClick={this.props.onTogglePopup}>User information</button>
            <button>Add friend</button>
            <button>Send message</button>
          </div>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    FirstName: state.profile.FirstName,
    SecondName: state.profile.SecondName
  }),
  dispatch =>({
    onTogglePopup: () =>{
      dispatch({type: 'TOGGLE_PROFILE_POPUP', status: 'flex'})
    }
  })
)(ProfileInfo)

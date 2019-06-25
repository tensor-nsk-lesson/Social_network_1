import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import userPhoto from '../pics/profilePhoto.jpg';
import ProfilePopup from '../components/ProfilePopup.js';
import MessagePopup from './MessagePopup.js'
import logo from '../pics/foxnetWhite.png';
import {getProfile} from '../actions/profile.js';

class ProfileInfo extends Component{
  componentDidMount(){
    this.props.onGetProfile('/get_profile/'+this.props.userId)
  }
  render(){
    let photo;
    if(this.props.photo === null){
      photo = logo;
    }else{
      photo = this.props.photo;
    }
    return(
      <React.Fragment>
      <ProfilePopup/>
      <MessagePopup/>
      <div className='profileInfoWrap'>
        <div className='profileInfo'>
          <img src={photo} />
          <h3>{this.props.FirstName} {this.props.SecondName}</h3>
          <div className='profileInfoButtons'>
            <button onClick={this.props.onToggleInfPopup}>User information</button>
            <button>Add friend</button>
            <button onClick={this.props.onToggleMessPopup}>Send message</button>
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
    SecondName: state.profile.SecondName,
    photo: state.profile.Photo
  }),
  dispatch =>({
    onGetProfile: (url) =>{
      dispatch(getProfile(url))
    },
    onToggleInfPopup: () =>{
      dispatch({type: 'TOGGLE_PROFILE_POPUP', status: 'flex'})
    },
    onToggleMessPopup: () => {
      dispatch({type: 'TOGGLE_MESSAGE_POPUP', status: 'flex'})
    }
  })
)(ProfileInfo)

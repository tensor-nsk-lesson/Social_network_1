import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import userPhoto from '../pics/profilePhoto.jpg';
import ProfilePopup from '../components/ProfilePopup.js';
import MessagePopup from './MessagePopup.js';
import {createDialog} from '../actions/dialog.js';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import logo from '../pics/foxnetWhite.png';
import {getProfile} from '../actions/profile.js';

class ProfileInfo extends Component{
  componentDidMount(){
    this.props.onGetProfile('/get_profile/'+this.props.userId)
  }
  createDialog(){
    this.props.onCreateDialog('/dialog_with_him/'+this.props.userId)
    // let length = this.props.dialog.length-1
    // console.log(this.props.dialog[length]);
    // let dialog = this.props.dialog[length]
    // let socket = io.connect('http://localhost');
    // let connectMe = {
    //       username: this.props.id,
    //       room: 555
    //     }
    // let connectHim = {
    //       username: this.props.userId,
    //       room: 555
    //     }
    // socket.emit('join', connectMe)
    // socket.emit('join', connectHim)
  }
  render(){
    console.log(this.props.id);
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
            <Link to='/dialogs'>
            <button onClick={this.createDialog.bind(this)}>Send message</button>
            </Link>
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
    photo: state.profile.Photo,
    id: state.header.Id,
    dialog: state.dialogs
  }),
  dispatch =>({
    onCreateDialog: (url) =>{
      dispatch(createDialog(url))
    },
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

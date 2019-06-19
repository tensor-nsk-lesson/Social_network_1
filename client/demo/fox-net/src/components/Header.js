import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import logo from '../pics/foxnetWhite.png';
import peoplePic from '../pics/people.png';
import notificationPic from '../pics/nontification.png';
import profilePhoto from'../pics/profilePhoto.jpg';
import {getProfile} from '../actions/profile.js'

class Header extends Component{
  componentDidMount(){
    this.props.onGetProfile('/get_profile/')
  }
  render(){
    return(
      <header>
        <div className="logo">
          <img src={logo} alt="LOGO"/>
          <h1>Foxnet</h1>
        </div>
        <div className="notificButtons">
          <img src={peoplePic} alt="PEOPLE"/>
          <img src={notificationPic}alt="NONTIFICATION"/>
        </div>
        <div className="pagesList">
          <ul>
            <Link to='/profile'>
              <li>My profile</li>
            </Link>
            <Link to='/friends'>
              <li>Friends</li>
            </Link>
            <Link to='/dialogs'>
              <li>Dialogs</li>
            </Link>
            <li>News</li>
            <li>Groups</li>
            <li>Music</li>
          </ul>
        </div>
        <div className="profileLogo">
          <i>&equiv;</i>
          <h3>{this.props.FirstName} {this.props.SecondName}</h3>
          <img src={profilePhoto} alt="profilePhoto"/>
        </div>
      </header>
    )
  }
}
export default connect(
  state => ({
    FirstName: state.profile.FirstName,
    SecondName: state.profile.SecondName
  }),
  dispatch => ({
    onGetProfile: (url) =>{
      dispatch(getProfile(url))
    }
  })
)(Header)

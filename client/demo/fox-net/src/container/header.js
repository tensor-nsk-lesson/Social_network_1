import React from 'react';
import {Component} from 'react';
import logo from '../pics/foxnetWhite.png'
import peoplePic from '../pics/people.png'
import notificationPic from '../pics/nontification.png'
import profilePhoto from'../pics/profilePhoto.jpg'

class Header extends Component{
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
            <li>My profile</li>
            <li>Friends</li>
            <li>News</li>
            <li>Groups</li>
            <li>Music</li>
          </ul>
        </div>
        <div className="profileLogo">
          <i>&equiv;</i>
          <h3>{this.props.user}</h3>
          <img src={profilePhoto} alt="profilePhoto"/>
        </div>
      </header>
    )
  }
}
export default Header

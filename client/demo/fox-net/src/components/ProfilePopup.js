import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import profilePhoto from '../pics/profilePhoto.jpg';
import '../style.css'

class ProfilePopup extends Component{
  render(){
    let display = {display: this.props.togglePopup}
    return(
      <div className="popupWrap" style={display}>
        <div className="backgroundPopup"></div>
          <div className="popup">
            <div className="popupUserName">
              <img src={profilePhoto} alt=""/>
              <div><h4>{this.props.FirstName} {this.props.SecondName}</h4><span>online</span></div>
              <button onClick={this.props.onTogglePopup}>X</button>
            </div>
            <div className="popupProfileInfo">
              <h3>About Me: {this.props.userInfo}</h3>
              <h3>City: {this.props.city}</h3>
              <h3>Age: {this.props.age}</h3>
              <h3>Fathername: {this.props.FatherName}</h3>
              <h3>Relationship: {this.props.relationship}</h3>
            </div>
          </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    FirstName: state.profile.FirstName,
    SecondName: state.profile.SecondName,
    FatherName: state.profile.FatherName,
    userInfo: state.profile.AboutMe,
    age: state.profile.Age,
    city: state.profile.City,
    relationship: state.profile.Status,
    togglePopup: state.profilePopup.status
  }),
  dispatch =>({
    onTogglePopup: () =>{
      dispatch({type: 'TOGGLE_PROFILE_POPUP', status: 'none'})
    }
  })
)(ProfilePopup)

import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import profilePhoto from '../pics/profilePhoto.jpg';
import '../style.css'

class ProfilePopup extends Component{
  constructor(props){
    super(props);
    this.state = {date: ''}
  }
  render(){
    let display = {display: this.props.togglePopup};
    setTimeout((()=>{
      let dateMas = this.props.data.Date.split(' ');
      this.state.date = dateMas[1] + ' ' + dateMas[2]+ ' ' + ' '+ dateMas[3];
      this.setState({date: this.state.date})
    }),1500);
    return(
      <div className="popupWrap" style={display}>
        <div className="backgroundPopup"></div>
          <div className="popup">
            <div className="popupUserName">
              <img src={profilePhoto} alt=""/>
              <div><h4>{this.props.data.FirstName} {this.props.data.SecondName}</h4><span>online</span></div>
              <button onClick={this.props.onTogglePopup}>X</button>
            </div>
            <div className="popupProfileInfo">
              <h3>About Me: {this.props.data.AboutMe}</h3>
              <h3>City: {this.props.data.City}</h3>
              <h3>Age: {this.state.date}</h3>
              <h3>Fathername: {this.props.data.FatherName}</h3>
              <h3>Relationship: {this.props.data.Status}</h3>
            </div>
          </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    data: state.profile,
    togglePopup: state.profilePopup.status
  }),
  dispatch =>({
    onTogglePopup: () =>{
      dispatch({type: 'TOGGLE_PROFILE_POPUP', status: 'none'})
    }
  })
)(ProfilePopup)

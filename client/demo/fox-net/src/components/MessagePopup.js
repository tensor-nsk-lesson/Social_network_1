import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import '../style.css'

class Popup extends Component{
  render(){
    return(
      <div className="popupWrap">
        <div className="backgroundPopup"></div>
          <div className="popup">
            <div className="popupUserName">
              <img src={profilePhoto} alt=""/>
              <div><h4>{this.props.FirstName} {this.props.SecondName}</h4><span>online</span></div>
            </div>
            <div className="popupMessage">
              <textarea type="text" placeholder="Enter your message"></textarea>
              <button>Sumit</button>
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

  })
)(Popup)

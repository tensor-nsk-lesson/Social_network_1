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
            <div className="popupProfileInfo">
              <img src="../static/src/profilePhoto.jpg" alt=""/>
              <div><h4>{this.props.name}</h4><span>{this.props.isOnline}</span></div>
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
    name: state.popup.name,
    isOnline: state.popup.isOnline
  }),
  dispatch =>({

  })
)(Popup)

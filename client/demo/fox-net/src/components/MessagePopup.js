import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import '../style.css';
import logo from '../pics/foxnetWhite.png'

class Popup extends Component{
  render(){
    let display = {display: this.props.togglePopup}
    return(
      <div className="popupWrap" style={display}>
        <div className="backgroundPopup"></div>
          <div className="popup">
            <div className="popupUserName">
              <img src={logo} alt=""/>
              <div><h4>{this.props.FirstName} {this.props.SecondName}</h4><span>online</span></div>
              <button onClick={this.props.onTogglePopup}>X</button>
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
    FirstName: state.header.FirstName,
    SecondName: state.header.SecondName,
    togglePopup: state.messagePopup.status
  }),
  dispatch =>({
    onTogglePopup: () =>{
      dispatch({type: 'TOGGLE_MESSAGE_POPUP', status: 'none'})
    }
  })
)(Popup)

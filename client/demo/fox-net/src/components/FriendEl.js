import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import logo from '../pics/foxnetWhite.png';
import message from '../pics/sendMessage.png';
import MessagePopup from './MessagePopup.js';
import {getProfile} from '../actions/profile.js'

class FriendEl extends Component{
  render(){
    this.props.onGetProfile('/get_profile/'+this.props.id);
    let href = 'localhost:3000/profile/' + this.props.uid
    return(
      <React.Fragment>
      <div className='friendWrap'>
        <div className='friendInfo'>
          <img src={this.props.photo} alt='user'/>
          <div>
            <h3><a href={href}>{this.props.name} {this.props.surname}</a></h3>
            <span>{this.props.status}</span>
          </div>
        </div>
        <div className='friendButtons'>
          <button onClick={this.props.onTogglePopup}><img src={message}/></button>
          <button>X</button>
        </div>
      </div>
      </React.Fragment>
    )
  }
}
export default connect(
  state =>({
    name: state.profile.FirstName,
    surname: state.profile.SecondName,
    photo: state.profile.Photo,
    uid: state.profile.Id
  }),
  dispatch =>({
    onTogglePopup: () =>{
      dispatch({type: 'TOGGLE_MESSAGE_POPUP', status: 'flex'})
    },
    onGetProfile: (url) =>{
      dispatch(getProfile(url))
    }
  })
)(FriendEl)

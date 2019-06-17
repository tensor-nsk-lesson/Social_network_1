import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import userPhoto from '../pics/profilePhoto.jpg'
import {getProfile} from '../actions/profile.js'
import ProfilePopup from '../components/ProfilePopup.js'

class ProfileInfo extends Component{
  componentDidMount(){
    this.props.onGetProfile('/get_profile/')
  }
  render(){
    return(
      <React.Fragment>
      <ProfilePopup/>
      <div className='profileInfoWrap'>
        <div className='profileInfo'>
          <img src={userPhoto} />
          <h3>{this.props.FirstName} {this.props.SecondName}</h3>
          <div className='profileInfoButtons'>
            <button onClick={this.props.onTogglePopup}>User information</button>
            <button>Add friend</button>
            <button>Send message</button>
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
    SecondName: state.profile.SecondName
  }),
  dispatch =>({
    onGetProfile: (url) =>{
      dispatch(getProfile(url))
    },
    onTogglePopup: () =>{
      dispatch({type: 'TOGGLE_POPUP', status: 'flex'})
    }
  })
)(ProfileInfo)

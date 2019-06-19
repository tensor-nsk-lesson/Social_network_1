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
  constructor(props){
    super(props);
    this.state ={toggle: false, style: '', display: ''};
  }
  componentDidMount(){
    this.props.onGetProfile('/get_profile/')
  }
  toggleMenu(){
    if (this.state.display == ''){
      this.state.display = '50px';
      this.setState({display: this.state.display})
    }else{
      this.state.display = '';
      this.setState({display: this.state.display})
    }
  }
  fakeModeToggle(){
    if (this.state.toggle){
      this.state.style = '';
      this.setState({style: this.state.style});
      this.state.toggle = false
      this.setState({toggle: this.state.toggle});
    }else{
      this.state.style = '112px';
      this.setState({style: this.state.style});
      this.state.toggle = true;
      this.setState({toggle: this.state.toggle});
    }
    this.props.onFakeMode(this.state.style, this.state.toggle);
  }
  render(){
    let style = {left: this.state.style}
    let display = {top: this.state.display}
    return(
      <header>
        <div className="logo">
          <img src={logo} alt="LOGO"/>
          <h1>Foxnet</h1>
        </div>
        <div className="notificButtons">
          <button><img src={peoplePic} alt="PEOPLE"/></button>
          <button><img src={notificationPic}alt="NONTIFICATION"/></button>
        </div>
        <div className="pagesList">
          <ul>
            <Link to='/profile'>
              <button><li>My profile</li></button>
            </Link>
            <Link to='/friends'>
              <button><li>Friends</li></button>
            </Link>
            <Link to='/dialogs'>
              <button><li>Dialogs</li></button>
            </Link>
            <button><li>News</li></button>
            <button><li>Groups</li></button>
            <button><li>Music</li></button>
          </ul>
        </div>
        <div className="profileLogo">
          <label onClick={this.toggleMenu.bind(this)}>
            <i>&equiv;</i>
            <h3>{this.props.FirstName} {this.props.SecondName}</h3>
          </label>
          <img src={profilePhoto} alt="profilePhoto"/>
        </div>
        <div className='settingsHeader'>
        <ul style={display}>
          <li>Settings</li>
          <li>Logout</li>
          <li onClick={this.fakeModeToggle.bind(this)}>FakeMode<div id='fakemode'><div  style={style}> </div></div></li>
        </ul>
        </div>
      </header>
    )
  }
}
export default connect(
  state => ({
    FirstName: state.profile.FirstName,
    SecondName: state.profile.SecondName,
  }),
  dispatch => ({
    onGetProfile: (url) =>{
      dispatch(getProfile(url))
    },
    onFakeMode: (status) => {
      dispatch({type: 'FAKEMOD_TOGGLE', status: status})
    }
  })
)(Header)

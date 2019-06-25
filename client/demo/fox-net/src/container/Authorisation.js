import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import '../style.css';
import logo from '../pics/foxnetBlack.png';
import {authorisation} from '../actions/authorisation.js';
import { Redirect } from 'react-router';
import ScrollReveal from 'scrollreveal';
import { withRouter } from 'react-router-dom';
import {getProfile} from '../actions/profile.js';

class Authorisation extends Component{
  componentDidMount(){
    let slideUp = {
    distance: '100%',
    origin: 'top',
    opacity: 0
    };
    ScrollReveal().reveal('.singWrap', slideUp);
  }
  loginUser(e){
    e.preventDefault();
    const data = {
      login: this.emailInput.value,
      password: this.passwordInput.value
    }
    this.props.onAuth('/auth', data);
  }
  render(){
    if(this.props.success == 'success' || localStorage.getItem('login') == 'on'){
      localStorage.setItem('login','on')
      window.location.assign('http://localhost:3000/dialogs')
    }
    return(
      <div className="singWrap">
        <form className="autorisationWrap">
          <h1>Login</h1>
          <img src={logo} alt="FoxNET"/>
            <input type="login" className='loginData' placeholder="Email" ref={(input) => {this.emailInput = input}}/>
            <input type="password" className='loginData' placeholder="Password" ref={(input) => {this.passwordInput = input}}/>
            <div className="serviceButtons"><label id='remember'><input type="checkbox" id='checkbox' ref={(input) => {this.rememberInput = input}}/>
            <p>Remember me</p></label> <a href="#" className='loginFuncs'>Forgot?</a></div>
              <input onClick={this.loginUser.bind(this)} className='logInput' type="submit" value='LOGIN'/>
            <Link to="/registration" className='loginFuncs'>I don't have an accaunt</Link>
        </form>
      </div>
    )
  }
}
export default withRouter(connect(
  state =>({
    success: state.authorisation.success
  }),
  dispatch =>({
    onAuth: (url, data) =>{
      dispatch(authorisation(url, data))
    }
  })
)(Authorisation))

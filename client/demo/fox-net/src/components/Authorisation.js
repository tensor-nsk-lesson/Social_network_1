import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import '../style.css';
import logo from '../pics/foxnetBlack.png';
import {authorisation} from '../actions/authorisation.js';

class Authorisation extends Component{
  constructor(props){
    super(props);
    this.state = {};
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
    return(
      <div className="singWrap">
        <form className="autorisationWrap">
          <h1>Login</h1>
          <img src={logo} alt="FoxNET"/>
            <input type="login" className='loginData' placeholder="Email" ref={(input) => {this.emailInput = input}}/>
            <input type="password" className='loginData' placeholder="Password" ref={(input) => {this.passwordInput = input}}/>
            <div className="serviceButtons"><label id='remember'><input type="checkbox" id='checkbox' ref={(input) => {this.rememberInput = input}}/>
            <p>Remember me</p></label> <a href="#" className='loginFuncs'>Forgot?</a></div>
            <Link to='/dialogs' onClick={this.loginUser.bind(this)}>
              <input className='logInput' type="submit" value='LOGIN'/>
            </Link>
            <Link to="/registration" className='loginFuncs'>I don't have an accaunt</Link>
        </form>
      </div>
    )
  }
}
export default connect(
  state =>({
  }),
  dispatch =>({
    onLoginUser: (data) =>{
      dispatch({type: 'LOGIN_USER', data: data})
    },
    onAuth: (url, data) =>{
      dispatch(authorisation(url, data))
    }
  })
)(Authorisation)

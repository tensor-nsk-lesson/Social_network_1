import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import '../style.css';
import logo from '../pics/foxnet.png';

class Authorisation extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  loginUser(e){
    e.preventDefault();
    const data = {
      email: this.emailInput.value,
      password: this.passwordInput.value,
      remember: this.rememberInput.checked
    }
    this.props.onLoginUser(data);
  }
  render(){
    return(
      <div className="singWrap">
        <form className="autorisationWrap" onSubmit={this.loginUser.bind(this)}>
          <h1>Login</h1>
          <img src={logo} alt="FoxNET"/>
            <input type="login" className='loginData' placeholder="Email" ref={(input) => {this.emailInput = input}}/>
            <input type="password" className='loginData' placeholder="Password" ref={(input) => {this.passwordInput = input}}/>
            <div className="serviceButtons"><label id='remember'><input type="checkbox" id='checkbox' ref={(input) => {this.rememberInput = input}}/>
            <p>Remember me</p></label> <a href="#" className='loginFuncs'>Forgot?</a></div>
            <input className='logInput' type="submit" value='LOGIN'/>
            <a href="#" className='loginFuncs'>I don't have an accaunt</a>
        </form>
      </div>
    )
  }
}
export default connect(
  state =>({
    userData: state.userData
  }),
  dispatch =>({
    onLoginUser: (data) =>{
      dispatch({type: 'LOGIN_USER', data: data})
    }
  })
)(Authorisation)

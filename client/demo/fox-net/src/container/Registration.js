import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import '../style.css';
import {listMonths} from '../constants/date.js';
import {listDays} from '../constants/date.js';
import {listYears} from '../constants/date.js';
import {registration} from '../actions/registration.js';
import { Redirect } from 'react-router';
import ScrollReveal from 'scrollreveal';

class Registration extends Component{
  componentDidMount(){
    let slideUp = {
    distance: '100%',
    origin: 'top',
    opacity: 0
  };
    ScrollReveal().reveal('.singWrap', slideUp);
  }
  submitRegData(e){
    let now = new Date()
    let date = now.getDate() + '.' +
      now.getMonth() + '.' +
      now.getFullYear() + ' ' +
      now.getHours() + ':' +
      now.getMinutes() + ':' +
      now.getSeconds();
    e.preventDefault();
    if (this.passwordInput.value === this.checkPasswordInput.value){
      const userData ={
        first_name: this.nameInput.value,
        login: this.secondnameInput.value,
        date: this.dayInput.value + '.' + this.monthInput.value + '.' + this.yearInput.value,
        password: this.passwordInput.value,
        time: date
      }
      this.props.onReg('/register', userData);
  }else{
    console.log("Passwords aren't the same")
  }
  }
  render(){
    if (this.props.success == 'success'){
      return <Redirect to='/'/>
    }
    return (
      <div className="singWrap" onSubmit={this.submitRegData.bind(this)}>
        <form className='autorisationWrap registr' action="">
            <h1>Registration</h1>
            <input type="text" className="loginData" placeholder="Firstname" maxlength='15' ref={(input) => {this.nameInput = input}} />
            <input type="email" className="loginData" placeholder="Email" ref={(input) => {this.secondnameInput = input}} />
            <div className="loginData selectDateWrap">
              <select className="selectDate" name="" ref={(input) => {this.dayInput = input}}>
                {listDays}
              </select>
              <select className="selectDate" name="" ref={(input) => {this.monthInput = input}}>
                {listMonths}
              </select>
              <select className="selectDate" name="" ref={(input) => {this.yearInput = input}}>
                {listYears}
              </select>
            </div>
            <input type="password" className="loginData" placeholder="Password" ref={(input) => {this.passwordInput = input}}/>
            <input type="password" className="loginData" placeholder="Password again" ref={(input) => {this.checkPasswordInput = input}}/>
              <input type="submit" className='logInput regInput' value='REGISTRATE'/>

        </form>
      </div>
    )
  }
}

export default connect(
  state => ({
    success: state.registration.success
  }),
  dispatch => ({
    onReg: (url, data) =>{
      dispatch(registration(url, data))
    }
  })
)(Registration);

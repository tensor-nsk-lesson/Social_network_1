import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {changeSettings} from '../actions/settings.js';
import {listMonths} from '../constants/date.js';
import {listDays} from '../constants/date.js';
import {listYears} from '../constants/date.js';

class SettingsBlock extends Component{
  constructor(props){
    super(props);
    this.state = {gender: ''}
  }
  changeSettings(e){
    e.preventDefault();
    let postData = {
      first_name: this.nameInput.value,
      second_name: this.secondNameInput.value,
      father_name: this.fatherNameInput.value,
      date: this.dayInput.value + '.' + this.monthInput.value + '.' + this.yearInput.value,
      city: this.cityInput.value,
      gender: this.state.gender,
      fake_id: 0
    }
    this.props.onChangeSettings('/profile_change', postData)
  }
  changeGender(e){
    this.state.gender = e.target.value;
    this.setState({gender: this.state.gender})
  }
  render(){
    return(
      <div className="settingsBlock">
        <form className="settings">
          <input type="text" placeholder="Firstname"  ref={(input) => {this.nameInput = input}}/>
          <input type="text" placeholder="Secondname" ref={(input) => {this.secondNameInput = input}}/>
          <input type="text" placeholder="Fathername" ref={(input) => {this.fatherNameInput = input}}/>
          <input type="text" placeholder="City" ref={(input) => {this.cityInput = input}}/>
          <div className='gender'>
            <label onClick={this.changeGender.bind(this)}>Male: <input name='radio' type="radio" value='true'/>&#160;</label>
            <label onClick={this.changeGender.bind(this)}>Female: <input name='radio' type="radio" value='false'/>&#160;</label>
          </div>
          <div>
            <select className="selectDate" ref={(input) => {this.dayInput = input}}>
              {listDays}
            </select>
            <select className="selectDate" ref={(input) => {this.monthInput = input}}>
              {listMonths}
            </select>
            <select className="selectDate" ref={(input) => {this.yearInput = input}}>
              {listYears}
            </select>
          </div>
          <input type="submit" value="Submit" onClick={this.changeSettings.bind(this)}/>
        </form>
      </div>
    )
  }
}

export default connect(
  state =>({

  }),
  dispatch =>({
    onChangeSettings: (url, data) =>{
      dispatch(changeSettings(url, data))
    }
  })
)(SettingsBlock)

import React from 'react';
import {Component} from 'react';

class Input extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return <input type={this.props.type} className={this.props.className} ref={(input) => {this.valueInput = input}}
    placeholder={this.props.placeholder}/>
  }
}

export default Input

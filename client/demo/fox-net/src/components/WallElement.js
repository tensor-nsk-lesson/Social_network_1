import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux'

class WallElement extends Component{
  render(){
    return(
      <div className='profileWall'>
          <img src={userPhoto}/>
          <div className='profileWallText'>
            <p>{this.props.text}</p>
            <img src={userPhoto}/>
          </div>
      </div>
    )
  }
}

export default connect(
  state =>({
    text: state.wall.text
  })
)

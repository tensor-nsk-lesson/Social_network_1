import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import userPhoto from '../pics/profilePhoto.jpg'
import logo from '../pics/foxnetWhite.png'
import WallElement from './WallElement.js';

class Wall extends Component{
  constructor(props){
    super(props);
    this.state = {test: [1,2,3,4,5,6,7]}
  }
  render(){
    let wall = this.props.amountOfEl.map((item,key) =>{
      return <WallElement key={key} />
    })
    let example = this.state.test.map((item, key) =>{
      return <img key={key} src={userPhoto}/>
    });
    return(
      <div className='profileWallWrap'>
        <div className='profilePhotos'>
          {example}
        </div>
        <div className='addPost'>
          <textarea placeholder="What's up?"></textarea>
          <button>Add</button>
        </div>
        <WallElement/>
        {wall}
      </div>
    )
  }
}

export default connect(
  state => ({
    amountOfEl: state.messagesList.messages
  }),
  dispatch => ({

  })
)(Wall)

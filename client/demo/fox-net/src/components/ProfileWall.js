import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import userPhoto from '../pics/profilePhoto.jpg'
import logo from '../pics/foxnetWhite.png'
import WallElement from './WallElement.js';
import {getWall} from '../actions/wall.js'

class Wall extends Component{
  componentDidMount(){
    // this.props.onGetWall('/walls/')
  }
  render(){
    // let wall = this.state.test.map((item,key) =>{
    //   return <WallElement key={key} />
    // })
    // let example = this.state.test.map((item, key) =>{
    //   return <img key={key} src={userPhoto}/>
    // });
    return(
      <div className='profileWallWrap'>
        <div className='profilePhotos'>

        </div>
        <div className='addPost'>
          <textarea placeholder="What's up?"></textarea>
          <button>Add</button>
        </div>
        <WallElement/>
      </div>
    )
  }
}

export default connect(
  state => ({
  }),
  dispatch => ({
    onGetWall: (url) => {
      dispatch(getWall(url))
    }
  })
)(Wall)

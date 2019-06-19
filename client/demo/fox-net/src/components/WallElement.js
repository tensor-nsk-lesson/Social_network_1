import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import comment from '../pics/comment.png';
import like from '../pics/like.png';
import dislike from '../pics/dislike.png'
import {getWall} from '../actions/wall.js';
import ScrollReveal from 'scrollreveal';

class WallElement extends Component{

  componentDidMount(){
    this.props.onGetWall('/walls/7123');
  }

  render(){
    return(
      <div className='profileWall'>
          <img src={comment}/>
          <div className='profileWallText'>
            <p>Привет, я тест!</p>
            <div><img src={like}/></div>
          </div>
          <div className='assessmentButtons'>
            <button> <span>5</span> <img src={like}/> </button>
            <button> <span>0</span> <img src={dislike}/> </button>
            <button> <span>10</span> <img src={comment}/> </button>
          </div>
      </div>
    )
  }
}

export default connect(
  state =>({
    text: state.wall.text,
    image: state.wall.image,
    likes: state.wall.likes,
    dislikes: state.wall.dislikes,

  }),
  dispatch =>({
    onGetWall: (url) =>{
      dispatch(getWall(url))
    }
  })
)(WallElement)

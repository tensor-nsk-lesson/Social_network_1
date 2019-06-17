import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import userPhoto from '../pics/profilePhoto.jpg'
import logo from '../pics/foxnetWhite.png'
class Wall extends Component{
  constructor(props){
    super(props);
    this.state = {test: [1,2,3,4,5,6,7]}
  }
  render(){
    let wallExample = this.state.test.map((item,key) =>{
      return <div key={key} className='profileWall'> </div>
    });
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
        <div className='profileWall'>
            <img src={userPhoto}/>
            <div className='profileWallText'>
              <p>ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff извините кот ЕвГЕНИЙ уснул, но это хороший тест, как будут вести себя блки с постами, если он будет писать сюда поэму</p>
            </div>
        </div>
        <div className='profileWall'>
            <img src={userPhoto}/>
            <div className='profileWallText'>
              <p>Мама я в Фокснете!</p>
              <img src={logo}/>
            </div>
        </div>
        <div className='profileWall'>
            <img src={userPhoto}/>
            <div className='profileWallText'>
              <p>А куда ножимат.......</p>
            </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(Wall)

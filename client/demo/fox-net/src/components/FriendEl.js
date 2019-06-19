import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import logo from '../pics/foxnetWhite.png';
import message from '../pics/sendMessage.png';
import MessagePopup from './MessagePopup.js';

class FriendEl extends Component{
  render(){
    return(
      <React.Fragment>
      <div className='friendWrap'>
        <div className='friendInfo'>
          <img src={logo} alt='FriendPhoto'/>
          <div>
            <h3>Тест Игорь</h3>
            <span>online</span>
          </div>
        </div>
        <div className='friendButtons'>
          <button  onClick={this.props.onTogglePopup}><img src={message}/></button>
          <button>X</button>
        </div>
      </div>
      </React.Fragment>
    )
  }
}
export default connect(
  state =>({

  }),
  dispatch =>({
    onTogglePopup: () =>{
      dispatch({type: 'TOGGLE_MESSAGE_POPUP', status: 'flex'})
    }
  })
)(FriendEl)

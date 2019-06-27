import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import '../style.css';
import Header from '../components/Header.js';
import FriendEl from '../components/FriendEl.js';
import FriendSearch from '../components/FriendSearch.js';
import MessagePopup from '../components/MessagePopup.js';
import {getFriends} from '../actions/friends.js';

class Friends extends Component{
  componentDidMount(){
    this.props.onGetFriends('/friend')
  }
  render(){
    let arr = [];
    for(let i=0; i<this.props.friends.length; i++){
      arr.push(this.props.friends[i])
    }
    let friends = arr.map((item, key) => {
      console.log(item);
      return <FriendEl key={key} id={item.IdFriend} status={item.WideStatus}/>
    })
    return(
      <React.Fragment>
        <MessagePopup/>
        <Header/>
        <div className='friends'>
          <FriendSearch/>
          <div className='friendsWrap'>
            {friends}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(
  state =>({
    friends: state.friends,
    id: state.friends
  }),
  dispatch =>({
    onGetFriends: (url) =>{
      dispatch(getFriends(url))
    }
  })
)(Friends)

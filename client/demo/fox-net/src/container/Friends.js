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
  constructor(props){
    super(props);
    this.state = {test: [1,2,3,4,5,6,7,8,9,10]}
  }
  render(){
    let friends = this.state.test.map((item, key) => {
      return <FriendEl key={key}/>
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

  }),
  dispatch =>({
    onGetFriends: (url) =>{
      dispatch(getFriends(url))
    },
  })
)(Friends)

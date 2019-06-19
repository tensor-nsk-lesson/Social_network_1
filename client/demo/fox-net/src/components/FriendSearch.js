import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

class FriendSearch extends Component{
  render(){
    return(
      <div className='friendSearch'>
        <input  placeholder='Search'/>
      </div>
    )
  }
}

export default connect(
  state =>({

  }),
  dispatch =>({

  })
)(FriendSearch)

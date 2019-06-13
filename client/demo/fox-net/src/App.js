import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTracks} from './actions/tracks'

class App extends Component{
  addTrack(){
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
  }
  findTrack(){
    console.log('addTrack', this.searchInput.value);
    this.props.onFindTrack(this.searchInput.value)
  }
  render(){
    console.log(this.props.tracks)
    return(
      <div>
        <div>
          <input type="text" ref={(input) => {this.trackInput = input}} />
          <button onClick={this.addTrack.bind(this)} type="button">Add track</button>
        </div>
        <div>
          <input type="text" ref={(input) => {this.searchInput = input}} />
          <button onClick={this.findTrack.bind(this)} type="button">Find track</button>
        </div>
        <div>
          <button onClick={this.props.onGetTracks}>Get tracks</button>
        </div>
        <ul>
          {this.props.tracks.map((item,key) =>{
            return <li key={key}>{item.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
  }),
  dispatch => ({
    onAddTrack: (name)=>{
      const playload = {
        id: Date.now().toString(),
        name
      };
      dispatch({type: 'ADD_TRACK', playload})
    },
    onFindTrack: (name) =>{
      dispatch({type: 'FIND_TRACK', playload:name})
    },
    onGetTracks:()=>{
      dispatch(getTracks())
    }
  })
)(App);

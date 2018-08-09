import React from 'react';
import {connect} from 'react-redux';
import {GetTracks} from './actions/tracks'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    addTrack() {
        this.props.onAddTrack(this.trackInput.value);
    }

    deleteTrack() {
        this.props.onDeleteTrack();
    }
    findTrack(){
        this.props.onFindTrack(this.searchInput.value);
    }

    render() {
        console.log("from here", this.props.tracks);
        return (
            <div>
                <div>
                    <input ref={(input) => {
                        this.trackInput = input
                    }} type="text"/>
                    <button onClick={this.addTrack.bind(this)}>Add track</button>
                    <button onClick={this.deleteTrack.bind(this)}>Delete last</button>
                </div>
                <div>
                    <input ref={(input) => {
                        this.searchInput = input
                    }} type="text"/>
                    <button onClick={this.findTrack.bind(this)}>Find track</button>
                </div>
                <div>
                    <button onClick={this.props.onGetTracks}>Get tracks</button>
                </div>
                <ul>
                    {
                        this.props.tracks.map((track, index) => {
                            return (
                                <li key={index}>
                                    {track.trackName}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}

export default connect(
    state => ({
        tracks: state.tracks.filter(track => track.trackName.includes(state.findTrack)),
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            const payload={
                id: Date.now().toString(),
                trackName
            };
            dispatch({
                type: 'ADD_TRACK',
                payload
            })
        },
        onDeleteTrack: () => {
            dispatch({
                type: 'DELETE_TRACK'
            })
        },
        onFindTrack: (trackName) => {
            dispatch({
                type: 'FIND_TRACK',
                payload: trackName
            })
        },
        onGetTracks: ()=>{
          dispatch(GetTracks());
        }
    })
)(App);
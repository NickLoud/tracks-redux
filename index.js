import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react'
import App from './App'
import reducer from './reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
//import {Router, Route, hashHistory} from 'react-router';
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import About from './About';

/*
const initialState = {
    tracks: [
        'Smells like spirit',
        'Enter Sandman'
    ],
    playlists: [
        'My home playlist',
        'My work playlist'
    ]
};


function playlist(state = initialState, action) {
    if (action.type === 'ADD_TRACK') {
            return {
                ...state,
                tracks: [...state.tracks, action.payload],
            };
    }
    if (action.type === 'DELETE_TRACK') {
        let newStore = store.getState().tracks;
        newStore = newStore.slice(0, newStore.length - 1);
        return {
                ...state,
                tracks: newStore
        }
    }
    return state;
}
*/
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App}/>
                <Route path="/about" component={About}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("container")
);
/*
store.subscribe(() => {
    console.log('subscribed', store.getState());
    const list = document.querySelectorAll('.list')[0];
    list.innerHTML="";
    document.querySelectorAll('.trackInput')[0].value="";
    store.getState().forEach(track => {
        const li = document.createElement('li');
        li.textContent = track;
        list.appendChild(li);
    });
});

store.dispatch({
    type: 'ADD_TRACK',
    payload: 'Smells like spirit'
});
store.dispatch({
    type: 'ADD_TRACK',
    payload: 'Enter Sandman'
});

const addTrackBtn = document.querySelectorAll('.addTrack')[0];
addTrackBtn.onclick = () => {
    const trackName = document.querySelectorAll('.trackInput')[0].value;
    console.log('trackName', trackName);
    store.dispatch({
        type: 'ADD_TRACK',
        payload: trackName
    });
};

*/
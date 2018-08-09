const initialState =[];


export default function playlist(state = initialState, action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    }
    if (action.type === 'DELETE_TRACK') {
        let newState = state;
        newState = newState.slice(0, newState.length - 1);
        return [
            ...newState,
        ]
    }

    if (action.type === 'FIND_TRACK') {
        let newState = state;
        newState.filter(function(item){
           return item !== action.trackName
        });
        return [
            ...newState,
        ]
    }

    if (action.type === 'FETCH_TRACKS_SUCCESS') {
        return action.payload;
    }

    return state;
}

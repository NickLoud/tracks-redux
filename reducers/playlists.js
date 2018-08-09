const initialState =[
    'My home playlist',
    'My work playlist'
];


export default function playlist(state = initialState, action) {
    if (action.type === 'ADD_PLAYLIST') {
        return [
            ...state,
            action.payload
        ];
    }
    if (action.type === 'DELETE_PLAYLIST') {
        let newStore = store.getState();
        newStore = newStore.slice(0, newStore.length - 1);
        return [
            ...newStore,
        ]
    }
    return state;
}

let mockAPIData=[
        {
          id: 1,
          trackName: "Enter Sandman"
        },
        {
          id: 2,
          trackName: "Smells like spirit"
        },
        {
          id: 3,
          trackName: "Welcome home"
        },
        {
          id: 4,
          trackName: "One more"
        }
    ];



export const GetTracks = () => dispatch => {
        setTimeout(()=>{
            console.log("I've got tracks");
            dispatch({
                type:"FETCH_TRACKS_SUCCESS",
                payload:mockAPIData
            })
        },2000)
};
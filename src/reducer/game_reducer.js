const initialData = {
    gameName:"Football",
    playerName: "MESSI"
}

function game_reducer(state=initialData, action){
    switch(action.type){
        case "UPDATE_GAME":
            return {...state, gameName:action.payload};

            // ... -> rest operator -> maintain previous state

        case "UPDATE_PLAYER":
            return {...state, playerName:action.payload}

        default:
            return state;
    }
}

export default game_reducer;
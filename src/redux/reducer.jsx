let initialstate={
    length:0,
    passwords:[]
}

function reducer(state=initialstate,action){
    switch(action.type){
        case 'ADD_PASSWORD':
            return {...state,passwords:[...state.passwords,action.payload]};
        case 'SET_PASS_LENGTH':
            return {...state,length:parseInt(action.payload,10)};
        case 'RESET_PASSWORD':
            return {...state,passwords:[]};
        default:
            return state;
    }

}

export default reducer;
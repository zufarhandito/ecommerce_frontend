import ActionTypes from "../action/ActionTypes";

const initialState = {
    user: [],
    message: '',
    refresh: ''
}

function userReducers(state = initialState,action) {
    const { type,payload} = action;
    // console.log(payload);

    switch(type) {
        case ActionTypes.GET_USERS:
            return {state,user:payload,refresh:true};
        default:
            return state
    }
}

export default userReducers
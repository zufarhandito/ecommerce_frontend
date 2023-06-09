import ActionTypes from '../action/ActionTypes';

const initialState = {
  user: [],
  message: '',
  status: 0,
  refresh: '',
};

function userReducers(state = initialState, action) {
  const { type, payload } = action;
  // console.log(payload);

  switch (type) {
    case ActionTypes.GET_USERS:
      return {
        state,
        user: payload.data,
        status: payload.status,
        message: payload.message,
        refresh: true,
      };
    case ActionTypes.UPDATE_USER:
      return { state, message: payload.message, refresh: false };
    case ActionTypes.DEL_USER:
      return { state, message: payload.message, refresh: false };
    case ActionTypes.ADD_USER:
      return { state, message: payload.message, refresh: true };
    default:
      return state;
  }
}

export default userReducers;

import {RECEIVE_AUTH_ERRORS} from '../actions/auth_actions';
const authErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_AUTH_ERRORS:
      const newArray = state.slice();
      newArray.push(action.payload.info.message);
      return newArray;

    default:
    return state;
  }
}

export default authErrorsReducer;

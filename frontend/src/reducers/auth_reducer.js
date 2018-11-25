import {RECEIVE_CURRENT_USER} from '../actions/auth_actions';
const authReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const newObj = action.payload;
      return Object.assign({}, newObj);

    default:
    return state;
  }
}

export default authReducer;

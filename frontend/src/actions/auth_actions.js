import * as APIUtil from '../util/auth_util';

/* action types */
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_AUTH_ERRORS = 'RECEIVE_AUTH_ERRORS';

/*action creators POJO */
export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  payload: user
});

export const receiveErrors = errors => ({
  type: RECEIVE_AUTH_ERRORS,
  payload: errors
});

/* Thunk action creators */
export const login = user => async dispatch => {
  try{
    let res = await APIUtil.login(user)
    let data = await res.json();
    console.log(data);
    if(!data.success) {

        throw data;
    }
    // {
    //   user: id, username, password
    //   token: ""
    // }

    dispatch(receiveCurrentUser(data));

  } catch(e) {

    // {
    //   info: {msg: "Incorrect password"}
    //   success: false
    // }
    console.log(e,"ERROR");

        dispatch(receiveErrors(e));


  }
};


export const signup = user => async dispatch => {
  try {
    let res = await APIUtil.signup(user);
    let data = await res.json();

    if(!data.success){
      throw data;
    }
    dispatch(receiveCurrentUser(data));

  } catch(e){
    console.log(e, "ERROR auth_actions signup");
    dispatch(receiveErrors(e));
  }
}

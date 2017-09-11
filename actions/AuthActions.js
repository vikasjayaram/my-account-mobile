import Auth0 from 'react-native-auth0';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';
import params from '../auth0-params.json';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ myAuth0, email, password }) => {
  if (!email || !password) {
    return { type: LOGIN_USER_FAIL }
  }
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    myAuth0.auth.passwordRealm({ username: email, password: password, realm: params.realm })
      .then(payload => {
        loginUserSuccess(dispatch, payload)
      })
      .catch(err => {
        console.error(err);
        loginUserFail(dispatch)
      });

  };
};

const loginUserSuccess = (dispatch, payload) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: payload
  });

  Actions.home({ type: 'reset' });
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

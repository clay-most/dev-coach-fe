import axios from 'axios';
import * as types from './actionTypes';

const url = process.env.REACT_APP_BASE_URL;

export const login = (props, values) => dispatch => {
  dispatch({ type: types.LOGIN_START });
  axios
    .post(`${url}user/login`, values)
    .then(res => {
      dispatch({
        type: types.LOGIN_SUCCESSFUL,
        payload: res.data.user,
        message: res.data.message,
      });
      localStorage.setItem('token', res.data.token);
      // props.history.push('/dashboard');
    })
    .catch(err => {
      dispatch({
        type: types.LOGIN_ERROR,
        payload: err.response.data.message,
      });
    });
};

export const register = (props, values) => dispatch => {
  dispatch({ type: types.SIGN_UP });
  dispatch({ type: types.LOGIN_START });
  axios
    .post(`${url}user/register`, values)
    .then(res => {
      dispatch({ type: types.SIGN_UP_SUCCESSFUL });
      localStorage.setItem('tempuser', res.data.token);
      localStorage.setItem('id', res.data.user_id);
      props.history.push('/userrole');
    })
    .catch(err => {
      dispatch({
        type: types.SIGN_UP_ERROR,
        payload: err.response.data.message,
      });
    });
};

export const chooseUserRole = (props, values) => dispatch => {
  const token = localStorage.getItem('tempuser');
  const id = localStorage.getItem('id');
  axios
    .put(`${url}user/${id}`, {
      role_id: '1',
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  localStorage.setItem('token', token);
  localStorage.removeItem('tempuser');
  localStorage.removeItem('id');
  window.location.reload();
  dispatch({ type: types.LOGIN_SUCCESSFUL });
};
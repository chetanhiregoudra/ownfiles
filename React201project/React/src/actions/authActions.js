import axios from 'axios';
//import setAuthorizationToken from '../utils/setAuthorizationToken';
//import jwtDecode from 'jwt-decode';
import {api_url} from '../config/config';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('role');
    //setAuthorizationToken(false);
    dispatch(setCurrentUser({ }));
  }
}

// function handleResponse(response) {
//     if (response.ok) {
//       return response.json();
//     } else {
//       let error = new Error(response.statusText);
//       error.response = response;
//       throw error;
//     }
// }

export function login(userdata) {
    let logindata = {
        userId : userdata.userId,
        password: userdata.password
    };
  return dispatch => {
    
    return axios.post(`${api_url}user/login`, logindata).then(res => {
      console.log(res.data);
      localStorage.setItem('user', res.data.user.name);
      localStorage.setItem('role', res.data.user.role);
      localStorage.setItem('isAuthenticated',true );
      dispatch(setCurrentUser(res.data));
    });
  }
    
  
}

// return fetch(`${api_url}user/login`, {
    //         method: 'post',
    //         body: JSON.stringify(logindata) ,
    //         headers: {
    //         "Content-Type": "application/json"
    //         }
    //     })
    //     .then(res =>{
    //       res.json()
    //     })
    //     .then(data =>{
    //       console.log(data)
    //       localStorage.setItem('user', data.user.name);
    //       localStorage.setItem('role', data.user.role);
    //       localStorage.setItem('isAuthenticated',true );
    //       dispatch(setCurrentUser(data));
    //     } )
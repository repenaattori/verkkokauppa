import { useEffect, useState } from 'react';
import {TokenContext} from './Contexts';
import Login from './Login';
import PersonalData from './PersonalData';
import axios from 'axios';

export default function AuthorizationExample() {

  //Login information
  const [token, setToken] = useState(()=>{
    const t = sessionStorage.getItem('token');
    return t===null || t==='null' ? '' : t;
  });


  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

  //Saving token to sessionstorage if it changes
  useEffect(()=>{
    sessionStorage.setItem('token', token);
  },[token]);

  return (
    <TokenContext.Provider value={{token,setToken}}>
      {token === '' ?
        <Login/> :
        <PersonalData/>       
      }
    </TokenContext.Provider>
  );
}

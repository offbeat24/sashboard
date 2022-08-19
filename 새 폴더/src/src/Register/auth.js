import axios from 'axios';
import {useState} from 'react';

  
  export function Check({ email, password1,password2 }) {
    
    const getAuth = async() => {
      await axios.post(
        `http://ec2-54-84-166-38.compute-1.amazonaws.com:8000/users/register/`,
        {
          username: email,
          password: password1,
          password2: password2
        }
      ).then(response => {

        // setUserToken(response.data);
        console.log(response.data)
      })
    }
    getAuth();

    }
  
 
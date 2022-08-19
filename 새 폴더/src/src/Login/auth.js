import axios from 'axios';
import {useState} from 'react';
const users = [
    { email: "kim@test.com", password: "123", name: "Kim" },
    { email: "lee@test.com", password: "456", name: "Lee" },
    { email: "park@test.com", password: "789", name: "Park" },
  ];
  
  export function SignIn({ email, password }) {
    // const [userToken, setUserToken] = useState(0);
    const getAuth = async() => {
      await axios.post(
        `http://ec2-54-84-166-38.compute-1.amazonaws.com:8000/users/login/`,
        {
          username: email,
          password: password,
        }
      )
      .then(response => {
        if (response.data.token) {
          console.log(response.data.token)
          localStorage.setItem('access_token', "Token "+response.data.token);
        }
      })
    }
    getAuth();
    // console.log(userToken);
    // const user = users.find(
    //   (user) => user.email === email && user.password === password
    // )
    // console.log(user);
    // if (user === undefined) throw new Error();
    // return user;
  
  }
import React from 'react';
import axios from 'axios';

export function Create () {
    axios.post(
        `http://ec2-54-84-166-38.compute-1.amazonaws.com:8000/memo/createMemoDetail/`,
        
        {
            header: {Authorization:localStorage.getItem('access_token')},
        },
        {

            "x":3,
            "y":2,
            "w":4,
            "h":5,
            "i":"???"
        }

        
    ).then(response=>{
        console.log(response)
    })
    console.log('check_create')
    
};

export default Create;
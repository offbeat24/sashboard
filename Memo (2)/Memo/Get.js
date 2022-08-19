import React from 'react';
import axios from 'axios';

export function Get () {
    axios.get(
        `http://ec2-54-84-166-38.compute-1.amazonaws.com:8000/memo/getAllMemoDetail/`,
        {
            header:{Authorization:localStorage.getItem('access_token')}
        }
    ).then(response=>{
        if(response){
            console.log(response.data)
            // console.log('Get_Memo')

        }
    }).then(response=>{
        if(response){
            
        }

    })
    console.log('Get_Memo')

};

export default Get;
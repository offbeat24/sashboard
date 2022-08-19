import React from 'react';
import axios from 'axios';
export function Update ({title,content}) {
    // console.log(title)
    // console.log(content)
    console.log(title)
    console.log(content);
    const getAuth =async()=> {
        await axios.put(
            `http://ec2-54-84-166-38.compute-1.amazonaws.com:8000/memo/updateMemoDetail?id=7`,
            // {
            //     header:{Authorization:localStorage.getItem('access_token')}
            // },
            {
            title:title,
            content:content
            } 
            
        )
        console.log('Update_memo')
    }

    getAuth();
};

export default Update;
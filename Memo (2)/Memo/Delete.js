import React from 'react';
import axios from 'axios';

export function Delete () {
    const getAuth = async()=>{
        await axios.del(
            `http://ec2-54-84-166-38.compute-1.amazonaws.com:8000/memo/deleteMemoDetail?id=1`
        )
    }
    console.log('Delete_Memo')
};

export default Delete;
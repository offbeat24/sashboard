import React,{useState} from 'react';
import Update from './Update';
import Create from './Create';
import Get from './Get';
import Delete from './Delete';
// Create();
function Memo  () {
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    // Get();
    const Delivery_content =(title,content)=> {
        // Create();
        setTitle(title);
        setContent(content);
        // console.log(typeof(title))
        // console.log(typeof(content));
        Update({title,content});
        // // Delete()
        
    }
    return (
        <div>
            <h1>Memo</h1>
            <h3>title</h3>
            <input
                value={title}
                onChange={({ target: { value } }) => Delivery_content(value,content)}
                type="text"
            />
            <h3>content</h3>
            <input
                value={content}
                onChange={({ target: { value } }) => Delivery_content(title,value)}
                type="text"
            />
        </div>
    );
};

export default Memo;
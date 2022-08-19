import React,{useState}from 'react';
import Update from './Update';
import Create from './Create';
import Get from './Get';
import Delete from './Delete';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";

function TextInput  () {
  const [content,setContent]=useState("click");
  const [edit, setEdit] = useState(false);

  const Delivery_content =(content)=> {
    // Create();

    setContent(content);
    
    Update({content});
    // // Delete()
    
}
  const inputForm = () => {

    return(
      <>
        {/* <input  value={content}
            onChange={({ target: { value } }) => Delivery_content(value)}
            type="text">
        </input> */}
      <Form.Group className="lg-10" controlId="formBasicPassword"  >
        {/* <Row  md="auto" xs lg="2"></Row> */}
        <Form.Control  value={content}
            onChange={({ target: { value } }) => Delivery_content(value)}
            type="text" 
            style={{ width: '18rem' ,height: '18rem'}}/>
      </Form.Group>
        <Button variant="outline-dark" onClick={Set}>Save</Button>
      </>
    );
  }
  const Set =()=>{
    edit==true?setEdit(false):setEdit(true);
  }

  const outputForm = () => {
    return (
      <Card style={{ width: '18rem' ,height: '18rem'}} >
      <Card.Body>
        <Card.Text  onClick={Set}>{content}</Card.Text>
      </Card.Body>
    </Card>
    )
  }
  // const select =()=>
  // {
  //   edit===true ?inputForm():outputForm()
  // }
  // select()

  return (
    <>
      {
        edit===true ?inputForm():outputForm()
      }
    </>
  );
};

export default TextInput;
import React,{useState} from 'react';
import {Check} from './auth.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterForm = ({Signin}) => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2,setPassword2]=useState("");
  const handleClick = () => {
    try {
      const Signin = ({ email, password1,password2 }) => Check({ email, password1,password2 });
      Signin({ email, password1,password2 });

    } catch (e) {
      console.log(e)
      alert("Failed to Signin");
      setEmail("");
      setPassword1("");
      setPassword2("");
    }
  };

  // const { from } = location.state || { from: { pathname: "/" } };
  // if (authenticated) return <Navigate to={from} />;

  return (
    <>
      <h1>Register</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        type="text"
        placeholder="username" ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasixPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password1}
        onChange={({ target: { value } }) => setPassword1(value)}
        type="password"
        placeholder="password"></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasixPassword">
          <Form.Label>Password check</Form.Label>
          <Form.Control  value={password2}
        onChange={({ target: { value } }) => setPassword2(value)}
        type="password"
        placeholder="password check"></Form.Control>
        </Form.Group>
      </Form>
    
      <Button variant="outline-dark" onClick={handleClick}>Join</Button>
    </>
  );
};

export default RegisterForm;
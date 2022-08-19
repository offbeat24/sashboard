import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function LoginForm({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    try {
      login({ email, password });

    } catch (e) {
      console.log(e)
      alert("Failed to login");
      setEmail("");
      setPassword("");
    }
  };

  // const { from } = location.state || { from: { pathname: "/" } };
  // if (authenticated) return <Navigate to={from} />;

  return (
    <>
      <h1>Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        type="text"
        placeholder="username"></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="password"></Form.Control>
        </Form.Group>
      </Form>
      
      <Button variant="outline-dark" onClick={handleClick}>Login</Button>
    </>
  );
}

// function Problem({ component: Component,render, ...rest }){
//   return{

//   }

//     <LoginForm authenticated={authenticated} login={login} {...props} />
// }

export default LoginForm;
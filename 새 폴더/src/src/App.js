import React from 'react';
import Login from './Login/Login.js';
import SigninForm from './Register/RegisterForm.js';
import Memo from './Memo/Memo.js';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <SigninForm></SigninForm>
      <Login></Login>
      <Memo></Memo>
    </div>
  );
};

export default App;

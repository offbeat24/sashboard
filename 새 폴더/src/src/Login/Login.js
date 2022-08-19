import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { SignIn } from './auth';
import AuthRoute from './AuthRoute';

import Home from './Home';
// import About from './About';
import Profile from './Profile';
// import NotFound from './NotFound';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';

function Login() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ email, password }) => SignIn({ email, password });
  const logout = () => setUser(null);

  return (
    <LoginForm login={login}></LoginForm>
    // <Router>
    //   <header>
    //     <Link to="/">
    //       <button>Home</button>
    //     </Link>
    //     <Link to="/about">
    //       <button>About</button>
    //     </Link>
    //     <Link to="/profile">
    //       <button>Profile</button>
    //     </Link>
    //     {authenticated ? (
    //       <LogoutButton logout={logout} />
    //     ) : (
    //       <Link to="/login">
    //         <button>Login</button>
    //       </Link>
    //     )}
    //   </header>
    //   <hr />
    //   <main>
    //     <Routes>
    //       <Route exact path="/" element={<Home/>} />
    //       <Route
    //       path="/login"
    //       element={<LoginForm  login={login}/>}
    //       />

    //     </Routes>
    //   </main>
    // </Router>
  );
}

export default Login;
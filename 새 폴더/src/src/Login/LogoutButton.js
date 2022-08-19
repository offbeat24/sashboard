import React from "react";
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();
function LogoutButton({ logout, history}) {
  const handleClick = () => {
    logout();
    history.push("/");
  };
  return <button onClick={handleClick}>Logout</button>;
}

function Navigate(){
  const navigate=useNavigate();
  navigate(LogoutButton);
}

export default Navigate;
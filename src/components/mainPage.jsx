import { React, useState, useEffect } from 'react';
import NavigationBar from './navigationBar';
import DashBoard from './dashBoard';
import LoginPage from './logInPage';

function MainPage() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('auth-token') === null){
    // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
      console.log('isLogin ?? :: ', isLogin)
    } else {
    // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
    // 로그인 상태 변경
      setIsLogin(true)
      console.log('isLogin ?? :: ', isLogin)
    }
  }, [isLogin])

  return(
    <>
      <NavigationBar />
      {
        isLogin
        ?
        <DashBoard />
        :
        <LoginPage isLogin={isLogin}/>
      }
      
    </>
  );
}

export default MainPage;


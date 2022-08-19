import { React } from 'react';
import NavigationBar from './navigationBar';
import DashBoard from './dashBoard';
import axios from 'axios';

function MainPage() {
  return(
    <>
      <NavigationBar />
      <DashBoard />
    </>
  );
}

export default MainPage;


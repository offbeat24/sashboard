import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecoilValue } from 'recoil';
import { FontTheme } from './styledComponents'

import MainPage from './components/mainPage';
function Router() {
  return (
    <FontTheme>
      <BrowserRouter>
        <div className='pt-5'>
          <Routes>
            <Route path='/' element={<MainPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FontTheme>

  )
}

export default Router;
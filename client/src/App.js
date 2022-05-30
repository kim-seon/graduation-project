import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import MapPage from './components/MapPage/MapPage';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import TalkPage from './components/TalkPage/TalkPage';
import VolunteerPage from './components/VolunteerPage/VolunteerPage';
import ReviewPage from './components/ReviewPage/ReviewPage';
import AdoptPage from './components/AdoptPage/AdoptPage';
import FindPage from './components/FindPage/FindPage';
import Basicform from './components/WritePage/Basicform';
import Simpleform from './components/WritePage/Simpleform';
import ReadDetail from './components/ReadPage/ReadDetail';
import Auth from './hoc/auth';
import ReadPage from './components/ReadPage/ReadPage';
import AdoptDetailModal from './components/AdoptPage/AdoptDetailModal';

function App() {
  const NewMainPage = Auth(MainPage, null)
  const NewLoginPage = Auth(LoginPage, false)
  const NewRegisterPage = Auth(RegisterPage, false)
  const NewMapPage = Auth(MapPage, null)
  const NewTalkPage = Auth(TalkPage, true)
  const NewVolunteerPage = Auth(VolunteerPage, null)
  const NewReviewPage = Auth(ReviewPage, null)
  const NewAdoptPage = Auth(AdoptPage, null)
  const NewFindPage = Auth(FindPage, null)
  const NewBasicPage = Auth(Basicform, true)

  return (
    /**Suspense : 컴포넌트가 렌더링되기 전까지 로드 상태 */
    <Suspense fallback={(<div>Loading...</div>)}>
    <Router>
      {!["/login", "/register"].includes(window.location.pathname) && <NavBar /> }
        <Routes>
          <Route path='/login' element={<NewLoginPage />} />
          <Route path='/register' element={<NewRegisterPage/>} />
          <Route path='/map' element={<NewMapPage />} />
          <Route path='/community' element={<NewTalkPage/>} />
          <Route path='/volunteer' element={<NewVolunteerPage/>}/>
          <Route path='/review' element={<NewReviewPage/>}/>
          <Route path='/adopt' element={<NewAdoptPage/>}/>
          <Route path='adoptModal' element={<AdoptDetailModal />} />
          <Route path='/find' element={<NewFindPage/>}/>
          <Route path='/basicwrite' element={<NewBasicPage/>}/>
          <Route path='/simplewrite' element={<Simpleform/>}/>
          <Route path='/read/:id' element={<ReadDetail/>}/>
          <Route path='/simpleread' element={<ReadPage/>}/>
          <Route path='/' element={<NewMainPage />} />
        </Routes>
      
    </Router>
    </Suspense>
  );
}

export default App;

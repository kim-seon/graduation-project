import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import 'antd/dist/antd.css';

import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import TalkPage from './components/TalkPage/TalkPage';
import VolunteerPage from './components/VolunteerPage/VolunteerPage';
import ReviewPage from './components/ReviewPage/ReviewPage';
import AdoptPage from './components/AdoptPage/AdoptPage';
import FindPage from './components/FindPage/FindPage';
import Basicform from './WritePage/Basicform';
import Simpleform from './WritePage/Simpleform';
import ReadDetail from './components/ReadPage/ReadDetail';

function App() {
  return (
    /**Suspense : 컴포넌트가 렌더링되기 전까지 로드 상태 */
    <Suspense fallback={(<div>Loading...</div>)}>
    <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/community' element={<TalkPage/>} />
          <Route path='/volunteer' element={<VolunteerPage/>}/>
          <Route path='/review' element={<ReviewPage/>}/>
          <Route path='/adopt' element={<AdoptPage/>}/>
          <Route path='/find' element={<FindPage/>}/>
          <Route path='/basicwrite' element={<Basicform/>}/>
          <Route path='/simplewrite' element={<Simpleform/>}/>
          <Route path='/read' element={<ReadDetail/>}/>
        </Routes>
      
    </Router>
    </Suspense>
  );
}

export default App;

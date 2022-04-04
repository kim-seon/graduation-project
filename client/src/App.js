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

function App() {
  return (
    /**Suspense : 컴포넌트가 렌더링되기 전까지 로드 상태 */
    <Suspense fallback={(<div>Loading...</div>)}>
    <Router>
        <Routes>
          <Route path='/home' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage/>} />
        </Routes>
      
    </Router>
    </Suspense>
  );
}

export default App;

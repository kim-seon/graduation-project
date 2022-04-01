import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    /**Suspense : 컴포넌트가 렌더링되기 전까지 로드 상태 */
    <Router>
      
        <Routes>
          <Route path='/home' element={<MainPage />} />
        </Routes>
      
    </Router>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import VideoScreen from "./components/videoScreen/VideoScreen";
import PromoScreen from "./components/promoScreen/PromoScreen";
import FinalScreen from './components/finalScreen/FinalScreen';

import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VideoScreen />} exact />
          <Route path='/promo' element={<PromoScreen />} exact />
          <Route path='/final' element={<FinalScreen />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
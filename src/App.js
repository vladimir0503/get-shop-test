import React from 'react';
import useNawArrows from './hooks/useNawArrows';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Context } from './Context';
import VideoScreen from "./components/videoScreen/VideoScreen";
import PromoScreen from "./components/promoScreen/PromoScreen";
import FinalScreen from './components/finalScreen/FinalScreen';

import './App.scss';

const App = () => {
  const { indexBtn, setBtnIndex } = useNawArrows();

  return (
    <div className="App">
      <Context.Provider value={[indexBtn, setBtnIndex]}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<VideoScreen />} exact />
            <Route path='/promo' element={<PromoScreen />} exact />
            <Route path='/final' element={<FinalScreen />} exact />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
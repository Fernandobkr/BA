//import React, { useState } from 'react';
import Quiz1 from './Components/Quiz1';
import Quiz2 from './Components/Quiz2';
import Level1 from './Levels/Level1';
import Level2 from './Levels/Level2';
import Level3 from './Levels/Level3';
import { StartScreen } from './StartScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Quiz3 from './Components/Quiz3';
import Credits from './Credits';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<StartScreen />} />
        <Route path='/level1' element={<Level1 />} />
        <Route path='/quiz1' element={<Quiz1 />} />
        <Route path='/level2' element={<Level2 />} />
        <Route path='/quiz2' element={<Quiz2 />} />
        <Route path='/level3' element={<Level3 />} />
        <Route path='/quiz3' element={<Quiz3 />} />
        <Route path='/credits' element={<Credits />} />
      </Routes>
    </Router>
    );
}

export default App;
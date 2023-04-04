import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import CreateMeeting from './pages/CreateMeeting';

function App() {


  return (
    <div>
      
      <BrowserRouter >
      <Sidebar  />
      <Routes>
            <Route 
              path="/" 
              element={ <Home/> } 
            />

            <Route 
              path="/createmeeting" 
              element={ <CreateMeeting/> } 
            />

      </Routes>

      </BrowserRouter>



    </div>
  );
}

export default App;

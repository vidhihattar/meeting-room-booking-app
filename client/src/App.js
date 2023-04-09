import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home';
import CreateMeeting from './pages/CreateMeeting';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuthContext } from './hooks/useAuthContext';


function App() {
  const {user} = useAuthContext();

  return (
    <div>

      <BrowserRouter >
      {
        user && <Sidebar />
      }
        
        <Routes>
          <Route
            path="/"
            element={user? <Home />: <Navigate to="/login"/>} 
          />

          <Route
            path="/createmeeting"
            element={user? <CreateMeeting />: <Navigate to="/login"/>}
          />

          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />} 
            />

      </Routes>

      </BrowserRouter>



    </div>
  );
}

export default App;

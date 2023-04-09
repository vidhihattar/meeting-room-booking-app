import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MeetingsContextProvider } from './context/MeetingsContext';
import { AuthContextProvider } from './context/AuthContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MeetingsContextProvider>
        <App />
      </MeetingsContextProvider>

    </AuthContextProvider>


  </React.StrictMode>
);


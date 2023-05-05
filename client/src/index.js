import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MeetingsContextProvider } from './context/MeetingsContext';
import { AuthContextProvider } from './context/AuthContext'
import { MomContextProvider } from './context/MomContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MeetingsContextProvider>
      <MomContextProvider>


          <App />
          </MomContextProvider>
 

        
      </MeetingsContextProvider>

    </AuthContextProvider>


  </React.StrictMode>
);


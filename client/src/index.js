import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MeetingsContextProvider } from './context/MeetingsContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <MeetingsContextProvider>
  <App />
  </MeetingsContextProvider>
   
  </React.StrictMode>
);


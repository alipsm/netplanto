import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter as Router } from "react-router-dom";
import App from './App';
import "./assets/css/index.css"
import { GoogleOAuthProvider } from '@react-oauth/google';

const googleClientId = process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>
      <Router>
        <App />
      </Router>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

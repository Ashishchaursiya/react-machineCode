import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for ReactDOM
import './index.css'; // Import Tailwind CSS
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
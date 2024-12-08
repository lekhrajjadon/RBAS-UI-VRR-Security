import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Importing Tailwind CSS styles

// React 18+ uses createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

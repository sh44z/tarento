import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const githubPagesUrl = 'https://sh44z.github.io/tarento/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={githubPagesUrl}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  
)

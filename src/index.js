// 👉 Importing React libs from node_modules folder
import React from 'react'
import { render } from 'react-dom'

// 👉 Importing React Router's Router
import { BrowserRouter as Router } from 'react-router-dom'


// 👉 Importing the top-level component
import App from './components/App'

render(
  <Router>
    <App />
  </Router>
  , document.querySelector('#root')
)

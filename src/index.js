// 👉 Importing React libs from node_modules folder
import React from 'react'
import { render } from 'react-dom'

// 👉 Importing React Router's Router


// 👉 Importing the top-level component
import App from './components/App'

render(
  <App />
  , document.querySelector('#root')
)

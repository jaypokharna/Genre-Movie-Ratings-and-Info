/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
  <Provider store={store}>
  <App />
  <div><Toaster/></div>
  </Provider>
  </>  
  //</React.StrictMode>
)

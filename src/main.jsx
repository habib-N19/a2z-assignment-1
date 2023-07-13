import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import CirclesProvider from './providers/CircleProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CirclesProvider>
      <RouterProvider router={router} />
    </CirclesProvider>
  </React.StrictMode>
)

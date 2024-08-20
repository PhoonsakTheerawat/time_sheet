import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Register from './test/Register.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },

  {
    path:"/register",
    element:<Register />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

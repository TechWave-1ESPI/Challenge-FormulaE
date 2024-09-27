import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './routes/Home.jsx'
import Teams from './routes/Teams.jsx'
import Error from './routes/Error.jsx'
import Rules from './routes/Rules.jsx'
import Ecology from './routes/Ecology.jsx'
import Drivers from './routes/Drivers.jsx'
import GlobalStyle from './css/GlobalStyle.jsx'
import Login from './routes/Login.jsx'
import Subscribe from './routes/Subscribe.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App/>,
    errorElement: <Error/>,

    children:[
      {path: '/', element: <Home/>},
      {path: '/ecology', element: <Ecology/>},
      {path: '/teams', element: <Teams/>},
      {path: '/drivers', element: <Drivers/>},
      {path: '/rules', element: <Rules/>},
      {path: '/login', element: <Login/>},
      {path: '/subscribe', element: <Subscribe/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router} />
  </StrictMode>,
)

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
import Usuario from './routes/Usuario.jsx'
import ETv from './routes/ETv.jsx'

// Teams Imports
import Andretti from './routes/teams/Andretti.jsx'
import Cupra from './routes/teams/Cupra.jsx'
import Envision from './routes/teams/Envision.jsx'
import Ert from './routes/teams/Ert.jsx'
import Jaguar from './routes/teams/Jaguar.jsx'
import Mahindra from './routes/teams/Mahindra.jsx'
import Maserati from './routes/teams/Maserati.jsx'
import Mclaren from './routes/teams/Mclaren.jsx'
import Nissan from './routes/teams/Nissan.jsx'
import Penske from './routes/teams/Penske.jsx'
import Porsche from './routes/teams/Porsche.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App/>,
    errorElement: <Error/>,

    children:[
      // Nav Pages
      {path: '/', element: <Home/>},
      {path: '/ecology', element: <Ecology/>},
      {path: '/teams', element: <Teams/>},
      {path: '/drivers', element: <Drivers/>},
      {path: '/rules', element: <Rules/>},
      {path: '/login', element: <Login/>},
      {path: '/usuario', element: <Usuario/>},
      {path: '/etv', element: <ETv/>},
      // Teams Page
      {path: '/andretti', element: <Andretti/>},
      {path: '/cupra', element: <Cupra/>},
      {path: '/envision', element: <Envision/>},
      {path: '/ert', element: <Ert/>},
      {path: '/jaguar', element: <Jaguar/>},
      {path: '/mahindra', element: <Mahindra/>},
      {path: '/maserati', element: <Maserati/>},
      {path: '/mclaren', element: <Mclaren/>},
      {path: '/nissan', element: <Nissan/>},
      {path: '/penske', element: <Penske/>},
      {path: '/porsche', element: <Porsche/>},

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router} />
  </StrictMode>,
)

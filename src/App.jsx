import { Outlet, useLocation } from "react-router-dom"
import Nav from './components/Nav'

function App() {
  const location = useLocation();

  const isDashboardPage = location.pathname === "/dashboard";

  return (
    <>
      {!isDashboardPage && <Nav/>}
      {/* <Nav/> */}
      <Outlet/>
    </>
  )
}

export default App

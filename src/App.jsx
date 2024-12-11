import React , {useEffect} from 'react'
import Login from "./components/Auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage } from "./utils/localStorage.jsx";

const App = () => {

  // main  stack  ka side ma function chalana ka kam  karta ha 
  useEffect(() => {
  //  setLocalStorage()
   getLocalStorage()
  });
  return (
    <>
  <Login />
    {/* In Component Auth Login add */}
  {/* <EmployeeDashboard />  */}
  {/* <AdminDashboard /> */}
    </>
  )
}

export default App

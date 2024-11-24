import React from 'react'
import Header from '../../others/header'    
import CardTask from '../../others/CardTask'    
import EmployeeDashboardTaskList from '../../others/EmployeeDashboardTaskList'
const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen '>
     <Header />
     <CardTask />
     <EmployeeDashboardTaskList />
    </div>
  )
}

export default EmployeeDashboard

import React from "react";
import Header from "../../others/header"
import AdminForm from "../../others/AdminForm";
import AdminDashboardAllTask from "../../others/AdminDashboardAllTask"


const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-7">
      <Header />
       <AdminForm />  
     <AdminDashboardAllTask />
    </div>
  );
};

export default AdminDashboard;

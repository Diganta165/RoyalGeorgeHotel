import React from 'react';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import { Outlet } from 'react-router-dom';

const DashboardSidebarContent = ({title, Children, handlePage}) => {

    //  const loadDashboardPageContent = (pageTitle) =>{

    //     pageTitle == "Pages" &&  <Outlet />
    //     console.log("hi")
        
    // }
    return (
        <div className='admin-info flex justify-center rounded-full items-center bg-slate-50 w-52  p-4 cursor-pointer' onClick={() => handlePage("hi")}>
            <div className='text-black wrap-anywhere font-semibold'>{title}</div>
        </div>
    );
};

export default DashboardSidebarContent;
import React from 'react';
import DashboardSidebarContent from '../DashboardSidebarContent/DashboardSidebarContent';

const DashboardSidebar = (props ) => {
    const {sideBarContents, handlePage} = props;

   
    return (
        // <div className='admin-info flex justify-center rounded-full items-center bg-slate-50 w-52  p-4'>
        //     <div className='text-black wrap-anywhere font-semibold'>admin@gmail.com</div>
        // </div>

        <>
            {
                // sideBarContents.map((sidebarContent, i)=> <DashboardSidebarContent key = {i}/>)
                // eslint-disable-next-line react/prop-types
                sideBarContents.map((sidebarContent, i) => (
                    <DashboardSidebarContent key={i} title={sidebarContent.title} Children={sidebarContent.Children} handlePage= {()=>handlePage()} />
                ))
                
            }
        </>
    );
};

export default DashboardSidebar;
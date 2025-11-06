import React, { Children, useState } from 'react';
import RecordList from '../../components/RecordList';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar';

const Dashboard = () => {
    //  // which panel is active
    // const [activeMenu, setActiveMenu] = useState("home");

    // // collapsible state for Pages
    const [isPagesOpen, setIsPagesOpen] = useState(false);

    const handlePage =(title) =>{
        setIsPagesOpen(!isPagesOpen);
        console.log("isPagesOpen", isPagesOpen)
        console.log("title", title)
    }

    const sideBarContents = [
        { title: "Home", Children: [] },
        {
            title: "Pages", Children: [
                { title: "Home", path: "/home" },
                { title: "Bar", path: "/bar" },
                { title: "", path: "/bar" },
            ]
        },
        {
            title: "Bookings", Children: [
                { title: "Table Booking" },
                { title: "Room Booking" },
                { title: "Function Booking" },
            ]
        },
    ];

    const titleImages = [
        { title: "logo_face", src: "https://i.ibb.co/8nDbxxW5/rg-logo-face.png" },
        { title: "logo_name", src: "https://i.ibb.co/VWn6pycC/rg-logo-name.png" },
    ];

    return (
        <>
            <div className="flex items-start">
                <aside className="sidebar flex flex-col w-64 gap-6">
                    <div className='logos flex justify-between bg-[#ffef3d]'>
                        {titleImages.map((item, i) => {
                            return (
                                <img className='w-full' key={i} src={item.src} alt={item.title} />
                            )
                        })}
                    </div>

                    <div className='flex flex-col w-64 gap-6 items-center'>
                        <div className='admin-info flex justify-center rounded-full items-center bg-slate-50 w-52  p-4'>
                            <div className='text-black wrap-anywhere font-semibold'>admin@gmail.com</div>
                        </div>
                        <DashboardSidebar sideBarContents={sideBarContents} handlePage= {()=>handlePage()} />
                    </div>
                </aside>
                <div className="main-content">
                    {isPagesOpen && <Outlet />}
                </div>
            </div>
        </>
    );
}


export default Dashboard;
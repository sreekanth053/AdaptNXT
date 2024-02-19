import React from 'react'
// import { GoSidebarExpand } from "react-icons/go";
// import { GoSidebarCollapse } from "react-icons/go";
// import { IoIcons } from 'react-icons/io';
import { AiOutlineDashboard } from "react-icons/ai";
import { CiShoppingTag } from "react-icons/ci";
import { RiListUnordered } from "react-icons/ri";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoMdShare } from "react-icons/io";


export const SidebarData=[
    {
        title:'Dashboard',
        path:"/dashboard",
        icon:<AiOutlineDashboard />,
        cName:'nav-text'
    },
    {
        title:'Inventory',
        path:'/inventory',
        icon:<CiShoppingTag />,
        cName:'nav-text'
    },
    {
        title:'Orders',
        path:'/',
        icon:<RiListUnordered />,
        cName:'nav-text'
    },
    {
        title:'Shipping',
        path:'/shipping',
        icon:<MdOutlineLocalShipping />,
        cName:'nav-text'
    },
    {
        title:'Channel',
        path:'/channel',
        icon:<IoMdShare />,
        cName:'nav-text'
    },
]
import { createBrowserRouter } from "react-router";
import { Suspense } from "react";
import MainLayout from "../Layout/MainLayOut";
import TimeLine from "../Pages/TimeLine";
import HomePage from "../Pages/HomePage";
import States from "../Pages/States";
import ErrorPage from "../Pages/ErrorPage";
import FriendsDetails from "../FriendsDetails/FriendsDetails";

export const router =createBrowserRouter([
  {
    path:'/',
    Component:MainLayout,
    children:[
        {
            index:true,
            element:<Suspense fallback={<div className="flex justify-center mt-20">Loading...</div>}><HomePage /></Suspense>

        },
        {
           path:'/friends/:id',
           Component: FriendsDetails
        },
        {
            path:'/timeline',
            Component:TimeLine
        },
        {
            path:'/states',
            Component:States

        },
    
    ],

    errorElement:<ErrorPage></ErrorPage>
  }

])
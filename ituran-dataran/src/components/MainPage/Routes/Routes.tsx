import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Dashboards from '../Pages/Dashboards/Dashboards';
import Reports from '../Pages/Reports/Reports';
import Settings from '../Pages/Settings/Settings';
import PageContainer from '../PageContainer/PageContainer';

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <PageContainer />,
            children: [
                {path: "", element: <Home />},
                {path: "/dashboards/:data", element: <Dashboards />},
                {path: "/reports", element: <Reports />},
                {path: "/settings", element: <Settings />},
            ]
        }
    ],
    {
        basename: "/ituran-dataran",
    }
);
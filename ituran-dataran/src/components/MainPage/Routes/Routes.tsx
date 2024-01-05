import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Dashboards from '../pages/Dashboards/Dashboards';
import Reports from '../pages/Reports/Reports';
import Settings from '../pages/Settings/Settings';
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
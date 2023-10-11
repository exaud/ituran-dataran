import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import Dashboards from '../pages/dashboards';
import Reports from '../pages/reports';
import Settings from '../pages/settings';
import PageContainer from '../pageContainer';

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
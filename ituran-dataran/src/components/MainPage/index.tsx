import React from 'react'
import { RouterProvider } from 'react-router-dom'
import "@fontsource/nunito-sans";
import { router } from './Routes/Routes';


function MainPage() : JSX.Element {
    return (
        <div>
           <RouterProvider router={router}/>
        </div>
    );
  };

export default MainPage


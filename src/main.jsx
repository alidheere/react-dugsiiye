import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import { RouterProvider } from 'react-router';

import { AuthProvider } from './login page/Authcontext';
import router from './Router';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

<RouterProvider router={router}/>

    </AuthProvider>

  </StrictMode>,
)

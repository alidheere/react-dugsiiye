
import { createBrowserRouter } from 'react-router';
import App from './App'
import Dashbrod from './login page/Dashbrod';
import Login from './login page/Login';
import ProtectedRoute from './login page/ProtectedRoute';


const router= createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
               
                {
                    path: 'dashbrod',
                    element: (
                        <ProtectedRoute element={<Dashbrod/>}/>
                    )
                },
                {
                    path: 'login',
                    element: <Login/>
                }
        ]
    }
])

export default  router;
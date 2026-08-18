
import { createBrowserRouter } from 'react-router';
import App from './App'
import Dashbrod from './login page/Dashbrod';
import Login from './login page/Login';
import ProtectedRoute from './login page/ProtectedRoute';
import Cources from './login page/Cources';


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
                },
                {
                    path: 'cources',
                    element:(
                        <ProtectedRoute element={<Cources/>}/>
                    )
                }
        ]
    }
])

export default  router;
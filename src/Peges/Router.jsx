
// import { createBrowserRouter } from 'react-router-dom';
// import App from '../App'

// import Login from '../login page/Login';
// import ProtectedRoute from '../login page/ProtectedRoute';

// import Home from '../login page/Home';
// import NotFound from '../login page/NotFound';
// import PostDtail from '../login page/PostDtail';
// import CreatedPost from '../login page/CreatedPost';


// const router= createBrowserRouter([
//     {
//         path:"/",
//         element:<App/>,
//         errorElement: <NotFound/>,
//         children:[
               
//                 {
           
//                            index: true,
//                     element: <Home/>,
                    
//                 },
//                 {
//                     path: 'posts/:postId',
//                         element: <PostDtail/>
//                 },
//                 {
//                     path: 'create',
//                     element: (
//                             <ProtectedRoute>
//                                 <CreatedPost/>
//                             </ProtectedRoute>
//                     )
//                 },
//                 {
//                     path: 'login',
//                     element: <Login/>
//                 },
            
//         ]
//     }
// ])

// export default  router;
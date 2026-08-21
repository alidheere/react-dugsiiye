

import { createBrowserRouter } from "react-router-dom"


import Home from "./pages/Home"

import { Categories} from "./pages/Categories"
import RecipeDeteils from "./components/RecipeDeteils"

import CategoriesDeteils from "./components/CategoriesDeteils"
import App from "../../App"
import { Recipes } from "./pages/Recipes"


 export const router=createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: "recipes",
                element: <Recipes/>
            },
            {
                path: "categories",
                element: <Categories/>
            },
              {
                path: "recipes/:id",
             element: <RecipeDeteils/>
            },
            {
             path: "category/:id",
                element: <CategoriesDeteils/>
            }
      
        ]


    }
])

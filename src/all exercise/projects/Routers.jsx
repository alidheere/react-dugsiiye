

import { createBrowserRouter } from "react-router"

import { Children } from "react"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import Categories from "./pages/Categories"
import RecipeDeteils from "./components/RecipeDeteils"
import CategoriesDeteils from "./components/CategoriesDeteils"
import App from "../../App"

const routers=createBrowserRouter([
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
                path: 'categories/:id',
                element: <CategoriesDeteils/>
            }
      
        ]


    }
])
export default routers;
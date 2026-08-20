import { createContext, useState } from 'react'
export const PostContext= createContext();

 export const PostProvider = ({children}) => {
    
    const [posts, setPosts]= useState([
        { 
    id: 1, 
    title: 'Getting Started with JavaScript', 
    content: 'Learn the basics of JavaScript and how it works.' 
  },
  { 
    id: 2, 
    title: 'Introduction to Tailwind CSS', 
    content: 'Learn how to build modern interfaces using Tailwind CSS.' 
  },
  { 
    id: 3, 
    title: 'Understanding React Components', 
    content: 'Learn how React components work and how to reuse them.' 
  }

    ]);

    const addPost=(post)=>{
        setPosts((prevPosts)=> [...prevPosts,{...post, id: prevPosts.length +1}])

    }
  return (
    <PostContext.Provider value={{posts, addPost}}>
{children}
    </PostContext.Provider>

  )
}

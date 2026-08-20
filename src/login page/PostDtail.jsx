import React, { useContext } from 'react'
import { PostContext } from './PostContext';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const PostDtail = () => {

const {posts}=useContext(PostContext)
const {postId}=useParams()
const navigate= useNavigate()
const location = useLocation()
  const currentId = parseInt(postId);
  const post = posts.find((p) => p.id === currentId);
if(!post){
    return <p> post not found</p>
}
const handleNavigation=(diraction)=>{
    const newId= diraction === "next" ? currentId +1 : currentId-1;
       const newPost = posts.find((p) => p.id === newId);
       if(newPost){
        navigate(`/posts/${newId}`,{
                    state: { fromPostId: currentId },
        })
       }
}

    return (
    <div className='max-w-md mx-auto mt-5 p-5 bg-white rounded-lg shadow-md'>
        <h2> {post.title}</h2>
        <p> {post.content}</p>
        <button onClick={()=> handleNavigation('prev')} className='bg-blue-500 text-white mx-2 font-medium'> previos</button>
        <button onClick={()=> handleNavigation('next')} className='bg-blue-500 text-white font-medium'> next</button>
        {
            location.state &&(
                <p> You navigated here from post ID: {location.state.fromPostId}</p>
            )
        }

    </div>
  )
}

export default PostDtail;


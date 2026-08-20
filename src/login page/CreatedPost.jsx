import React, { useContext, useState } from 'react'
import { PostContext } from './PostContext';
import { useNavigate } from 'react-router-dom';

const CreatedPost = () => {
  const {addPost}=useContext(PostContext)
  const [title, setTitle]= useState('')
  const [content, setContent]= useState('')
  const navigate= useNavigate()

  const hanleSubmit=(e)=>{
        e.preventDefault();
        addPost({title, content})
        navigate('/')

  }
  return (
    <div className='max-w-md mx-auto mt-5 p-5 bg-white rounded-lg shadow-md'>
      <h2> create a new post</h2>
      <form onSubmit={ hanleSubmit}>
        <div>
          <label>

        title {''}
        <input type="text"
        value={title} 
        onChange={(e)=> setTitle(e.target.value)}
        required
        className='border-2 rounded-xl p-2'
        />

          </label>

          <div>
            <label>

          
            content
         <textarea value={content}
         
         onChange={(e)=> setContent(e.target.value)}
         required className='border-2 rounded-xl p-2 mt-2 '>


         </textarea>
           </label>
          </div>
        </div>
        <button type='submit' className='bg-blue-600 text-white rounded-xl p-2 w-full'> create post</button>

      </form>

    </div>
  )
}

export default CreatedPost;

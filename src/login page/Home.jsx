// import React, { useContext } from 'react'
// import { PostContext } from './PostContext';
// import { useLocation, useSearchParams } from 'react-router-dom';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//   const {posts}=useContext(PostContext)
//   const location=useLocation()
//   const query= new URLSearchParams(location.search)
//   const [searchParams, setSearchParams] =
//     useSearchParams();
// const searchTerm = query.get("search") || "";
//   const filteredPosts = posts.filter((post) =>
//     post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//   post.content.toLowerCase().includes(searchTerm.toLowerCase())
  
//   );
//   const handleSearch = (e) => {
//   e.preventDefault();

//   const value = e.target.search.value;

//   setSearchParams({
//     search: value,
//   });
// };
//   return (
//     <div className='max-w-md mx-auto mt-5 p-5 bg-white rounded-lg shadow-md mt-4 '>

//       <h2 className='text-xl font-bold'> blog post</h2>
//       <form onSubmit={handleSearch}>
//         <input type="text"
//         name='search'
//         placeholder='search post' 
//         defaultValue={searchTerm} className='max-w-md mx-auto p-2 rounded-xl border-2 '/>
//         <button type='submit' className="bg-blue-500 text-white nax-w-md p-2 rounded-xl mx-4"> search</button>
//       </form>
    

//        <ul className="mt-5">
//   {filteredPosts.length === 0 ? (
//     <li className="text-red-500 font-medium">
//       No posts found.
//     </li>
//   ) : (
//     filteredPosts.map((post) => (
//       <li key={post.id} className="mb-3">
//         <Link
//           to={`/posts/${post.id}`}
//           className="text-blue-500 underline p-2 "
//         >
//           {post.title}
//         </Link>
//       </li>
//     ))
//   )}
// </ul>
//     </div>
//   )
// }

// export default Home;

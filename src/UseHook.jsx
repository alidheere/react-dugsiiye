
import UseFetch from "./assets/UseFetch";

import React from 'react'

const DisplayData = () => {
    const {Data, loading, error}=UseFetch('https://api.github.com/users/omartood')
  return (
    <div>DisplayData 
        <h2>       {Data.name} </h2>
        <img src={Data.avatar_url} alt="omar" />
        <p> folorwes {Data.followers}</p>
    </div>
  )
}

export default DisplayData;
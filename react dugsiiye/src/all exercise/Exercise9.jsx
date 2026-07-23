import { useState,useEffect } from "react";


const Githubuser=()=>{

 const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
const [error,setError]= useState('')

useEffect(()=>{
           if (error) {
      console.error('Error fetching GitHub user:', error);
    }

    },[error])
    const haldesearch= async()=>{
   if(!searchTerm) return
    setLoading(true);
    setError('');
    setUserData(null);
        try{
            await new Promise((resolve) => setTimeout (resolve,1000))
                
        
            const response= await fetch(`https://api.github.com/users/${searchTerm.toLowerCase()}`)

             if (!response.ok) {
        throw new Error('GitHub user not found');
      }

            const data= await response.json()
            setUserData(data)
        }catch(error){
            setError(error.message)
        }finally{
            setLoading(false)
        }
       
    }
   


return(
<div>
<input type="text" placeholder="inter githup username"
 onChange={(e)=> setSearchTerm(e.target.value)}
 value={searchTerm}/>
<button onClick={haldesearch}> search</button>
{loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {userData &&(
        <div style={{marginTop: '1.5rem'}}>
            <h3> {userData.name || userData.login}</h3>
                  <img
            src={userData.avatar_url}
            alt={userData.login}
            width="100"
            style={{ borderRadius: '50%' }}
          />
          <p> followers {userData.followers}</p>
          <p> following {userData.following}</p>
    
            </div>
      )}
        

      


</div>
)

}
export default Githubuser;
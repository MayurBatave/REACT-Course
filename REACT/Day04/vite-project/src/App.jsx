import { useState } from 'react'
import { useEffect } from 'react';

function App(){
  const [ users , setUser ] = useState([]);
  const [ count , setCount ] = useState(30);
  
  useEffect( ()=>{
    async function getProfile(){
    const response = await fetch(`https://api.github.com/users?per_page=${count}`);
    const data = await response.json();
    setUser(data);
    console.log("hello")
  }
  getProfile();


  } , [count] );


  return (
    <>
      <h2 style={{ textAlign : "center"}}>GitHub Profile Images</h2>
      <input type="number" placeholder='Enter Qunatity' value={count} onChange={(e)=>setCount(e.target.value)} style={{ display :"block" , margin :'10px auto'}}/>
      <div style={{ display:"flex", flexWrap :"wrap" , gap:"10px"}}>
        {
          users.map(user=>(
            <img src={user.avatar_url} key={user.login} style={{ height:"100px", width : "100px" }} />
          ))
        }
      </div>
      
    </>
  )
}

export default App;
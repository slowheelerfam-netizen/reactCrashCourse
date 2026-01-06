import React, { useEffect, useState } from "react"
import axios from 'axios'
import User from "../components/Users.jsx"
import { Link } from "react-router-dom"

// Below Mod5 1.9 @ 9:04)
function Home() {
    const [users, setUsers] = useState([])

    async function fetchUsers() {
     const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`)
       setUsers(data) 
       console.log(data)
    }
    useEffect (() => {  
        setTimeout(() => {
        fetchUsers();
        }, 2000); 
    }, []);

function renderUsers() {
    return users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id}>
        <User
            id={user.id} 
            name={user.name} 
            email={user.email}
            username={user.username}
        />
        </Link>
        ))
}

function renderSkeletonLoading() {
    return <h1>Loading...</h1>
}
    return (
        <div>
           {users.length ? renderUsers() : renderSkeletonLoading()} 
      </div>     
     );
    }
       
    
export default Home;

// below is the code for the begining seg of Mod5 1.9
// function Home() {
//     const [user, setUsers] = useState([])

//     async function fetchUsers() {
//      const { data } = await axios.get("https://jsonplaceholder.typicode.com/user") 
//        setUsers(data) 
//     }
//     useEffect (() => {   
//         fetchUsers(); 
//     }, []) 
//     return (
//     <div>
//         {user.length >//         [] <h1>{user[].name}</h1>
//         : <h1>Loading.....</h1>
//       }
//     </div>
//     );
// }  export default Home 
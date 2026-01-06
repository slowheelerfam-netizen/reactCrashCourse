import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Users() {
    const { id } = useParams()
    const [user, setUser] = useState({})
    
    async function fetchUser() {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users${id}`)
      setUser(data)
      console.log(data)
    }
useEffect(() => {
    fetchUser()
}, []);

    return  (
        <div>
            <p>{ user.id }</p>
            <p>{ user.name }</p>
            <p>{ user.email }</p>
            <p>{ user.username }</p>
        </div>
    )
}
export default Users  

// function Users() {
//     const { username } = useParams()
//     useEffect(() => {
//         // 2. Add 'username' to the dependency array so it re-runs on URL changes
//         if (username) {
//             console.log("Fetching for:", username);
//             // fetch(`https://api.instagram.com/${username}`)
//         }
//     }, [username]); 

//     // 3. Render using the variable you defined above
//     return <p>'${Users.id}' {username}</p>;
// }
// export default Users  
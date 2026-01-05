import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react';

function Users() {
    const { username } = useParams()
    useEffect(() => {
    //fetch(`https://api.instagram.com/${username}`) //example only
}, [])
    console.log(username)
    return <h1>Username</h1>
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
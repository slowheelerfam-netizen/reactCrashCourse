import { Link, useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Counter from '../components/Counter.jsx';

function Users() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        async function fetchUserAndPosts() {
            try {
                const { data: userData } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                setUser(userData);
                const { data: postsData } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
                setPosts(postsData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchUserAndPosts();
    }, [id]);

    function handleIncrement() {
        const newId = parseInt(id, 10) + 1;
        navigate(`/users/${newId}`);
    }

    function handleDecrement() {
        const newId = parseInt(id, 10) - 1;
        if (newId > 0) {
            navigate(`/users/${newId}`);
        }
    }

    return (
        <div>
            <Link to="/">Go Back</Link>
            {loading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>User not found</h1>
            ) : (
                <div className="user-details-wrapper">
                    <div className="counter-wrapper">
                        <Counter 
                            count={id}
                            onIncrement={handleIncrement}
                            onDecrement={handleDecrement}
                        />
                    </div>
                    <div className="user-details-content">
                        <h1>{user.name}</h1>
                        <h2>{user.username}</h2>
                        <div>
                            <h3>Posts</h3>
                            {posts.map(post => (
                                <div key={post.id} className="post">
                                    <h4>{post.title}</h4>
                                    <p>{post.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
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
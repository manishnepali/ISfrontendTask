import { useEffect, useState } from 'react';
import Post from './Post';

function PostList() {
	 const [posts, setPosts] = useState([]);
   useEffect(()=>{
    const fetchData = async () =>{
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await data.json();
        setPosts(json);
    }
    fetchData()
    .catch(console.error);
   }, [])
   return (
   <div>
     
   { posts.map((post) => { return <div>
    <p key={post.id}> {post.title}</p> <button>view</button>
   </div>}) 
}

    </div>
    )
    

   
}

export default PostList;
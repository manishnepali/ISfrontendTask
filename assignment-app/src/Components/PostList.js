import { useEffect, useState } from 'react';
import Comments from './Comments';

function PostList({}) {
	 const [posts, setPosts] = useState([]);
     const [search, setSearch] = useState([]);
     const [select, setSelect] = useState();
     const [detail, setDetail] = useState(false);
     
   useEffect(()=>{

    const fetchData = async () =>{
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await data.json();
        setPosts(json);
    }
    fetchData()
    .catch(console.error);
   }, [])

   function getPost(e){
    setSelect(e.target.value);
    console.log(e.target.value)
  
     setDetail(true);
  
  
    }
   return (
   <div>
     { detail ? <div>
        <Comments posts={posts} select={select}/>
     </div>:
     <div>
   { posts.map((post, index) => { return <ul id="post">
   <li  key={index} > <p> {post.title}</p> <button value={post.id} onClick={getPost} >view</button></li>
   </ul>}) 
}</div>
}
    </div>
    )
    

   
}

export default PostList;
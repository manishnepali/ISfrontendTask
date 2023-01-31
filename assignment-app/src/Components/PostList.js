import { useEffect, useState } from 'react';
import Detail from './Detail';

function PostList({}) {
	 const [posts, setPosts] = useState([]);
     const [search, setSearch] = useState("");
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

    function closeBtn() {
        setDetail(false);
       }

    console.log(search);
   return (
   <div>
     { detail ? <div>
        <button onClick={closeBtn}>close</button>
        <Detail posts={posts} select={select} detail={detail}/>
     </div>:
     <div>
    <form>
    <input type="text" id="sBar" name="sBar"
    onChange={(e) => setSearch(e.target.value)}></input>
    </form>
   { posts.filter((item)=> {
    return search === ''
        ? item
        : item.title.includes(search);
   }).map((post, index) => { return <ul id="post">
   <li  key={index} > <p> {post.title}</p> <button value={post.id} onClick={getPost} >view</button></li>
   </ul>}) 
}</div>
}
    </div>
    )
    

   
}

export default PostList;
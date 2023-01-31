import { useEffect, useState } from 'react';
import Detail from './Detail';

function PostList() {
	 const [posts, setPosts] = useState([]);
     const [search, setSearch] = useState("");
     const [select, setSelect] = useState();
     const [detail, setDetail] = useState(false);
     
/* Fetching the data from the api and setting the state of posts to the data. */
   useEffect(()=>{

    const fetchData = async () =>{
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await data.json();
        setPosts(json);
    }
    fetchData()
    .catch(console.error);
   }, [])

   /**
    * The function getPost() is called when the user clicks on a post in the list. It sets the selected
    * post to the post that was clicked on, and then sets the detail view to true
    * @param e - the event object
    */
   function getPost(e){
    setSelect(e.target.value);
    console.log(e.target.value)
  
     setDetail(true);
    }

    /**
     * The function is called when the user clicks on the close button. It sets the detail state to
     * false, which closes the detail view
     */
    function closeBtn() {
        setDetail(false);
       }

   return (
   <div>
     { detail ? <div>
        <button onClick={closeBtn}>close</button>
        <Detail posts={posts} select={select} detail={detail}/>
     </div>
     
     :<div>
    <form>
    <input type="text" id="sBar" name="sBar" placeholder="search post titles"
    onChange={(e) => setSearch(e.target.value)}></input>
    </form>
   { posts.filter((item)=> {
    return search === ''
        ? item
        : item.title.includes(search);
   }).map((post, index) => { return <ul id="post">
   <li  key={index} >
     <p> {post.title}</p>
      <button value={post.id} onClick={getPost} >view</button></li>
   </ul>}) 
}</div>
}
    </div>
    )
    

   
}

export default PostList;
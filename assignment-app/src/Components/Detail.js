import { useEffect, useState } from 'react';

function Detail(props) {
  const [comments, setComments] = useState([]);
const select = props.select;

 /* Fetch data from an API. */
   useEffect((props)=>{
    console.log(props)
    const fetchData = async () =>{
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${select}/comments`);
        const json = await data.json();
        setComments(json);
    }
    fetchData()
    .catch(console.error);
   }, [])

   

console.log(comments)
    return (
      <div className="Comments">
   
        <h1>{props.posts[select-1].title}</h1>
        <p>{props.posts[select-1].body}</p>
        <h1>Comments</h1>
        {comments.map((comment, index) => {return <ul><li>{comment.body}</li></ul>})}

      </div>
    );
  }
  
  export default Detail;
  
import React, { useEffect, useState } from 'react'
import './Blogcard.css'
import axios from "axios"
import { Link, useNavigate, useParams } from 'react-router-dom'
const Blogcard = () => {


const [blogs, setBlogs] = useState([])

const navigate = useNavigate()
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/blogs");

      setBlogs(response.data.blogs);
    } catch (error) {
       alert("Something is wrong")
      
    }
    

  };
   const deleteBlog = async (id) => {
    const response = await axios.delete("http://localhost:3000/blogs/" +id)
       if (response.status === 200) {
         setBlogs(blogs.filter((blog) => blog._id !== id));
         alert("Blog deleted successfully");
       }
 }
  useEffect(() => {
    fetchBlogs();
  }, []);
 
console.log(blogs,"Blogs")

  return (
    <section className="blog-cards">

      {blogs.map((blog)=> {
         return (
           <div className="blog-card" key={blog._id}>
             <div className="blog-body">
               <span className="blog-category">{blog.title}</span>

               <h4 className="blog-title">{blog.subTitle}</h4>

               <p className="blog-text">{blog.description}</p>

               <Link to={`/singleBlog/${blog._id}`} className="blog-btn">
                 {" "}
                 Read More →
               </Link>
               <button className="blog-btn" onClick={()=>deleteBlog(blog._id)}>
                 delete
               </button>
             </div>
           </div>
         );
         

      })}
     

      
    </section>
  );
}


export default Blogcard

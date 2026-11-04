import React, { useEffect, useState } from 'react'
import './Blogcard.css'
import axios from "axios"
const Blogcard = () => {


const [blogs, setBlogs] = useState([])

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/blogs");

      setBlogs(response.data.blogs);
    } catch (error) {
       alert("Something is wrong")
      
    }
    

  };
  useEffect(() => {
    fetchBlogs();
  }, []);
 
console.log(blogs,"Blogs")

  return (
    <section className="blog-card">
      {blogs.map((blog)=> {
         return(
         <div className="blog-body">
           <span className="blog-category">{blog.title}</span>

           <h4 className="blog-title">{blog.subTitle}</h4>

           <p className="blog-text">
            {blog.description}
           </p>

           <a href="#" className="blog-btn">
             Read More →
           </a>
         </div>)
         

      })}
     

      
    </section>
  );
}


export default Blogcard

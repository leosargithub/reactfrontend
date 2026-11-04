import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './SingleBlog.css'
import axios from 'axios'

const SingleBlog = () => {
const {id} = useParams()
const [blog, setBlog] = useState({})
const navigate = useNavigate()
// Delet blog
 const deleteBlog = async () => {
    const response = await axios.delete("http://localhost:3000/blogs/" +id)
     if(response.status == 200){
      navigate("/")
        alert("delete sucessfully")
     }
 }

// fetch blogs
const fetchSingleBlog = async() => {
  const response = await axios.get("http://localhost:3000/blogs/" + id)
 // console.log(response)
  if(response.status == 200){
    setBlog(response.data.data)
  }

}

useEffect(()=>{
 fetchSingleBlog()
},[])

console.log(blog, "Blog")
   
  return (
    <div>
      <Navbar />

      <div className="single-blog-page">
        <div className="single-blog-card">
          <div className="single-blog-body">
            <span className="single-blog-category">BLOG ARTICLE</span>

            <h1 className="single-blog-title">{blog.title}</h1>

            <h3 className="single-blog-subtitle">{blog.subTitle}</h3>

            <hr className="single-blog-divider" />

            <p className="single-blog-description">{blog.description}</p>
            <Link to={"/"} className="blog-btn">
              back
            </Link>
            <Link to={"/"} className="blog-btn" onClick={deleteBlog}>
              delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog

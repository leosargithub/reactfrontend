import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './UpdateBlog.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const UpdateBlog = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  // const [data, setData] = useState({
  //   title: "",
  //   subTitle: "",
  //   description: ""
  // })
  const [blog, setBlog] = useState({
    title: "",
    subTitle: "",
    description: "",
  });

  
const updatingBlog = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.patch(
      "http://localhost:3000/blogs/" + id,
      blog,
    );

    if (response.status === 200) {
      alert("Blog updated successfully");
      navigate("/");
    }
  } catch (error) {
    console.log(error);
    alert("Failed to update blog");
  }
};

  

  const fetchSingleBlog = async () => {
    const response = await axios.get("http://localhost:3000/blogs/" + id);
    // console.log(response)
    if (response.status == 200) {
      setBlog(response.data.data);
    }
  };

   const handleChange = (e) =>{
    const { name, value} = e.target
    setBlog({
      ...blog,
      [name] : value
    })
  }

  useEffect(() => {
    fetchSingleBlog();
  }, [id]);
  console.log(blog)
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="form-container">
          <h2>Update Blog</h2>

          <form onSubmit={updatingBlog}>
            <div className="input-group">
              <label>Title</label>
              <input
                type="text"
                placeholder="Enter blog title"
                name="title"
                value={blog.title}
                onChange={handleChange}
                //  onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Subtitle</label>
              <input
                type="text"
                name="subTitle"
                placeholder="Enter blog subtitle"
                value={blog.subTitle}
                onChange={handleChange}
                // onChange={(e) => setSubTitle(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Description</label>
              <textarea
                rows="6"
                name="description"
                placeholder="Write your blog description..."
                value={blog.description}
                onChange={handleChange}
                // onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <button type="submit">update Blog</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateBlog

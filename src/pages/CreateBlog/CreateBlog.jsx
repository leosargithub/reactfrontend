import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './CreateBlog.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {

  const navigate = useNavigate()
  // old method
  // const [title,setTitle] = useState("")
  // const [subTitle, setSubTitle] = useState("");
  // const [description, setDescription] = useState("");

  const createBlog = async(e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    // console.log(e.currentTarget, "currentTarget")

     const data = Object.fromEntries(formData)
     console.log(data)

    //console.log(...formData)
    // console.log(formData.get('title'), "formData")
    
    // const data = { old method
    //   title : title, // backendlayko : statename
    //   subTitle : subTitle,
    //   description : description
    // }

    // send above states data to api
    const response = await axios.post("http://localhost:3000/createBlog", data);
    if(response.status == 200){
      //alert(response.data.message)
      navigate("/")
    } else
    {
      alert("someting went wrong")
    }



  }


  return (
    <div>
      <Navbar></Navbar>
        
      <div className="form-container">
        <h2>Create Blog</h2>

        <form onSubmit={createBlog}>
          <div className="input-group">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter blog title"
              name='title'
              //  onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Subtitle</label>
            <input
              type="text"
              name='subTitle'
              placeholder="Enter blog subtitle"
              // onChange={(e) => setSubTitle(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Description</label>
            <textarea
              rows="6"
              name='description'
              placeholder="Write your blog description..."
              // onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button type="submit">Create Blog</button>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog

import { useState } from 'react'
import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import CreateBlog from './pages/CreateBlog/CreateBlog'
import SingleBlog from './pages/SingleBlog/SingleBlog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createBlog" element={<CreateBlog />} />
        <Route path="/singleBlog/:id" element={<SingleBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

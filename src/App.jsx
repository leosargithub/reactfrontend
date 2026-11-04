import { useState } from 'react'
import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import CreateBlog from './pages/CreateBlog/CreateBlog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createBlog" element={<CreateBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

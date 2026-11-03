import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Test from './components/Test/Test'

function App() {
  

  return (
   <BrowserRouter>
    <Routes>


      <Route path='/' element={<Home/>}/>
      <Route path = "/about" element = { <About/>}/>
     <Route path='/contact' element = {<Contact/>}/>
     <Route path="/test" element = {<Test/>} />
    </Routes>
   
   
   </BrowserRouter>
  )
}

export default App

/* eslint-disable no-unused-vars */
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Hotels from "./pages/Hotels"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blogs from "./pages/Blogs"
function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/hotels" element={<Hotels/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navBar'
import HomePage from './Home/HomePage'
import { Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
      <Routes>
      </Routes>
      {/* <Routes>
            <Route path="/create" element={<Create />} />
          </Routes>
          <Routes>
            <Route path="/blogs/:id" element={<BlogDetails />} />
  </Routes>*/}
      {/* <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </>
  )
}

export default App

import { useState } from 'react'
import NavBar from './components/navBar'
import HomePage from './Home/HomePage'
import { Routes, Route } from "react-router-dom"
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';


function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}

export default App

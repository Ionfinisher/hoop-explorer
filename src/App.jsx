import { useState } from 'react'
import NavBar from './components/navBar'
import HomePage from './Home/HomePage'
import { Routes, Route } from "react-router-dom"
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import PlayersPage from './Players/PlayersPage';
import GamesPage from './Games/GamesPage';
import StatsPage from './Stats/StatsPage';
import NotFound from './NotFound/NotFound';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <div className="min-h-screen mt-16 mx-[80px] py-7">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/stats" element={<StatsPage />} />
          {/*
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
      */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </QueryClientProvider>
  )
}

export default App

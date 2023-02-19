import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Box } from '@mui/system'
import { Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed } from './component'
export default function App() {
  let location = useLocation();
  return (

    <Box sx={{ backgroundColor: '#000', pt: '10px' }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" key={location.pathname} exact element={<VideoDetails />} />
        <Route path="/channel/:id" exact element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
      </Routes>
    </Box>
  )
}

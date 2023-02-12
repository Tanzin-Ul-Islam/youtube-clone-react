import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/system'
import { Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed } from './component'
export default function App() {
  return (
    <BrowserRouter>

      <Box sx={{backgroundColor:'#000', pt:'10px'}}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetails />} />
          <Route path="/channel/:id" exact element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
        </Routes>
      </Box>

    </BrowserRouter>
  )
}

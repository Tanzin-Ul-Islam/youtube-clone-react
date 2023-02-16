import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos } from './';
import { FetchData } from '../utils/fetchApi';
import { useParams } from 'react-router-dom';
export default function SearchFeed() {
  let [videos, setVideos] = useState([]);
  let { searchTerm } = useParams();

  useEffect(() => {
    FetchData('search?part=snippet&q=' + searchTerm).then(data => {
      setVideos(data && data.items);
    });
  }, [searchTerm])


  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      {/* <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory} />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 JSM Media
        </Typography>
      </Box> */}
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: '2' }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: '#fff' }}>
          Search Result For: <span style={{ color: '#F31503' }}>{searchTerm}</span> Videos
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

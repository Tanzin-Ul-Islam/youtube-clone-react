import { Box, Stack } from '@mui/material';
import React from 'react'
import { VideoCard, ChannelCard } from "./";
export default function Videos({ videos }) {
  return (
    <Stack direction={'row'} flexWrap="wrap" justifyContent="start" gap={2}>
      {
        videos && videos.length > 0 ?
        videos.map((el, index) => {
          return (
            <Box key={index}>
              {el.id.videoId && <VideoCard videoInfo={el} />}
              {el.id.channelId && <ChannelCard channelDetail={el} />}
            </Box>
          )
        }) : "No data found"
      }
    </Stack>
  )
}

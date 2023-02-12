import React from 'react'
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from "../utils/constant";
import { Link } from 'react-router-dom';
export default function VideoCard({ videoInfo }) {
    let { id, snippet } = videoInfo;
    return (
        <Card sx={{width:{md:'320px', xs:'100%', boxShadow:'none', borderRadius:0}}}>
            <Link to={id.videoId ? `/video/${id.videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet.thumbnails.high.url}
                    alt={snippet.title}
                    sx={{ width: 358, height: 160 }}
                >
                </CardMedia>
                <CardContent sx={{backgroundColor:"#1e1e1e", height:'106px'}}>
                    <Link to={id.videoId ? `/video/${id.videoId}` : demoVideoUrl}>
                        <Typography variant='subTitle1' fontWeight="bold" color="#fff">
                            {snippet.title.slice(0, 50)}
                        </Typography>
                    </Link>
                    <br />
                    <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
                        <Typography variant='subTitle2' fontWeight="bold" color="gray">
                            {snippet.channelTitle}
                            <CheckCircle sx={{fontSize:12, color:'gray', ml:'5px'}}/>
                        </Typography>
                    </Link>
                </CardContent>
            </Link>

        </Card>
    )
}

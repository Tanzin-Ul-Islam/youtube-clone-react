import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { ChannelCard, Videos } from "./"
import { FetchData } from "../utils/fetchApi";
export default function ChannelDetails() {
    let { id } = useParams();
    const [channelDetail, setChannelDetail] = useState({});
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        getData();
    }, [id])

    async function getData() {
        let channelDetails = await FetchData((`channels?part=snippet&id=${id}`));
        if (channelDetails.items.length > 0)
            setChannelDetail(channelDetails.items[0]);
        let ChannelVideos = await FetchData(`search?channelId=${id}&part=snippet%2Cid&order=date`);
        setVideos(ChannelVideos.items)
    }


    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{
                    height: '300px',
                    background: 'linear-gradient(90deg, rgb(247 0 0 / 60%) 0%, rgba(44 41 41) 100%, rgba(0 0 0) 100%)',
                    zIndex: 10,
                }} />
                <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
            </Box>
            <Box p={2} display="flex">
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
            </Box>
        </Box>
    )
}
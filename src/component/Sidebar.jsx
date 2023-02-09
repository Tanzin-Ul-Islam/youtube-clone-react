import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { categories } from '../utils/constant';
export default function Sidebar() {
    const selectedCategory = "New"; 
    return (
        <Stack
            direction={'row'}
            sx={{ overflow: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}
        >
            {
                categories.map(el=>{
                    return(
                        <button
                            className='category-btn'
                            style={{background:el.name === selectedCategory && '#FC1503', color:'white'}}
                            key={el.name}
                        >
                            <span style={{color:el.name === selectedCategory ? 'white' : '#FC1503', marginRight:'15px'}}>{el.icon}</span>
                            <span style={{opacity: el.name === selectedCategory ? '1' : '0.8'}}>{el.name}</span>
                        </button>
                    )
                })
            }
        </Stack>
    )
}

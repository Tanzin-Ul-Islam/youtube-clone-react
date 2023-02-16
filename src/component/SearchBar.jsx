import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e){
    e.preventDefault();
    if(searchText){
      navigate('/search/'+searchText);
      setSearchText("");
    }
  }
  return (
    <Paper
        component="form"
        onSubmit={(e)=>{handleSubmit(e)}}
        sx={{
            borderRadius: 20,
            border: 'e3e3e3',
            boxShadow: 'none',
            pl:2,
            mr:{sm:5}
        }}
    >
        <input type="text" className='search-bar' onChange={(e)=>{setSearchText(e.target.value)}} value={searchText} placeholder="Search..."/>
        <IconButton type='submit' sx={{p:'10px', color:'red'}}>
            <Search/>
        </IconButton>
    </Paper>
  )
}

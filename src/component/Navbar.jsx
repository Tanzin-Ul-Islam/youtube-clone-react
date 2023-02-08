import React from 'react'
import { Stack } from '@mui/material'
import { logo } from '../utils/constant'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
export default function Navbar() {
  return (
    <Stack direction='row' alignItems="center" p="2" sx={{position:'sticky', backgroundColor:'#000', top:0, justifyContent:'space-between' }}>
      <Link to="/">
        <img src={logo} style={{'height':'45px'}} alt="" />
      </Link>
      <SearchBar/>
    </Stack>
  )
}

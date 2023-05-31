import { ExpandMore, Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import Post from './Post'


const Feed= () => {
  return (
    <Box flex={5} p={5}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>
  )
}

export default Feed

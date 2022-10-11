import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

const MainAppBar = () => (
  <AppBar position='static' color='primary'>
    <Toolbar>
      <Typography variant='h6' color='inherit'>
        Things to do
      </Typography>
    </Toolbar>
  </AppBar>
)

export default MainAppBar

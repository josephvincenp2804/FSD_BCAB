import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const C = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" style={{textAlign:'left'}} component="div" sx={{ flexGrow: 1 }}>
            MyApp 
          </Typography>
          <Button color="inherit"><Link to={'/'}>Login</Link></Button>
          <Button color="inherit"><Link to={'/s'}>State</Link></Button>
          <Button color="inherit"><Link to={'/t'}>Array</Link></Button>
          
          
        </Toolbar>
      </AppBar>
    </Box>

    </div>
  )
}

export default C

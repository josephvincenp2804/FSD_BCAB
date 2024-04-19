import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const A = () => {
    var [name,setName] = useState("")
    const changename1 =()=>{
        console.log("btn clicked");
        setName()
    }


  return (
    <div>
        <Typography variant='Outlined'>QWERTYUIOP</Typography><br/><br/>
      <TextField >jj</TextField><br/>
      <Button variant='contained' onClick={changename1}>change</Button>
    </div>
  )
}

export default A

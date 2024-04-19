import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const D = () => {
    var [inputs,setInputs] = useState([])
    var [data,setData] = useState([])
    const inputHandler =(e)=>{
         setInputs({...inputs,[e.target.name]:e.target.value})
         console.log(inputs)
    };
    const addHandler=()=>
    {
        console.log("clicked")
        setData((data)=>[...data,inputs])
        console.log(data);
    };
  return (
    <div style={{margin:"5%"}}>
      <Typography variant='h2' >Details</Typography><br/><br/>
      <TextField variant='outlined' label="Name" name='sname' onChange={inputHandler}></TextField> &ensp;
      <TextField variant='outlined' label="Age" name='age' onChange={inputHandler}></TextField><br/><br/>
      <TextField variant='outlined' label="Place" name='place' onChange={inputHandler}></TextField>&ensp;
      <TextField variant='outlined' label="Phone no" name='phone' onChange={inputHandler}></TextField><br/><br/>
     
      <Button variant='contained' onClick={addHandler}>submit</Button>


      <TableContainer>
        <Table>
           <TableHead>
            <TableRow>
              <TableCell style={{color:"green",fontStyle:"oblique"}}>Name</TableCell>
              <TableCell style={{color:"blue",fontStyle:"oblique"}}>Age</TableCell>
              <TableCell style={{color:"orange",fontStyle:"oblique"}}>Place</TableCell>
              <TableCell style={{color:"red",fontStyle:"oblique"}}>Phone no</TableCell>
            </TableRow>
           </TableHead>
            
             <TableBody>
               {data.map((v,i)=>{
                return<TableRow  key={i}>
                  <TableCell >{v.sname}</TableCell>
                  <TableCell >{v.age}</TableCell>
                  <TableCell >{v.place}</TableCell>
                  <TableCell >{v.phone}</TableCell>
                </TableRow>
               })

               }
            </TableBody> 


        </Table>
      </TableContainer>
    </div>
  )
}

export default D

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'

const B = () => {
    var inputs = [{name:"Joseph",age:18,place:"kmy"},
              {name:"Aaron",age:19,place:"mtm"},        
];
  return (
    <div>
      <TableContainer>
        <Table>
           <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Place</TableCell>
            </TableRow>
           </TableHead>
            
            <TableBody>
               {inputs.map((val,i)=>{
                return<TableRow>
                  <TableCell key={i}>{val.name}</TableCell>
                  <TableCell key={i}>{val.age}</TableCell>
                  <TableCell key={i}>{val.place}</TableCell>

                </TableRow>
               })

               }
            </TableBody>


        </Table>
      </TableContainer>
    </div>
  )
}

export default B

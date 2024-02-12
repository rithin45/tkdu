import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import './routeview.css'
import Topbar from '../Adminpanel/Topbar';
import Sidebar from '../Adminpanel/Sidebar';
import Routeedit from './Routeedit';

const Routedetails = () => {
    var[sub,setSub]=useState([]);
    var [selected,setSelected]=useState();
  var [update,setUpdate]=useState(false);

    useEffect(()=>{
        axios.get("http://localhost:3005/views")
        .then(response=>{
            setSub(response.data)
        })
        .catch(err=>console.log(err))
    },[])
    const updateValues = (row) => {
        setSelected(row)
        setUpdate(true)
    }
    var result=
    <div className='bb'>
        <Topbar/>
        <Sidebar/>
      <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Route</TableCell>
                        <TableCell>From</TableCell>
                        <TableCell>To</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sub.map((row,pos) => {

                        return (
                            <TableRow
                                key={pos}>
                                <TableCell>{row.rte}</TableCell>
                                <TableCell>{row.from}</TableCell>
                                <TableCell>{row.to}</TableCell>
                                <TableCell>{row.price}</TableCell>
                                <TableCell>{row.status}</TableCell>
                                <TableCell><EditIcon onClick={()=>updateValues(row)}/></TableCell>
                               
                            </TableRow>

                        )
                    })}
         </TableBody>
            </Table>
        </TableContainer>
    </div>
  if(update)
  result=<Routeedit data={selected} method='put'/>
  return(result)
}

export default Routedetails

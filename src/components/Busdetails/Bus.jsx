import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import './bus.css'
import { Home } from '@mui/icons-material';
import Topbar from '../Adminpanel/Topbar';
import Sidebar from '../Adminpanel/Sidebar';

const Bus = () => {
  var[inputs,setInputs]=useState({
    "busn":'',
    "busm":'',
    "ac":'',
    "seatn":''
    
  })
  var[selectedimage,setSelectedimage]=useState(null);
  

  const inpuHandler =(event) =>{
    const{name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
  }

  const savedata=()=>{
    const formdata=new FormData();
    formdata.append('busn',inputs.busn);
    formdata.append('busm',inputs.busm);
    formdata.append('ac',inputs.ac);
    formdata.append('seatn',inputs.seatn);
    formdata.append('image1',selectedimage)
    fetch('http://localhost:3005/new',
    {
        method:'post',
        body:formdata,
    })
    .then((response)=>response.json())
    .then((data)=>{
        alert("record saved")
    })
    .catch((err)=>{
        console.log("error")
    })
}

  //   const addHandler=() =>{
  //     console.log("Clicked")

  //     console.log(inputs)
  //     axios.post("http://localhost:3005/new",inputs)
  //     .then((response)=>{
  //       alert("Record Saved")
  //     })
  //     .catch(err=>console.log(err))
      
  // }

  const handleimage =(event)=>{
    const file = event.target.files[0];
    setSelectedimage(file)
    inputs.image1=file;
    }

    


  return (

    <div>
      <Topbar/>
      <Sidebar/>
    <div className="addproduct">
    <h2>Bus Details</h2>
      <TextField label="Bus Number" type="text" name="busn"value={inputs.busn} onChange={(event) => inpuHandler (event)}/> <br /><br />
      <TextField label="Seater" type="text" name="seatn" value={inputs.seatn} onChange={(event) => inpuHandler (event)}/><br /><br />
      
      <FormControl>
        <InputLabel>Bus model</InputLabel>
        <Select label="Bus Model" name="busm" value={inputs.busm}onChange={inpuHandler}>
        <MenuItem value="Single Deck">Single Deck</MenuItem>
            <MenuItem value="Double Deck">Double Deck</MenuItem>
            <MenuItem value="Articulated">Articulated</MenuItem>
            <MenuItem value="Low Floor">Low Floor</MenuItem>
            <MenuItem value="Mini bus">Mini bus</MenuItem>
            <MenuItem value="Coach">Coach</MenuItem>
            <MenuItem value="Customized">Customized</MenuItem>
            </Select>
            </FormControl>
           <br /><br /> 
      <FormControl>
        <InputLabel>Air conditionar</InputLabel>
        <Select label="Air conditionar" name="ac" value={inputs.ac}onChange={inpuHandler}>
        <MenuItem value="AC">AC</MenuItem>
            <MenuItem value="Non-AC">Non-AC</MenuItem>
      </Select> 
      </FormControl><br /><br />
      <label>Upload file</label>
        <input type="file" onChange={handleimage}></input>
        <br /><br />
      <button className="addproduct-btn" onClick={()=>{savedata()}}>ADD</button>
    </div>
    </div>
  )
}

export default Bus
import React, { useEffect, useState } from 'react'
import { Button, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import Topbar from '../Adminpanel/Topbar'
import Sidebar from '../Adminpanel/Sidebar'
import './bus.css'



const Busedit = (props) => {
    var[ca,setCa]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:3005/subview")
      .then(response=>{
        console.log(response.data)
        setCa(response.data)

      })
      .catch(err=>console.log(err))
    },[])


    var[inputs,setInputs]=useState(props.data)
    const inputHandler=(event)=>
    {

        const { name, value } =event.target
        setInputs((inputs) => ({ ...inputs,[name]: value }))
        console.log(inputs)
    }
    const addHandler=()=>{
        if(props.method==='put'){

            axios.put("http://localhost:3005/edit/"+inputs._id,inputs)
            .then(response=>{
                console.log("post data"+response.data)
                alert("Success")
                window.location.reload(false)
            })
            .catch(err=>console.log(err))
        }
    }
  return (
    <div>
      <Topbar/>
      <Sidebar/>
      <h2>Edit Details</h2>
    
  
  {/* <FormControl sx={{ m: 1, minWidth: 120 }}> */}
  <TextField label="Bus Number" name="busn" variant="filled" value={inputs.busn}onChange={inputHandler}>
    {
      ca.map((value,index)=>{
        return(
          <MenuItem key={index}
          value={value.busn} >{value.busn}</MenuItem>
        )
      })
    }
    </TextField> <br /><br />
    <Select label="Bus Model" name="busm" value={inputs.busm}onChange={inputHandler}>
        <MenuItem value="Single Deck">Single Deck</MenuItem>
            <MenuItem value="Double Deck">Double Deck</MenuItem>
            <MenuItem value="Articulated">Articulated</MenuItem>
            <MenuItem value="Low Floor">Low Floor</MenuItem>
            <MenuItem value="Mini bus">Mini bus</MenuItem>
            <MenuItem value="Coach">Coach</MenuItem>
            <MenuItem value="Customized">Customized</MenuItem>
      </Select><br /><br /> 
      <Select label="Bus AC-System" name="ac" value={inputs.ac}onChange={inpuHandler}>
        <MenuItem value="AC">AC</MenuItem>
            <MenuItem value="Non-AC">Non-AC</MenuItem>
      </Select><br /><br /> 
    <TextField  label="Seater" type='text' name="seatn" variant="filled" value={inputs.seatn}onChange={inputHandler}/><br /><br />
  {/* <label>Upload file</label>
        <input type="file" onChange={handleimage}></input>
        <br /><br /> */}
{/* </FormControl><br/><br/> */}
  <Button variant="contained" onClick={addHandler} >Update</Button>
  </div>
    
  )
}

export default Busedit
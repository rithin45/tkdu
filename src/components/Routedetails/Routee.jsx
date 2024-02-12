import { Button, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './route.css'
import Topbar from '../Adminpanel/Topbar'
import Sidebar from '../Adminpanel/Sidebar'

const Routee = () => {
  
    
    var[ca,setCa]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:3005/categoryview")
      .then(response=>{
        console.log(response.data)
        setCa(response.data)

      })
      .catch(err=>console.log(err))
    },[])

    var[inputs,setInputs]=useState({
      "rte":'',
      "from":'',
      "to":'',
      "price":'',
      "status":'Upcomming'
    })
  
    const inputHandler =(event) =>{
      const{name,value}=event.target
      setInputs((inputs)=>({...inputs,[name]:value}))
      console.log(inputs)
    }
  
      const addHandler=() =>{
        console.log("Clicked")
  
        console.log(inputs)
        axios.post("http://localhost:3005/cnew",inputs)
        .then((response)=>{
          alert("Record Saved")
        })
        .catch(err=>console.log(err))
        
    }
  
  return (
    <div>
      <Topbar/>
      <Sidebar/>
    <div className="a">
      
      <h2>Bus Route</h2>
    <TextField label="Route" type='text' name="rte" value={inputs.rte}onChange={inputHandler}/><br /><br />
    <TextField label="From" type='text' name="from" value={inputs.from}onChange={inputHandler}/><br /><br />
    <TextField label="To" type='text' name="to" value={inputs.to}onChange={inputHandler}/><br /><br />
    <TextField label="Price" type='text' name="price" value={inputs.price}onChange={inputHandler}/><br /><br />

    {/* <FormControl sx={{ m: 1, minWidth: 120 }}> */}
    {/* <TextField label="Product name" name="pname" variant="filled" value={inputs.pname}onChange={inputHandler}>
    {
      ca.map((value,index)=>{
        return(
          <MenuItem key={index}
          value={value.name} >{value.name}</MenuItem>
        )
      })
    }
    </TextField> <br /><br /> */}
  {/* <InputLabel id="demo-simple-select-label">Category</InputLabel> */}

  {/* <Select
   labelId="demo-simple-select-label"
    name='Category'value={inputs.category} onChange={inputHandler}>
    {
      ca.map((value,index)=>{
        return(
          <MenuItem key={index}
          value={value.name} >{value.name}</MenuItem>
        )
      })
    }
  </Select> */}
  <Select labelId="contained" label="Status"
    name='status'value={inputs.status} onChange={inputHandler}>
        <MenuItem value="Upcomming">Upcomming</MenuItem>
        <MenuItem value="Canceled">Canceled</MenuItem>
        <MenuItem value="Reroute">Reroute</MenuItem>
        <MenuItem value="Weekdays">Weekdays</MenuItem>
        <MenuItem value="Daily">Daily</MenuItem>
  </Select><br /><br />
{/* </FormControl><br/><br/> */}
    <Button variant="contained" onClick={addHandler} >Submit</Button>
    </div>
    </div>
  )
}

export default Routee
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Restcard from '../RestCard/Restcard';

function Allrest() {

  const [allAppointments,setAllAppointments]=useState([])
  const fetchdata=async()=>
  {
    const response=await axios(`http://localhost:3001/doctors`)
    console.log(response.data);
 
  setAllAppointments(response.data)
}
console.log(allAppointments);
useEffect(()=>{
  fetchdata()

},[])
  return (
    <div >
      <Row>
    
        {
          allAppointments.map((item)=>(

            <Col sm={12} md={6} lg={4} xl={3}>
            <Restcard booking={item}/>
            </Col> 
          ))
        }
        </Row>

    </div>
  )
}

export default Allrest
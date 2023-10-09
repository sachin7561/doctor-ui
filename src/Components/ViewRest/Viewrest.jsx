
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';



function Viewrest() {

    const{id}=useParams()
        console.log(id);

        const [RestDetails,setRsetDetails]=useState({})



        // apo call for get particular resturant details
        const fetchData=async()=>{
            const response=await axios.get(`http://localhost:3001/doctors/${id}`)
            console.log(response.data);//object particular rest details
            setRsetDetails(response.data)
        }
        console.log(RestDetails)

        useEffect(()=>{
            fetchData();

        },[])
    


  return (
    <div>
         <Row>
         <Col>
            {/*image*/ }
                <div style={{width:'400px',height:'500px',margin:'120px'}}>
                <h1  >{RestDetails.name} </h1>
                  <h3>{RestDetails.specialty} </h3>
                  <h5>{RestDetails.email}</h5>
                  <h6>{RestDetails.phone}</h6>

                </div>
           
            

            
            </Col>
            <Col>
            {/*content*/ }
            
            <article class="card"  style={{ width: '50rem',margin:'1rem', borderWidth:1  }}>
      <h3>{RestDetails.name}</h3>
      <Card style={{ width: '45rem',margin:'1rem' ,borderWidth:1}}>
      <Card.Body>
        <Card.Title>specialty :{RestDetails.specialty}</Card.Title>

        <Card.Text>
          {RestDetails.hospital}
        </Card.Text>
        <Card.Text>
         Address: {RestDetails.address}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Available-Days:{RestDetails.available_days}</ListGroup.Item>
        <ListGroup.Item>Available-Hours  :{RestDetails.available_hours}</ListGroup.Item>
        <ListGroup.Item>Rating  :{RestDetails.rating}</ListGroup.Item>
      </ListGroup>
        <Link>Click here to View Reviews</Link>
     
    </Card>
    
    </article>
   

            </Col>



            




            <Col>
            
            <div>
       
    
    </div>

            </Col>
            <h1></h1>
        </Row>
        
       
    </div>
  )
}

export default Viewrest
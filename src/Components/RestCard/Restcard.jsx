import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Restcard.css'
import { Link } from 'react-router-dom';
import Allrest from '../Allrest/Allrest';



function Restcard({booking}) {
  return (
    <div>
        <Link to ={`/view/${booking.id}`}  style={{textDecoration:'none'}}>
    <article class="card"  style={{ width: '22rem',margin:'1rem', borderWidth:10  }}>
      <h3>{booking.name}</h3>
      <Card style={{ width: '22rem',margin:'1rem' ,borderWidth:4}}>
      <Card.Body>
        <Card.Title>specialty :{booking.specialty}</Card.Title>
        <Card.Text>
          {booking.hospital}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Available-Days:{booking.available_days}</ListGroup.Item>
        <ListGroup.Item>Available-Hours  :{booking.available_hours}</ListGroup.Item>
        <ListGroup.Item>Rating  :{booking.rating}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card href="#">{booking.email}</Card>
      
        <Card.Link href="#" style={{textDecoration:'none',color:'blue'}}>For Booking{booking.phone}</Card.Link>
      </Card.Body>
     
    </Card>
      <span class="top"></span>
      <span class="right"></span>
      <span class="bottom"></span>
      <span class="left"></span>
    </article>
    </Link>
    </div>

  )
}

export default Restcard
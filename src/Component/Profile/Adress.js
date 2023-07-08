import React from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";


function Adress() {
  return (
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Address</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Tunisia Gabes</Card.Subtitle>
    <Card.Text>
   I took advantage of the opening of the hackerspace in Gabès to join the course in Fullstack JS. This training will allow me to boost my development skills and get his career off the ground.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Go My Code Link</Card.Link>
  </Card.Body>
</Card>
  );
}

export default Adress;

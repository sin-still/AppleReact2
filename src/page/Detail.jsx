import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { useParams } from 'react-router-dom';


const Detail = (props) => {
  const { id } = useParams();
  const selectedShoe = props.shoes.find(shoes => shoes.id === parseInt(id));
  console.log(selectedShoe)
  
  
  

  return (
      <Container>
      <Row>
        <Col className='md-6'>
        <img src={`https://codingapple1.github.io/shop/shoes${selectedShoe.id+1}.jpg`} width="100%" /></Col>
        
        <Col className='md-6'>
         <h4 className='pt-5'>{selectedShoe.title}</h4>
         <p>{selectedShoe.content}</p>
         <p>{selectedShoe.price}</p>
         <Button variant="light">주문하기</Button>
        </Col>
      </Row>
    </Container>
   );
};

export default Detail;
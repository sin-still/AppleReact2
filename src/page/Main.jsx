import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar , Container , Nav , Row , Col } from 'react-bootstrap';

import MainShoes from '../components/MainShoes';


const Main = (props) => {

   return (
      <>
          <div className='main-bg'></div>
          <Row>
            {
              props.shoes.map((a, i)=>{
    
                return(
                  <MainShoes shoes = {props.shoes[i]} i={i}  />
                )
              })
            }
          </Row>
        </>
   );
};


function Card(props){

   return(
       <Col>
         <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} alt=" 상품이미지 " width="80%" />
         <h4>{props.shoes.title}</h4>
         <p>{props.shoes.price}</p>
       </Col>
   )
 }
 

export default Main;



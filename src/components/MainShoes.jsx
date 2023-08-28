import React from 'react';
import { Navbar , Container , Nav , Row , Col } from 'react-bootstrap';
import data from '../data';
import { Link, useNavigate } from 'react-router-dom';


const MainShoes = (props) => {
   let navigate = useNavigate();
   return (
         <Col onClick={()=>{navigate(`/detail/${props.shoes.id}`)}}>
               <img src={`https://codingapple1.github.io/shop/shoes${props.shoes.id+1}.jpg`} alt=" 상품이미지 " width="80%" />
               <h4>{props.shoes.title}</h4>
               <p>{props.shoes.price}</p>
               <p>상품설명</p>
        </Col>
   );
};
{/* <Link to={`/detail/${props.shoes.id}`}></Link> */}
export default MainShoes;
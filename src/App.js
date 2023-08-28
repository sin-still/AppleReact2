import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar , Container , Nav , Row , Col } from 'react-bootstrap';
import { Routes ,Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Main from './page/Main';
import Detail from './page/Detail';
import data from './data';


function App() {
  let [shoes] = useState(data);


  return (
    <div className="App">
      
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Apple Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>






      <Routes>
        <Route path='/' element ={<Main shoes={shoes}/>}/>
        <Route path='/detail/:id' element ={<Detail shoes={shoes} />} />
        <Route path='/about' element ={<About/>}>
          <Route path='member' element ={<div>멤버쓰</div>} />
          <Route path='location' element ={<div>위치정보쓰</div>} />
        </Route>


        <Route path='/event' element ={<Event/>}>
          <Route path='one' element ={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path='two' element ={<div>생일기념 쿠폰받기</div>} />
        </Route>







        <Route path='*' element ={<div>없는 페이지 입니다.</div>}/>
      </Routes>

      
      
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보</h4>
      <Outlet />
    </div>
  )
}

function Event(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;

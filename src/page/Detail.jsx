import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import Nav from 'react-bootstrap/Nav';


//컴포넌트의 Lifecycle

//페이지에 장착 (mount)
//업데이트 (update)
// 제거 (unmount)

// *중간중간 코드실행가능.*

/* 
class Detail2 extends React.Component{
  componentDidMount(){

  }
  componentDidUpdate(){

  }
  componentWillUnmount(){

  }
}
클래스형코드
 */


const Detail = (props) => {
  
  
  const { id } = useParams();
  const selectedShoe = props.shoes.find(shoes => shoes.id === parseInt(id));
  const [showAlert, setShowAlert] = useState(true);
  const [ input, setInput ] = useState('')
  const [ inputText, setInputText ] = useState('')
  const [ count , setCount ] =useState();
  const [ tab , setTab ] =useState(0);
  const [fade, setFade] = useState('');

  //서버에서 데이터 가져오는 작업 , 타이머를 장착하는것 같은 오래걸리는 작업을 유즈이펙트에 넣어 작업한다.

  //Side Effect 함수의 핵심기능 과 상관없는 부가기능. -useEffect = 사이드이펙트 보관함.
  useEffect(()=>{
    //mount , update 시 실행됨.
    console.log('안녕');
    //실행시점이 차이가있다.
    //useEffect 안에 있는 코드는 html 렌더링이 다 실행된 후 동작한다.
    const timer = setTimeout(()=>{
      setShowAlert(false)
    },2000)
    const styleFade = setTimeout(()=>{setFade('end')},10)
    
    return()=>{
      setFade('')
      clearTimeout(timer);
      clearTimeout(styleFade);
      console.log('클리어');
    } //메모리 누수 방지
    // useEffect 동작 전 실행된다.
  },[ count, alert, ])
  
  
  //console.log('안녕') 밖에 있어도 똑같이 실행된다.

  

  return (
      <Container className={`start ${fade}`}>
        {showAlert && (
        <div className='alert alert-warning'>
          2초이내 구매시 할인
          
        </div>
        )}
        {
          !isNaN(input) ? null : <span>숫자를 기입해주세요.</span>
        }
        
        <input type="text" value={input} onChange={e =>{ setInput(e.target.value) }} />
        
          {count}
          <button onClick={()=>{ setCount( count +1 )}}>버튼</button>
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
      <Nav variant='tabs' defaultActiveKey='link0'>
        <Nav.Item>
          <Nav.Link eventKey='link0' onClick={() => setTab(0)}>버튼 0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link1' onClick={() => setTab(1)}>버튼 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link2' onClick={() => setTab(2)}>버튼 2</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tabcontent tab={tab} />
    </Container>
   );
};

function Tabcontent ({tab}){
  
    /* if (tab == 0) {
      return <div>내용1</div>
    }
    if (tab == 1) {
      return  <div>내용2</div>
    }
    if (tab == 2) {
      return  <div>내용3</div>
    }
    return null;  */
    /* return [<div>내용1</div>,<div>내용2</div>,<div>내용3</div>][tab] */

    const [fade, setFade] = useState('');
    useEffect(()=>{
      const a = setTimeout(()=>{setFade('end')},10)
      
      return()=>{
        clearTimeout(a);
        setFade('')
      }
    },[tab])

    return <div className={`start ${fade}`}>내용{tab+1}</div>
}

//react 18ver 이상부턴 automatic batching 이란 기능이 생겨 가까운 경우 한번에 실행이 되기 때문에 약간의 시간차를 주어 해야함

// * automatic batching
//여러 개의 상태(State) 변경이나 업데이트가 동시에 발생할 때, 리액트가 내부적으로 이러한 업데이트들을 효율적으로 처리하는 메커니즘
export default Detail;
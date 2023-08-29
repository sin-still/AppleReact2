import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';


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

    
    return()=>{
      clearTimeout(timer);
      console.log('클리어');
    } //메모리 누수 방지
    // useEffect 동작 전 실행된다.
  },[ count, alert, ])
  
  
  //console.log('안녕') 밖에 있어도 똑같이 실행된다.

  

  return (
      <Container>
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
    </Container>
   );
};

export default Detail;
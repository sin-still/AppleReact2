import React from 'react';
import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, moreCount, increase } from '../store';

const Cart = () => {
   //store 에 있는 스테이트를 가져오는 함수
   let All = useSelector(( state ) =>{ return state })
   let user = useSelector(( state ) =>{ return state.user })
   let stock = useSelector(( state ) =>{ return state.stock })
   let cartData = useSelector(( state ) =>{ return state.cartData })

   let dispatch  = useDispatch()
   
   console.log(All)
   console.log(user)
   console.log(stock)
   console.log(cartData)

   return (
      <div>
         {All.user.name}의 장바구니 {All.user.age}의 장바구니
         <button onClick={()=>{
            dispatch(increase())
         }}>버튼</button>
         <Table>
            <thead>
               <tr>
                  <th></th>
                  <th>아이디</th>
                  <th>상품명</th>
                  <th>수량</th>
                  <th>가격</th>
                  <th>변경하기</th>
               </tr>
            </thead>
            <tbody>
               {
                  cartData.map((data, i)=>{
                     return (
                        <tr key={data.id}>
                           <td>{i+1}</td>
                           <td>{data.id}</td>
                           <td>{data.name}</td>
                           <td>{data.count}</td>
                           <td>{data.price * data.count}</td>
                           <td><button onClick={()=>{
                              dispatch(moreCount(data.id))
                           }}>+</button></td>
                        </tr>
                     )
                  })
               }
               
            </tbody>
         </Table>
      </div>
   );
};

export default Cart;
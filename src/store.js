import { configureStore, createSlice } from "@reduxjs/toolkit";
/* 
createSlice({
   name: 'state이름',
   initialState: '값'
})
 */
let user = createSlice({
   name: 'user',
   initialState: {name : 'lee', age: 20 },

   reducers: {
      changeName( state /* 기존스테이트 */){
         /* return { name : 'park', age: 20 } */
         return state.name = 'park'
      },
      increase( state, a) {
         state.age += a.payload
      },
   }

})
//객체분해 할당
export let { changeName, increase } = user.actions;

///////////////////////////////////////////////////////////////////
let stock = createSlice({
   name: 'stock',
   initialState: [10, 11, 12]
})
///////////////////////////////////////////////////////////////////////
let cartData = createSlice({
   name: 'cartData',
   initialState: [
      {id : 0, name: 'White and Black', count : 2, price : 120000 },
      {id : 2, name: 'Grey Yordan', count : 1, price : 130000 },
   ],

   reducers : {
      moreCount(state, action){
         const itemId = action.payload;
         const itemIndex = state.findIndex( item => item.id === itemId ); 

         state[itemIndex].count++
      },
      /* addDataA(state, action){
         
         state.push(action.payload)
         console.log(cartData)
         
         
      }, */
      addData(state, action){
         const selectData = action.payload;
         console.log(selectData)
         const copy = [...state]
         copy.push(selectData)
         console.log(copy)
         return  copy
         
      }
   }
})

export let { moreCount, addData } = cartData.actions;


////////////////////////////////////////////////////

export default configureStore({
   reducer: {
      user : user.reducer,
      stock : stock.reducer,
      cartData : cartData.reducer,
   }
})
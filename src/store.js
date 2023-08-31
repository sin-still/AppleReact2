import { configureStore, createSlice } from "@reduxjs/toolkit";
/* 
createSlice({
   name: 'state이름',
   initialState: '값'
})
 */
let user = createSlice({
   name: 'user',
   initialState: 'lee',

   reducers: {
      changeName( state /* 기존스테이트 */){
         return 'sinchul ' + state
      }
   }

})
//객체분해 할당
export let { changeName } = user.actions;


let stock = createSlice({
   name: 'stock',
   initialState: [10, 11, 12]
})

let cartData = createSlice({
   name: 'cartData',
   initialState: [
      {id : 0, name: 'White and Black', count : 2 },
      {id : 2, name: 'Grey Yordan', count : 1 },
   ],

   reducers : {
      moreCount(state, action){
         const itemId = action.payload;
         const itemIndex = state.findIndex( item => item.id === itemId );

         if ( itemIndex !== -1 ) {
            state[itemIndex].count += 1;
         }
      }
   }
})

export let { moreCount } = cartData.actions;




export default configureStore({
   reducer: {
      user : user.reducer,
      stock : stock.reducer,
      cartData : cartData.reducer,
   }
})
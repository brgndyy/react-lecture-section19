import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      // 새로운 추가된 아이템
      const newItem = action.payload;

      //새로 추가된 아이템이 기존 장바구니에 존재하는가 ?
      const existingItem = state.items.find((item) => item.id === newItem.id);
      // 총수량 더해주기
      state.totalQuantity++;

      // 만약 기존 장바구니에 존재하지 않는다면

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      }
      // 만약 기존 장바구니에 존재한다면
      else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
        const id = action.payload;
        state.totalQuantity--;
        
        const existingItem = state.items.find(item => item.id === id);

        if(existingItem.quantity === 1){
          state.items = state.items.filter(item => item.id !== id );
        } else{
            existingItem.quantity--;
        }
    },
  },
});


export default cartSlice;
export const cartActions = cartSlice.actions;
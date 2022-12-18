import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice"
import cartSlice from "./cart-slice";


const store = configureStore({
    reducer : {
        ui : uiSlice.reducer,
        cart : cartSlice.reducer, // useSelector 사용할때 여기 key 값으로 사용
    }
})

export default store;
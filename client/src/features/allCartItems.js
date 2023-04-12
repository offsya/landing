import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    allItemsCart: []
}

export const allItemsCartSlice = createSlice({
    name: 'allItemsCart',
    initialState,
    reducers: {
        setAllItemsCart: (state, action) => {
            const filterArray = state.allItemsCart.map((elem) => elem.img);
            if(!filterArray.includes(action.payload.img)){
                state.allItemsCart = [...state.allItemsCart, action.payload]
            }

        },
        setCartElemQuantityIncrement: (state, action) => {
            const itemIndex = state.allItemsCart.findIndex(item => item.img === action.payload.img);
            if (itemIndex >= 0) {
                state.allItemsCart[itemIndex].quantity += 1;
            }
        },
        setCartElemQuantityDecrement: (state, action) => {
            const itemIndex = state.allItemsCart.findIndex(item => item.img === action.payload.img);
            if (itemIndex >= 0 && action.payload.quantity > 0) {
                state.allItemsCart[itemIndex].quantity -= 1;
            }
        },
        deleteCartElem: (state, action) => {
            state.allItemsCart = state.allItemsCart.filter(item => item.img !== action.payload.img);
        },
    }
})


export const {setAllItemsCart, setCartElemQuantityDecrement, setCartElemQuantityIncrement, deleteCartElem} = allItemsCartSlice.actions
export default allItemsCartSlice.reducer
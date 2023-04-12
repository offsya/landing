import {createSlice} from "@reduxjs/toolkit";
import tomato from "../components/images/tomato.svg";
import corn from "../components/images/corn.svg";
import chili from "../components/images/chili.svg";
import avocado from "../components/images/avocado.svg";

const initialState = {
    setAllItems: [ {
        img: tomato,
        name: 'Tomato',
        price: 3.5,
        quantity: 0,
    },
        {
            img: chili,
            name: 'chili',
            price: 3.5,
            quantity: 0,
        },
        {
            img: avocado,
            name: 'avocado',
            price: 3.5,
            quantity: 0,
        },
        {
            img: corn,
            name: 'corn',
            price: 3.5,
            quantity: 0,
        },

    ]
}

export const allItemsSlice = createSlice({
    name: 'allItems',
    initialState,
    reducers: {
        setAllItems: (state, action) => {
            state.allItems.push(action.payload)
        },
    }
})


export const {setAllItems} = allItemsSlice.actions
export default allItemsSlice.reducer
import {createSlice} from "@reduxjs/toolkit";
import tomato from "../components/images/tomato.svg";
import corn from "../components/images/corn.svg";
import chili from "../components/images/chili.svg";
import avocado from "../components/images/avocado.svg";

const initialState = {
    setAllItems: [
        {
            id: 1,
            quantity: 0,
            img: tomato,
            name: 'Tomato',
            sku: 'tmt',
            middlePrice: 3.5,
            ourPrice: 2.5,
            proveedorPrice: 1.5,
            skuProveedor: 'tmtt',
            unit: 'tara',
        },
        {
            id: 2,
            quantity: 0,
            img: corn,
            name: 'Corn',
            sku: 'tmt',
            middlePrice: 3.5,
            ourPrice: 2.5,
            proveedorPrice: 1.5,
            skuProveedor: 'tmtt',
            unit: 'tara',
        },
        {
            id: 3,
            quantity: 0,
            img: chili,
            name: 'Chili',
            sku: 'tmt',
            middlePrice: 3.5,
            ourPrice: 2.5,
            proveedorPrice: 1.5,
            skuProveedor: 'tmtt',
            unit: 'tara',
        },
        {
            id: 4,
            quantity: 0,
            img: avocado,
            name: 'Avocado',
            sku: 'tmt',
            middlePrice: 3.5,
            ourPrice: 2.5,
            proveedorPrice: 1.5,
            skuProveedor: 'tmtt',
            unit: 'tara',
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
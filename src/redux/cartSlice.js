import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    productsNumber: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const addProductExists = state.products.find((product) => product.id === action.payload.id)
            if (addProductExists) {
                addProductExists.qauntity += parseInt(action.payload.qauntity)
            } else {
                state.products.push({ ...action.payload, qauntity: parseInt(action.payload.qauntity) })
            }
            state.productsNumber = state.productsNumber + parseInt(action.payload.qauntity)
        },
        removeFromCart: (state, action) => {
            const productToRemove = state.products.find((product) => product.id === action.payload)

            state.productsNumber = state.productsNumber - productToRemove.qauntity

            const index = state.products.findIndex((product) => product.id === action.payload)

            state.products.splice(index, 1)
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

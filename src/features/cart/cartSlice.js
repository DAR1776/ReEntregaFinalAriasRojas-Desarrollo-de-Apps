import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    user: "",
    updateAt: Date.now().toLocaleString(),
    items:[],
    total: 0
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const productRepeated = state.items.find(item => item.id == action.payload.id)
            let newTotal = 0
            let newTotal2 = 0

            if (productRepeated) {
                const itemsUpdated = state.items.map(item => {
                    if (item.id === action.payload.id){
                        item.quantity += action.payload.quantity
                        return item
                    }
                    return item
                })  
                newTotal = itemsUpdated.reduce(
                    (acc, currentValue) => (acc += currentValue.price* currentValue.quantity), 
                    0
                )
                console.log('newtotal: ', newTotal)
                
                state.updateAt = new Date().toLocaleString();
                state.items = itemsUpdated;
                state.total = newTotal;
            }
            else {
                state.items.push(action.payload)
                newTotal2 = state.items.reduce(
                    (acc, currentValue) => (acc += currentValue.price * currentValue.quantity), 
                    0 
                )
                console.log('newtotal2: ', newTotal2)
                state.updateAt = new Date().toLocaleString();
                state.total = newTotal2;
            }
            console.log( initialState.total)

        },
        removeItem: (state, action) => {

        }
    }
})

export const {addItem, removeItem} = cartSlice.actions

export default cartSlice.reducer

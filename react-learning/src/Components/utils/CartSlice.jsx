import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    removeItem: (state, action) => {
      state.item = state.item.filter(item => item.card.info.id !== action.payload);
    },
    clearItem: (state, action) => {
      state.item = [];
    },
  },
});

export const { addItem, removeItem, clearItem } = CartSlice.actions;
export default CartSlice.reducer;

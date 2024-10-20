import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
};

const getTotalPrice = (state) => {
  return state.products.reduce((prev, curr) => {
    return prev + curr.price * curr.count;
  }, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state["products"].length) {
        const idx = state.products.findIndex(
          (pro) => pro.id === action.payload.product.id
        );
        if (idx > -1) {
          state.products[idx].count++;
        } else {
          state.products.push({ ...action.payload.product, count: 1 });
        }
      } else {
        state.products = [{ ...action.payload.product, count: 1 }];
      }
      state.totalPrice = getTotalPrice(state);
    },
    removeFromCart: (state, action) => {
      const idx = state.products.findIndex(
        (pro) => pro.id === action.payload.product.id
      );
      if (idx > -1) {
        if (state.products[idx].count > 1) {
          state.products[idx].count--;
        } else {
          state.products.splice(idx, 1);
        }
      }
      state.totalPrice = getTotalPrice(state);
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.product.id
      );
      state.totalPrice = getTotalPrice(state);
    },
  },
});

export const { addToCart, removeFromCart, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;

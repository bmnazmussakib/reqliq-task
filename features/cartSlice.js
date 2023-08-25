// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";


  const getCartItemsFromLocalStorage = () => {
    const cartData = window.localStorage.getItem('cartItems');
    return cartData ? JSON.parse(cartData) : { items: [], totalPrice: 0 };
  };
  
  const setCartItemsToLocalStorage = (items, totalPrice) => {
    window.localStorage.setItem("cartItems", JSON.stringify({ items, totalPrice }));
  };
  



const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

const initialState = getCartItemsFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice = calculateTotalPrice(state.items);
      setCartItemsToLocalStorage(state.items, state.totalPrice);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalPrice = calculateTotalPrice(state.items);
      setCartItemsToLocalStorage(state.items, state.totalPrice);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        state.totalPrice = calculateTotalPrice(state.items);
        setCartItemsToLocalStorage(state.items, state.totalPrice);
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalPrice = calculateTotalPrice(state.items);
        setCartItemsToLocalStorage(state.items, state.totalPrice);
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;

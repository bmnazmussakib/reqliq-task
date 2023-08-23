// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice'; // Import your cartSlice or its path

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers here
  },
});

export default store;

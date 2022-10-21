import { configureStore } from '@reduxjs/toolkit';
import flySliceReducer from './flySlice';
import searchFlyReduser from './seachFlySlice';


const store = configureStore({
  reducer: {
    flyDate: flySliceReducer,
    searchFly: searchFlyReduser,
  },
  devTools: process.env.NODE_EVN !== 'production',
});

export default store;

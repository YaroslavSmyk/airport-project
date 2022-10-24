import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchFly: '',
};

export const seachFlySlice = createSlice({
  name: 'searchFly',
  initialState,
  reducers: {
    setSearchFly: (state, action) => {
      state.searchFly = action.payload;
    },
  },
});

export const { setSearchFly } = seachFlySlice.action;
export default seachFlySlice.reducer;

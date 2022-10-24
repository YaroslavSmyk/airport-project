import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  flyDate: new Date(),
};

export const flySlice = createSlice({
  name: 'flyDate',
  initialState,
  reducers: {
    setFlyDate: (state, action) => {
      state.flyDate = action.payload;
    },
  },
});

export const { setFlyDate } = flySlice.action;
export default flySlice.reducer;

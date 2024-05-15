import { createSlice } from '@reduxjs/toolkit';
import { handleGetLocalStorage } from '../../utils/util';

const initialState = {
  user: handleGetLocalStorage('dataUser'),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    handleGetValue: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { handleGetValue } = userSlice.actions;

export default userSlice.reducer;

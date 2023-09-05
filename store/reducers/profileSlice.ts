import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openProfileReg: false,
};

const profileSlice = createSlice({
  name: 'profileReg',
  initialState,
  reducers: {
    openProfile: (state) => {
      state.openProfileReg = true;
    },
    closeProfile: (state) => {
      state.openProfileReg = false;
    },
  },
});

export const { openProfile, closeProfile } = profileSlice.actions;

export default profileSlice.reducer;

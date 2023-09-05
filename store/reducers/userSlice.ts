import { createSlice } from '@reduxjs/toolkit';
import { getUserProfile } from '@/app/components/serverActions/actions';

type UserInitialState = {
  user: User | {};
  loading: boolean;
};

const initialState: UserInitialState = {
  user: {},
  loading: false,
};

export const fetchUserSlice = createSlice({
  name: 'user profile',
  initialState: initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    setUser: (state, action) => {
      state.loading = true;
      state.user = action.payload;
      state.loading = false;
    },
  },
});
export const { setUser, startLoading } = fetchUserSlice.actions;
export default fetchUserSlice.reducer;

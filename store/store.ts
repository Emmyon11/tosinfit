import { configureStore } from '@reduxjs/toolkit';
import profileRegReducer from '@/store/reducers/profileSlice';
import fetchUserReducer from '@/store/reducers/userSlice';

export const store = configureStore({
  reducer: { profileReg: profileRegReducer, userProfile: fetchUserReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

'use client';

import { getUserProfile } from '@/app/components/serverActions/actions';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { setUser, startLoading } from '@/store/reducers/userSlice';
import { useEffect } from 'react';

const Profile = ({ userId }: { userId: string }) => {
  const dispatch = useAppDispatch();
  const { user, loading } = useAppSelector((state) => state.userProfile);

  const getUser = async () => {
    try {
      dispatch(startLoading());
      const user = await getUserProfile(userId);
      dispatch(setUser(user));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(user);
  return <div>Profile</div>;
};
export default Profile;

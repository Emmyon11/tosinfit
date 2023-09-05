'use client';
import { useAppDispatch } from '@/store/hook';
import { openProfile } from '@/store/reducers/profileSlice';

const Button = () => {
  const dispatch = useAppDispatch();
  return (
    <div className=" flex items-center justify-center w-full">
      <button
        onClick={() => dispatch(openProfile())}
        className="login_button my-20 text-base w-44 h-14 md:w-60 md:h-16 md:text-xl font-semibold shadow-slate-400 bg-custom-navy text-custom-brown-2 shadow-md md:p-3"
      >
        Add your details
      </button>
    </div>
  );
};
export default Button;

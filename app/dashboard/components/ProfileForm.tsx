'use client';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import logo from '@/assets/fitness.svg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { closeProfile } from '@/store/reducers/profileSlice';
import { HiXMark } from 'react-icons/hi2';
import { postProfile } from '@/app/components/serverActions/actions';

const ProfileForm = ({ userId }: { userId: string }) => {
  const openReg = useAppSelector((state) => state.profileReg.openProfileReg);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    reset,

    formState: { errors, isSubmitting },
  } = useForm<ProfileInput>();

  const submitReg: SubmitHandler<ProfileInput> = async (data) => {
    let { weight, height, age, goal } = data;

    const profileData = { weight, height, age, goal, userId };
    try {
      const res = await postProfile(profileData);
      dispatch(closeProfile());
      // A toast for either a successful for failed profile registration
      if (res.message === 'Success!') {
        toast.success(
          'Profile update is successful. Redirecting to Login Page !',
          {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main
      className={
        openReg
          ? 'flex justify-center items-center w-screen mt absolute h-screen md:h-full top-0 right-0 left-0 md:bottom-0 bg-black bg-opacity-50 z-20 '
          : 'hidden'
      }
      // logic to hide and show the form onclick on the addetails button
    >
      <ToastContainer />
      <div className="  bg-custom-navy text-custom-brown-2 p-10 w-full md:w-1/3 rounded-md shadow-xl relative">
        <div
          onClick={() => dispatch(closeProfile())}
          className="text-3xl text-red-600 absolute right-5-5 top-5"
        >
          <HiXMark />
        </div>
        <div className="hidden md:flex items-center justify-center ">
          <Image height={50} width={50} src={logo} alt="logo_image" />
          <div className="uppercase text-2xl tracking-wide text-custom-brown-3">
            <div className="font-roboto_mono">tosinfit</div>
          </div>
        </div>
        <h1 className="text-center">Fill in details to update your profile</h1>
        <div>
          <form
            className="flex flex-col gap-1 w-full mt-6 text-custom-navy"
            autoComplete="off"
            onSubmit={handleSubmit(submitReg)}
          >
            <label className="text-custom-brown-3">Age</label>
            <input
              placeholder="Age"
              className="rounded-sm p-2"
              type="text"
              {...register('age', {
                required: 'You must provide a age',
                min: {
                  value: 15,
                  message: 'Minimum age cannot be less than 15',
                },
                max: {
                  value: 80,
                  message: `maximum age cannot be more than 80`,
                },
              })}
            />
            {errors.age && <p className="error">{errors.age.message}</p>}
            <label className="text-custom-brown-3">Weight in kg</label>
            <input
              placeholder="Weight in kg"
              className="rounded-sm p-2"
              type="text"
              {...register('weight', {
                required: 'You must provide a weight in kg',
                min: {
                  value: 20,
                  message: 'Minimum weight cannot be less than 20kg',
                },
                max: {
                  value: 500,
                  message: `maximum weight cannot be more than 500kg`,
                },
              })}
            />
            {errors.weight && <p className="error">{errors.weight.message}</p>}
            <label className="text-custom-brown-3">Height in cm</label>

            <input
              placeholder="Height in cm"
              className="rounded-sm p-2"
              type="text"
              {...register('height', {
                required: 'You must provide a height in cm',
                min: {
                  value: 50,
                  message: 'Minimum height cannot be less than 50cm',
                },
                max: {
                  value: 300,
                  message: `maximum height cannot be more than 300cm`,
                },
              })}
            />
            {errors.height && <p className="error">{errors.height.message}</p>}

            <label htmlFor="goal" className="text-custom-brown-3">
              What is your goal
            </label>
            <select
              className="rounded-sm p-2"
              id="goal"
              {...register('goal', {
                required: 'You are to state your goal of joining Tosinfit',
              })}
            >
              <option value="">Select Your End Goal...</option>
              <option value="GETJACKED">Get jacked</option>
              <option value="GETRIPPED">Get ripped</option>
              <option value="STAYFIT">Stay fit</option>
              <option value="LOSEWEIGHT">Lose Weight</option>
            </select>
            {errors.goal && <p className="error">{errors.goal.message}</p>}
            <div className=" flex justify-center mt-9">
              <button className="login_button" disabled={isSubmitting}>
                {isSubmitting ? 'Loadin...' : 'Update'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
export default ProfileForm;

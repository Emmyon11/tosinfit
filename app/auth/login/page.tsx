'use client';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import logo from '@/assets/fitness.svg';
import { Roboto_Mono } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Roboto = Roboto_Mono({ subsets: ['latin'] });

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    reset,

    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>();

  const submitReg: SubmitHandler<LoginInput> = async (data) => {
    try {
      const res = await signIn('credentials', {
        ...data,
        redirect: false,
      });
      if (res?.error) {
        toast.error(res.error, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      router.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex  justify-center items-center bg-custom-brown-1 h-screen w-screen mt">
      <ToastContainer />
      <div className="  bg-custom-navy text-custom-brown-2 p-10 w-2/3 md:w-1/3 rounded-md shadow-xl">
        <div className="flex items-center justify-center">
          <Image height={50} width={50} src={logo} alt="logo_image" />
          <div className="uppercase text-2xl tracking-wide text-custom-brown-3">
            <div className={Roboto.className}>tosinfit</div>
          </div>
        </div>
        <h1 className="text-center">Fill in details to register</h1>
        <div>
          <form
            className="flex flex-col gap-1 w-full mt-6 text-custom-navy"
            onSubmit={handleSubmit(submitReg)}
            autoComplete="off"
          >
            <label className="text-custom-brown-3">Email adress</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="rounded-sm p-2"
              {...register('email', {
                required: 'You must provide a valid email address',
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
            <label className="text-custom-brown-3">Password</label>
            <input
              type="password"
              autoComplete="off"
              placeholder="123456"
              className="rounded-sm p-2"
              {...register('password', {
                required: 'You must specify a password',
                minLength: 6,
              })}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
            <div className=" flex justify-center mt-9">
              <button className="login_button" disabled={isSubmitting}>
                {isSubmitting ? 'Loadin...' : 'Login'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
export default Login;

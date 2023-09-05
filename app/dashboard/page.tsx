import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import avater from '@/assets/avater.svg';
import disimg from '@/assets/tosinfit custom.jpg';
import Button from './components/Button';
import ProfileForm from './components/ProfileForm';
import Profile from './components/Profile';

const Dashboard = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/auth/login');
  }

  const userId = session?.user.id;

  return (
    <main className="w-screen h-full relative">
      <div className="grid md:grid-flow-row md:grid-cols-3 h-1/3 w-screen">
        <div className="bg-custom-brown-3 h-full w-full">
          <div className="mt-6">
            <h1 className="text-4xl font-bold text-custom-navy text-center">
              Welcome
            </h1>
            <h2 className="text-center text-xl tracking-wider text-gray-500">
              {session?.user.name}
            </h2>
            <Image
              width={100}
              height={100}
              src={avater}
              alt="avater"
              className="mx-auto my-0 mt-3"
            ></Image>
          </div>
          <div className="hidden md:block text-2xl lg:text-3xl xl:text-4xl absolute bg-custom-brown-2 left-1/4 top-16 p-8  font-bold ml-4 rounded-lg text-slate-600 z-10">
            Remember fitness is a maraton and not a sprint
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          width={0}
          height={0}
          src={disimg}
          alt="disimg"
          className="object-contain w-100 h-100"
        />
        <div className="text-custom-brown-1 text-xl md:text-3xl lg:text-4xl xl:text-6xl absolute z-10 top-1/3  w-full capitalize text-center font-pacifito bg-black p-4 md:p-6 xl:p-8">
          we'll be with you all the way
        </div>
      </div>
      <Button />
      <ProfileForm userId={userId} />
      <Profile userId={userId} />
    </main>
  );
};
export default Dashboard;

import Image from 'next/image';
import infoImg from '@/assets/undraw_personal_trainer_re_cnua.svg';

const MoreHome = () => {
  return (
    <section className="bg-custom-brown-3 p-6 relative h-60 md:h-72 lg:h-96 xl:h-screen w-full overflow-hidden">
      <div>
        <div className="w-1/2 h-auto overflow-hidden absolute z-10">
          <Image src={infoImg} alt="info-img " className="" />
        </div>
        <div className="absolute top-14 md:top-16 lg:top-28 w-1/2 right-5 md:right-48 bg-black h-2/3 hover:cursor-default text-custom-brown-3 p-5 md:p-10 md:pl-40 rounded-md">
          <h1 className="font-roboto_mono uppercase text-base md:text-xl lg:-2xl xl:text-6xl font-semibold">
            A workout guide tailored just for you
          </h1>
          <p className="text-sm md:base lg:text-2xl font opacity-70">
            We offer a wide range of well reserched and thought out workout plan
            and we'll find the one that fit you best
          </p>
        </div>
      </div>
    </section>
  );
};
export default MoreHome;

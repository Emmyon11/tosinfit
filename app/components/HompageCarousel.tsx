'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import images for the sliders
import Image from 'next/image';
import slider1 from '@/assets/tosinFit-home1.jpg';
import slider2 from '@/assets/tosinFit-home2.jpg';
import slider3 from '@/assets/tosinFit-home3.jpg';
import slider4 from '@/assets/tosinFit-home4.jpg';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HompageCarousel = () => {
  return (
    <div className="w-full  md:h-96 relative">
      {/* Uses the swipper to create a carousel for the home page */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="">
            <Image
              width={0}
              height={0}
              src={slider1}
              alt="slider 1"
              className="object-cover block w-100 h-100"
            />
            <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-center z-20">
              <p className="bg-custom-navy bg-opacity-40 text-xl md:text-2xl xl:text-4xl text-custom-brown-3 font-inconsolata mt-36 md:mt-64 p-4 rounded-md shadow-md animate-pulse">
                "Your body can withstand almost anything. It's your mind you
                have to convince."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image
              width={0}
              height={0}
              src={slider2}
              alt="slider 1"
              className="object-cover block w-100 h-100"
            />
            <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-center z-20">
              <p className="bg-custom-navy bg-opacity-40 text-xl md:text-2xl xl:text-4xl text-custom-brown-3 font-inconsolata mt-36 md:mt-64 p-4 rounded-md shadow-md animate-pulse">
                "You don't have to be great to start, but you have to start to
                be great."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image
              width={0}
              height={0}
              src={slider3}
              alt="slider 1"
              className="object-cover block w-100 h-100"
            />
            <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-center z-20">
              <p className="bg-custom-navy bg-opacity-40 text-xl md:text-2xl xl:text-4xl text-custom-brown-3 font-inconsolata mt-36 md:mt-64 p-4 rounded-md shadow-md animate-pulse">
                "The pain you feel today will be the strength you feel
                tomorrow."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image
              width={0}
              height={0}
              src={slider4}
              alt="slider 1"
              className="object-cover block w-100 h-100"
            />
            <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-center z-20">
              <p className="bg-custom-navy bg-opacity-40 text-xl md:text-2xl xl:text-4xl text-custom-brown-3 font-inconsolata mt-36 md:mt-64 p-4 rounded-md shadow-md animate-pulse">
                "The only bad workout is the one that didn't happen."
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default HompageCarousel;

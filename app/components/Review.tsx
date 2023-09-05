'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import bgImage from '@/assets/tosinFit-home3.jpg';

// Received the reviews as props from the parent components
const Review = ({ reviews }: { reviews: Review[] | undefined }) => {
  return (
    <section className="h-40 bg-custom-brown-3 p-3">
      <Swiper
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        centeredSlides={true}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {/* Mapped through the reviews gotten passed as props */}
        {reviews?.map((review) => {
          return (
            <SwiperSlide key={review?.id} className="">
              <div className="relative backdrop-blur-3xl w-full h-full text-custom-brown-3 duration-300 rounded-md overflow-clip shadow-md">
                <Image src={bgImage} alt="bacground image" />
                <div className="absolute top-0 left-0 bottom-0 flex items-center p-8 justify-center flex-col backdrop-blur-md h-full w-full ">
                  <h1 className=" text-base font-inconsolata capitalize">
                    {review?.name}
                  </h1>
                  <p className="text-xs font-roboto_mono font-extralight text-custom-brown-1 tracking-tight">
                    {review?.body}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Review;

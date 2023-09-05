'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

// images import for the cards
import fit from '@/assets/goals/stayfit.jpg';
import ripped from '@/assets/goals/Ripped male.jpg';
import jacked from '@/assets/goals/get jacked.jpg';
import loseWeight from '@/assets/goals/lose weight.jpg';

const containerVarient = {
  initial: {
    opacity: 0.5,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.2, staggerChildren: 0.2, when: 'beforeChildren' },
  },
};

const childVariant = {
  initial: {
    y: 50,
  },
  animate: {
    y: 0,
    transition: {
      ease: 'linear',
      duration: 0.2,
    },
  },
};

const Goal = () => {
  return (
    <section className=" bg-custom-brown-3">
      <h1 className="text-center text-xl md:text-2xl lg:text-4xl text-custom-navy p-3 pt-6 md:p-6 font-inconsolata font-bold">
        Pick a goal. We'll tailor a workout routine and diet just for you
      </h1>
      <motion.div
        variants={containerVarient}
        initial="initial"
        animate="animate"
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4"
      >
        <motion.div
          variants={childVariant}
          className="rounded-md shadow-md bg-custom-navy text-custom-brown-2 overflow-hidden cursor-pointer group"
        >
          <div className="h-2/3 w-full overflow-hidden shadow-inner">
            <Image
              width={0}
              height={0}
              src={loseWeight}
              className="object-cover w-full h-full group-hover:scale-125 duration-300"
              alt=""
            />
          </div>
          <div className="p-4">
            <h1 className="font-roboto_mono font-semibold text-xl text-custom-brown-3">
              Lose weight
            </h1>
            <p className="font-light text-gray-300">
              This <span className="text-custom-brown-3">workout </span>routine
              will help you to get in shape
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={childVariant}
          className="rounded-md shadow-md bg-custom-navy text-custom-brown-2 overflow-hidden cursor-pointer group"
        >
          <div className="h-2/3 w-full overflow-hidden shadow-inner">
            <Image
              width={0}
              height={0}
              src={fit}
              className="object-cover w-full h-full group-hover:scale-125 duration-300"
              alt=""
            />
          </div>
          <div className="p-4">
            <h1 className="font-roboto_mono font-semibold text-xl text-custom-brown-3">
              Stay Fit
            </h1>
            <p className="font-light text-gray-300">
              This <span className="text-custom-brown-3">workout </span>routine
              will help you maintainn an optimal physique
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={childVariant}
          className="rounded-md shadow-md bg-custom-navy text-custom-brown-2 overflow-hidden cursor-pointer group"
        >
          <div className="h-2/3 w-full overflow-hidden shadow-inner">
            <Image
              width={0}
              height={0}
              src={jacked}
              className="object-cover w-full h-full group-hover:scale-125 duration-300"
              alt=""
            />
          </div>
          <div className="p-4">
            <h1 className="font-roboto_mono font-semibold text-xl text-custom-brown-3">
              Get Jacked
            </h1>
            <p className="font-light text-gray-300">
              This <span className="text-custom-brown-3">workout </span>routine
              will help you pack muscle masses
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={childVariant}
          className="rounded-md shadow-md bg-custom-navy text-custom-brown-2 overflow-hidden cursor-pointer group"
        >
          <div className="h-2/3 w-full overflow-hidden shadow-inner">
            <Image
              width={0}
              height={0}
              src={ripped}
              className="object-cover w-full h-full group-hover:scale-125 duration-300"
              alt=""
            />
          </div>
          <div className="p-4">
            <h1 className="font-roboto_mono font-semibold text-xl text-custom-brown-3">
              Get Ripped
            </h1>
            <p className="font-light text-gray-300">
              This <span className="text-custom-brown-3">workout </span>routine
              will help you acheive a lean physics
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Goal;

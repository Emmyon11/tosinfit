'use client';
import Image from 'next/image';
import logo from '@/assets/fitness.svg';
import { Roboto_Mono } from 'next/font/google';
import { RxHamburgerMenu } from 'react-icons/rx';
import { HiXMark } from 'react-icons/hi2';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import useWindowSize from '@/hooks/useWindowSize';

const Roboto = Roboto_Mono({ subsets: ['latin'] });

const Nav = () => {
  const [dropdown, setDropdown] = useState(false);
  const Size = useWindowSize();

  useEffect(() => {
    if ((Size.width as number) > 768) {
      setDropdown(false);
    }
  }, [Size]);
  return (
    <nav className="font-roboto_mono sticky top-0 z-50 ">
      <div className="min-w-full w-screen  h-24 bg-custom-navy flex p-6 justify-between">
        <div className="flex items-center justify-center">
          <Image height={100} width={100} src={logo} alt="logo_image" />
          <div className="uppercase text-4xl tracking-wide text-custom-brown-3">
            <div className={Roboto.className}>tosinfit</div>
          </div>
        </div>
        {/* Switches between mobile and deskktop */}
        <div
          className={
            dropdown
              ? 'mobile-container duration-500'
              : 'hidden md:desktop-container'
          }
        >
          <Link
            className={dropdown ? 'mobile-links' : 'md:desktop-links'}
            href="/"
          >
            Home
          </Link>
          <Link
            className={dropdown ? 'mobile-links' : 'md:desktop-links'}
            href="/dashboard"
          >
            Profile
          </Link>
          <Link
            className={dropdown ? 'mobile-links' : 'md:desktop-links'}
            href="/about"
          >
            About
          </Link>
          <Link
            className={dropdown ? 'mobile-links ' : 'md:desktop-links'}
            href="/contact"
          >
            Contact us
          </Link>
        </div>

        <div className="hidden md:flex gap-3 items-center justify-center">
          <button className="auth_button bg-custom-brown-3  text-custom-navy hover:bg-custom-brown-1">
            <Link href="/auth/login"> Login</Link>
          </button>
          <button className="auth_button bg-custom-brown-1 text-custom-navy hover:bg-custom-brown-3 ">
            <Link href="/auth/register"> Sign up</Link>
          </button>
        </div>
        <div
          className="text-custom-brown-3 text-3xl flex items-center justify-center md:hidden "
          onClick={() => setDropdown(!dropdown)}
        >
          {dropdown ? <HiXMark /> : <RxHamburgerMenu />}
        </div>
      </div>
    </nav>
  );
};
export default Nav;

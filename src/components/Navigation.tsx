'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const bg = document.querySelector('.bg');
    pathname === '/'
      ? bg?.classList.remove('hidden')
      : bg?.classList.add('hidden');
  }, [pathname]);

  useEffect(() => {
    // No need for direct DOM manipulation in Next.js
    // We'll use state-based conditional rendering instead
  }, [openMenu]);

  return (
    <>
      {/* Background Shapes */}
      <div className="bg fixed -z-50 w-full h-full flex justify-center items-center lg:scale-125">
        <div className="shape absolute w-60 animate-[spin6_18s_linear_infinite] aspect-square bg-gradient-to-b from-[#2d49ff] to-[#0DCCFF] opacity-20" />
        <div className="shape absolute w-[17.25rem] animate-[spin12_20s_linear_infinite] aspect-square bg-gradient-to-b from-[#2d49ff] to-[#0DCCFF] opacity-20" />
        <div className="shape absolute w-[18.75rem] animate-[reversespim6_22s_linear_infinite] aspect-square bg-gradient-to-b from-[#2d49ff] to-[#0DCCFF] opacity-20" />
        <div className="shape absolute w-[21rem] animate-[reversespin12_24s_linear_infinite] aspect-square bg-gradient-to-b from-[#2d49ff] to-[#0DCCFF] opacity-20" />
        <div className="shape absolute w-[22.5rem] animate-[spin6_24s_linear_infinite] aspect-square bg-gradient-to-b from-[#2d49ff] to-[#0DCCFF] opacity-20" />
        <div className="shape absolute w-[26.5] animate-[spin12_24s_linear_infinite] aspect-square bg-gradient-to-b from-[#2d49ff] to-[#0DCCFF] opacity-20" />
        <div className="shape absolute w-[28rem] animate-[reversespin6_24s_linear_infinite] aspect-square bg-gradient-to-b from-[#2d49ff] to-[#0DCCFF] opacity-20" />
      </div>

      {/* Mobile Menu */}
      <div
        className={`menu fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center gap-8 z-50 bg-[#0a0e14] bg-opacity-95 transition-all duration-300 ${
          openMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <Link
          href="/"
          className="text-5xl font-semibold text-white hover:text-[#2EE0D0] transition-all duration-300 transform hover:scale-105 origin-center"
          onClick={() => {
            setOpenMenu(false);
          }}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-5xl font-semibold text-white hover:text-[#2EE0D0] transition-all duration-300 transform hover:scale-105 origin-center"
          onClick={() => {
            setOpenMenu(false);
          }}
        >
          About
        </Link>
        <Link
          href="/services"
          className="text-5xl font-semibold text-white hover:text-[#2EE0D0] transition-all duration-300 transform hover:scale-105 origin-center"
          onClick={() => {
            setOpenMenu(false);
          }}
        >
          Services
        </Link>
        <Link
          href="/portfolio"
          className="text-5xl font-semibold text-white hover:text-[#2EE0D0] transition-all duration-300 transform hover:scale-105 origin-center"
          onClick={() => {
            setOpenMenu(false);
          }}
        >
          Portfolio
        </Link>
        <Link
          href="/contact"
          className="text-5xl font-semibold text-white hover:text-[#2EE0D0] transition-all duration-300 transform hover:scale-105 origin-center"
          onClick={() => {
            setOpenMenu(false);
          }}
        >
          Contact
        </Link>
      </div>

      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-[55] ">
        <div className="container grid grid-cols-3 items-center pt-7">
          <button
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
            className="relative w-fit text-xl font-semibold flex items-center select-none group hover:scale-110 transition-all duration-300 z-[60]"
          >
            <div className="hamburger flex flex-col w-9 h-6 justify-center items-center relative">
              {/* Hamburger Lines - Transform to X when menu is open with original animations */}
              <div
                className={`absolute h-0.5 w-7 transition-all duration-300 ${
                  openMenu
                    ? 'rotate-45 translate-y-0 bg-[#2EE0D0]'
                    : 'rotate-0 -translate-y-2 bg-slate-50 animate-[shrink_2s_linear_infinite]'
                }`}
              />
              <div
                className={`h-0.5 w-7 transition-all duration-300 ${
                  openMenu
                    ? 'opacity-0 scale-0 bg-[#2EE0D0]'
                    : 'opacity-100 scale-100 bg-[#2EE0D0] animate-[shrink_2.5s_linear_infinite]'
                }`}
              />
              <div
                className={`absolute h-0.5 w-7 transition-all duration-300 ${
                  openMenu
                    ? '-rotate-45 translate-y-0 bg-[#2EE0D0]'
                    : 'rotate-0 translate-y-2 bg-slate-50 animate-[shrink_1.5s_linear_infinite]'
                }`}
              />
            </div>
          </button>
          <Link
            href="/"
            className="text-2xl w-fit h-fit justify-self-center select-none tracking-wide whitespace-nowrap hover:text-[#2EE0D0] hover:scale-105 transition-all duration-300"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            Daffa Rafi
          </Link>
          <Link
            href="/portfolio"
            className="text-xl font-semibold w-fit h-fit flex items-center justify-self-end group"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            <span className="block h-0 -mr-0.5 border-8 border-transparent border-l-[#2EE0D0] group-hover:animate-[pointbounce_0.5s_ease-out_infinite_alternate] group-hover:border-l-[#FF4444] transition-all duration-300 select-none" />
            <div className="group-hover:scale-110 transition-all duration-300 select-none">
              Portfolio{' '}
              <span className="block h-0.5 w-5 bg-[#2EE0D0] -mt-1 group-hover:bg-[#FF4444] group-hover:animate-[shrink_2s_linear_infinite] transition-all duration-300" />
            </div>
          </Link>
        </div>
      </nav>

      {/* Bottom Navigation */}
      <div className="undernav fixed bottom-0 w-full z-30">
        <div className="container flex justify-between pb-7">
          <Link href="#" className="text-2xl select-none hidden">
            ★
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;

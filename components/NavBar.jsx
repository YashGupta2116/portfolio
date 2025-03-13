'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <Link href='#top'>
          {/* <Image
            src={'assests.logo'}
            alt='Hemlo'
            width={10}
            height={10}
            className='w-28 cursor-pointer mr-14'
          /> */}
        </Link>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
          <li>
            <Link href={'#top'} className='!font-ovo'>
              Home
            </Link>
          </li>
          <li>
            <Link href={'#about'} className='!font-ovo'>
              About me
            </Link>
          </li>
          <li>
            <Link href={'#services'} className='!font-ovo'>
              Services
            </Link>
          </li>
          <li>
            <Link href={'#work'} className='!font-ovo'>
              My Work
            </Link>
          </li>
          <li>
            <Link href={'#contact'} className='!font-ovo'>
              Contact me
            </Link>
          </li>
        </ul>

        <div>
          <Link
            href={'#contact'}
            className='!font-ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'
          >
            Contact{' '}
            {/*<Image src='assests.arrow_icon' alt='arrow' className='w-3' />*/}{' '}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

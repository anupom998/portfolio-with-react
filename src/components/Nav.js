import React from 'react';

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase } from 'react-icons/bs';
import { MdContactMail } from "react-icons/md";

import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        {/* nav inner */}
        <div className='w-full bg-black/20 h-[75px] backdrop-blur-2xl rounded-full max-w-[400px] mx-auto px-5 flex    justify-between items-center text-xl text-white/50'>
          <Link
            to='home'
            className='cursor-pointer w-[60px] h-[60] flex items-center justify-center'
            activeClass='active'
            offset={-200}
            spy={true}
            smooth={true}
          >
            <BiHomeAlt />
          </Link>
          <Link
            to='about'
            className='cursor-pointer w-[60px] h-[60] flex items-center justify-center'
            activeClass='active'
            spy={true}
            smooth={true}
          >
            <BiUser />
          </Link>
          {/* <Link
            to='service'
            className='cursor-pointer w-[60px] h-[60] flex items-center justify-center'
            activeClass='active'
            spy={true}
            smooth={true}
          >
            <BsClipboardData />
          </Link> */}
          <Link
            to='work'
            className='cursor-pointer w-[60px] h-[60] flex items-center justify-center'
            activeClass='active'
            spy={true}
            smooth={true}
          >
            <BsBriefcase />
          </Link>
          <Link
            to='contact'
            className='cursor-pointer w-[60px] h-[60] flex items-center justify-center'
            activeClass='active'
            spy={true}
            smooth={true}
          >
            <MdContactMail />
          </Link>
        </div>
      </div>
    </nav>
  )
};

export default Nav;
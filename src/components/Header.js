import React from 'react';
// logo
import Logo from "../assets/MY-LOGO-3.png";

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img
              src={Logo}
            />
          </a>
          {/* button */}
          <button className='btn btn-sm'>
            Work With Me
          </button>
        </div>
      </div>
    </header>
  )
};

export default Header;
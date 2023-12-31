import React from 'react';
// image
import Image from '../assets/my-pic.png';
// icon
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='flex-1 text-center font-secondary lg:text-left'
          >
            <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[90px]'>
              Anupom <span>Mondol</span>
            </h1>
            <div className='mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-4'>I am a </span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Designer',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
                cursor={false}
              /> 
            </div>
            <p className='mb-8 max-w-lg mx-auto lg:mx-0'>
                Hi I'm Anupom. A passionate <span className='text-gradient'>Full-Stack Developer</span> based in Khulna, Bangladesh.  
            </p>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>
                Contact Me
              </button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
            {/* socials */}
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 mb-8'>
              <a href='#'>
                <FaYoutube />
              </a>
              <a href='#'>
                <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/anupom-mondol-927187207/'>
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[400px]'>
            <img src={Image} alt=''/>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Banner;

/* const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center  border border-yellow-500 border-solid' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          // { text }
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[90px]'
            >
              Anupom <span>Mondol</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='mr-4'>I am a </span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Designer',
                  2000,
                  'Youtuber',
                  2000
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
                cursor={false}
              /> 
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
              আমি একজন ওয়েব ডেভেলপার ।
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <button className='btn btn-lg'>
                Contact Me
              </button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </motion.div>
            // { socials }
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 mb-8'>
              <a href='#'>
                <FaYoutube />
              </a>
              <a href='#'>
                <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/anupom-mondol-927187207/'>
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          // { image}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[400px]'>
            <img src={Image} alt=''/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}; */

// I learn basic programming from Harvard's cs50 course on edx (educational platform) and realize that I love the process of problem solving and critical thinking. Then I took complete web development bootcamp by Dr Angela Yu on Udemy. Now I love to build beautiful, SEO friendly websites with modern functionalities.
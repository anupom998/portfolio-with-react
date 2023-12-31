 
// import React from 'react';
// // icon
// import { BsArrowUpRight } from 'react-icons/bs';
// // motion
// import { motion } from 'framer-motion';
// // variants
// import { fadeIn } from '../variants';

// // service data
// const services = [{
//     name: 'Development',
//     description: 'I am a MERN stack web developer who can build dynamic and responsive web applications using MongoDB, Express, React, and Node.js. I am passionate about learning new skills and exploring new challenges in web development. I am always eager to collaborate with other developers and clients to deliver high-quality products that meet their needs and expectations.',
//     link: 'Learn more',
//   },
//   {
//     name: 'UI/UX Design',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita est.',
//     link: 'Learn more',
//   },
//   {
//     name: 'Digital Marketing',
//     description: 'I have worked as a social media manager and virtual assistant before. So I have knowledge about SEO, copywriting etc. That is why I can build websites which will be seo friendly, well organized and fast.',
//     link: 'Learn more',
//   }
// ]

// const Services = () => {
//   return (
//     <section className='section h-[900px]' id='service'>
//       <div className='container mx-auto'>
//         <div className='flex flex-col lg:flex-row'>
//           {/* text & img */}
//           <motion.div
//             variants={fadeIn('left', 0.5)}
//             initial='hidden'
//             whileInView={'show'}
//             viewport={{ once: false, amount: 0.3 }}
//             className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat  mix-blend-lighten mb-12 lg:mb-0'
//           >
//             <h2 className='h2 text-accent mb-6'>
//               What I Do
//             </h2>
//             <h3 className='h3 max-w-[455px] mb-6'>
//               I am a freelance full-stack web developer.
//             </h3>
//             <button className='btn btn-sm'>See my Work</button>
//           </motion.div>
//           {/* services */}
//           <motion.div
//             variants={fadeIn('right', 0.5)}
//             initial='hidden'
//             whileInView={'show'}
//             viewport={{ once: false, amount: 0.3 }}
//             className='flex-1'>
//             {/* service list */}
            
//               {services.map((service, index) => {
//                 // destructure service
//                 const { name, description, link } = service;
//                 return (
//                   // single service item
//                   <div
//                     key={index}
//                     className='border-b border-white/20 h-[146px] mb-[38px] flex'
//                   >
//                     {/* service's name and description */}
//                     <div className='max-w-[476px]'>
//                       <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
//                       <p className='font-secondary leading-tight'>{description}</p>
//                     </div>
//                     {/* link */}
//                     <div className='flex flex-col flex-1 items-end'>
//                       <a
//                         href='#'
//                         className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
//                       >
//                         <BsArrowUpRight />
//                       </a>
//                       <a
//                         href='#'
//                         className='text-gradient text-sm'>{link}</a>
//                     </div>
//                   </div>
//                 )
//               })}
            
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// };

// export default Services;

/* 
development--I am a MERN stack web developer who can build dynamic and responsive web applications using MongoDB, Express, React, and Node.js. I am passionate about learning new skills and exploring new challenges in web development. I am always eager to collaborate with other developers and clients to deliver high-quality products that meet their needs and expectations.

design--I am also skilled in UI/UX design, which is the process of creating user-friendly and aesthetically pleasing interfaces for web applications. UI/UX design involves researching the target audience, prototyping the layout and functionality, testing the usability and accessibility, and implementing the feedback.

Some of the tools that I use for UI/UX design include:

- Adobe XD, Photoshop, and Illustrator for creating wireframes, mockups, and graphics.
- Bootstrap, Material UI, and Tailwind CSS for developing responsive and modern web pages.
- Figma, InVision, and Balsamiq for collaborating and sharing the design with clients and stakeholders.

I am passionate about creating web applications that not only work well, but also look great and provide a satisfying user experience.


*/

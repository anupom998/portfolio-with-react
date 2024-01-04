import { React, useState } from 'react';
// axios
import axios from 'axios';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Contact = () => {
// use state hooks to store the input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

 // handle submit function
const handleSubmit = async (ev) => {
  // prevent the default browser behavior
  ev.preventDefault();

  // create an object with the form data
  const formData = {
    name: name,
    email: email,
    message: message
  };

  // use a try catch block to handle the async operation
  try {
    // send a post request to the backend api with axios and await the response
    const res = await axios.post('http://localhost:5000/api/contact', formData);
    // handle the response from the backend
    console.log(res.data);
    // show an alert with the success message
    // alert('Email sent successfully');
    // clear the input fields
    setName("");
    setEmail("");
    setMessage("");
  } catch (err) {
    // handle the error from the backend
    console.log(err);
    // show an alert with the error message
    // alert('Email failed to send');
  }
};


 
  return (
    <section className='py-16 lg:section lg:mt-28' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <div className='flex-1 flex justify-start items-center'>
            <motion.div
              variants={fadeIn('right', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br />
                together
              </h2>
            </motion.div>
          </div>
          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
            onSubmit={handleSubmit}
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              id='name'
              name='name'
              type='text'
              placeholder='Your name'
               // use the onChange event handler to update the state
              onChange={(ev) => setName(ev.target.value)}
              // use the value attribute to bind the state
              value={name}
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              id='email'
              name='email'
              required
              type='email'
              placeholder='Your email'
               // use the onChange event handler to update the state
              onChange={(ev) => setEmail(ev.target.value)}
              // use the value attribute to bind the state
              value={email}
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              id='email'
              name='email'
              required
              placeholder='Your message'
               // use the onChange event handler to update the state
              onChange={(ev) => setMessage(ev.target.value)}
              // use the value attribute to bind the state
              value={message}
            />
            <button className='btn btn-lg' type='submit'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
};

export default Contact;

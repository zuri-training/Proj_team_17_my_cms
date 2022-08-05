import React from 'react';
import Button from '../components/general/Button';

const ContactUs = () => {
  return (
    <section className='contact h-screen'>
      <div className='contact-content bg-white rounded-xl mx-auto mt-40'>
      <div className='mt-24 '>
        <div className='contact-text-container mb-10'>
          <h1 className="text-center mb-7 font-semibold overflow-hidden text-4xl">Contact Us</h1>
          <p className='text-center'>Please talk to us, we would love to hear from you!</p>
        </div>

        <div className='contact-form-container'>
          <form className='flex flex-row justify-center'>
            <div className='contact-col px-5'>
              <div className=" w-[481px] mb-6">
                <label htmlFor="fn-input" className="block mb-2 text-sm font-medium  text-black">First Name</label>
                <input
                  type="email"
                  id="fn-input"
                  placeholder="johndoe@example.com"
                  className=" h-12 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-gray-500 block w-full p-2.5 pr-20 " 
                  required
                />
              </div>
              <div className=" w-[481px] mb-6">
                <label htmlFor="ln-input" className="block mb-2 text-sm font-medium  text-black">Last Name</label>
                <input
                  type="email"
                    id="ln-input"
                  placeholder="johndoe@example.com"
                  className=" h-12 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-gray-500 block w-full p-2.5 pr-20 " 
                  required
                />
              </div>
              <div className=" w-[481px] mb-6">
                <label htmlFor="em-input" className="block mb-2 text-sm font-medium  text-black">Email Address</label>
                <input
                  type="email"
                  id="em-input"
                  placeholder="johndoe@example.com"
                  className=" h-12 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-gray-500 block w-full p-2.5 pr-20 " 
                  required
                />
              </div>
            </div>

            <div className='contact-col px-5'>
              <div className=" w-[481px]">
                <label htmlFor="em-input" className="block mb-2 text-sm font-medium  text-black">Enter Message</label>
                <textarea 
                  id="w3review" 
                  name="w3review" 
                  rows="11" 
                  cols="50" 
                  placeholder='Type your message here'
                  className=" rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm mb-4 focus:ring-gray-500 block w-full p-2.5" 
                  required
                >
                </textarea>
                <Button name='Send Message' />
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
}

export default ContactUs;
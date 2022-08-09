import React from 'react';
import Button from '../components/general/Button.js';
import ErrorImg from '../assets/img/error-img.svg';

const Error = () => {
  return (
    <div>
        <div className='max-w-4xl h-screen mx-auto flex flex-col justify-center lg:px-0 px-8'>
            <div className='flex md:flex-row flex-col justify-around items-center'>
                <div className='mx-auto md:mb-0 mb-12 md:text-left text-center'>
                    <h2 className='md:text-8xl text-6xl font-medium overflow-hidden'>Oops...</h2>
                    <p className='mt-16 lg:text-3xl text-2xl overflow-hidden mb-9'>Sorry We can't seem to find the page <br /> you're looking for.</p>
                    <Button name="Back to Homepage" />
                </div>

                <div className='mx-auto'>
                    <img src={ErrorImg} alt="error" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Error;
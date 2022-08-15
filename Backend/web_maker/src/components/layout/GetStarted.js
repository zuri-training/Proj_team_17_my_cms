import React from 'react';
import Button from '../general/Button';
import { Link } from 'react-router-dom';


const GetStarted = () => {
  return (
    <header className='w-full py-52 xl:px-0 px-5'>
        <div className='max-w-6xl my-0 mx-auto text-center flex flex-col items-center'>
            <h1 className='arima-heading text-white font-semibold xl:text-6xl lg:text-5xl text-4xl not-italic mb-8 overflow-hidden'>
              Best Website Builder For <br/> Creatives
            </h1>
            <p className='font-medium text-white lg:text-2xl text-xl mb-16'>Build your website and showcase your talents with ease - No code required</p>
            <Link to="/signup"><Button name="Get Started"/></Link>
        </div>
    </header>
  );
}

export default GetStarted;
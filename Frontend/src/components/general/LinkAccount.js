import React from 'react';
import { Link } from 'react-router-dom';

const LinkMyAccount = () => {
  return (
    <section className='w-full py-36 xl:px-0 px-5'>
        <div className='flex flex-row justify-between items-start max-w-6xl my-0 mx-auto'>
            <div className='flex flex-col items-start max-w-xl'>
                <h1 className='arima-heading text-5xl mb-2 overflow-hidden font-bold leading-relaxed color1'>Integration</h1>
                <p className='text-2xl not-italic mb-8 w-full font-medium'>Let your audience get to know you better by having access 
                    to all your contents in one place
                </p>
                <Link to='' className='font-semibold color1'>Link Account →</Link>
            </div>
            <div className='flex'>
                <span className='lmc-box'></span>
                <span className='lmc-box'></span>
            </div>
        </div>
    </section>
  );
}

export default LinkMyAccount;
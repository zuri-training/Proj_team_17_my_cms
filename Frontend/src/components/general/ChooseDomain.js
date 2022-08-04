import React from 'react';
import Button from './Button';

const ChooseDomain = () => {
  return (
    <section className='w-full py-36 xl:px-0 px-5'>
        <div className='flex flex-col items-center max-w-6xl my-0 mx-auto'>
            <span className='cd-box mb-9'></span>
            <h2 className='arima-heading text-5xl not-italic mb-8 max-w-xl leading-tight overflow-hidden text-center font-medium text-gray-800'>
              Choose an appropriate domain name according to your preference
            </h2>
            <Button name="Choose domain" />
        </div>
    </section>
  );
}

export default ChooseDomain;
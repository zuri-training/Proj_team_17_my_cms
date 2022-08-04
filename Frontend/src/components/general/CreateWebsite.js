import React from 'react';
import Button from './Button';

const CreateWebsite = () => {
  return (
    <section className='w-full py-36 xl:px-0 px-5'>
        <div className='flex flex-col items-center max-w-6xl my-0 mx-auto'>
            <span className='cd-box mb-9'></span>
            <h2 className='arima-heading text-5xl not-italic mb-8 max-w-xl leading-tight text-center font-medium text-gray-800 overflow-hidden'>
              You can now achieve everything you want more easily when you use the right resources, join us now to enjoy great benefits
            </h2>
            <Button name="Create website" />
        </div>
    </section>
  );
}

export default CreateWebsite;
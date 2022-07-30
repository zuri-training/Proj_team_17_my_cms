import React from 'react';
import Button from './Button';

const GetInsights = () => {
  return (
    <section className='w-full py-52 xl:px-0 px-5'>
        <div className='flex flex-row justify-between items-center max-w-7xl my-0 mx-auto'>
            <div className='flex flex-col items-start max-w-xl'>
                <h2 className='text-2xl not-italic mb-8 w-full font-medium'>Get insights on how your contents performing. Get 
                    to understand what your audience wants per time
                </h2>
                <Button name="Get insights" />
            </div>
            <div className='inline-flex'>
                <span className='gi-box'></span>
            </div>
        </div>
    </section>
  );
}

export default GetInsights;
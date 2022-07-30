import React from 'react';
import Button from './Button';

const CreateWebsite = () => {
  return (
    <section className='w-full py-52 xl:px-0 px-5'>
        <div className='flex flex-col items-center max-w-7xl my-0 mx-auto'>
            <span className='cd-box mb-9'></span>
            <h2 className='text-2xl not-italic mb-8 max-w-md text-center font-medium'>You can now achieve everything you want more easily 
                when you use the right resources, join us now to enjoy great benefits
            </h2>
            <Button name="Create website" />
        </div>
    </section>
  );
}

export default CreateWebsite;
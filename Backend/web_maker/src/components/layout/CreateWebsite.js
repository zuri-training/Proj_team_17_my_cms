import React from 'react';
import Button from '../general/Button';
import { Link } from 'react-router-dom';

const CreateWebsite = () => {
  return (
    <section className='w-full py-36 xl:px-0 px-5 resources-header flex items-center'>
        <div className='flex flex-col items-center max-w-6xl my-0 mx-auto '>
            <h2 className='arima-heading text-5xl not-italic mb-8  text-center font-medium text-white overflow-hidden'>
              You can now achieve everything you want more easily when you use the right resources, join us now to enjoy great benefits
            </h2>
            <Link to=''><Button name="Create website" /></Link>
        </div>
    </section>
  );
}

export default CreateWebsite;
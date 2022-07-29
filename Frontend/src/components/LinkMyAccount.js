import React from 'react';
import Button from './Button';

const LinkMyAccount = () => {
  return (
    <section className='w-full py-52 xl:px-0 px-5'>
        <div className='flex flex-row justify-between items-center max-w-7xl my-0 mx-auto'>
            <div className='flex flex-col items-start max-w-xl'>
                <h2 className='text-2xl not-italic mb-8 w-full font-medium'>Let your audience get to know you bettet by having access 
                    to all your contents in one place
                </h2>
                <Button name="Link my accounts" />
            </div>
            <div className='flex'>
                <span className='lmc-box'></span>
                <span className='lmc-box'></span>
                <span className='lmc-box'></span>
            </div>
        </div>
    </section>
  );
}

export default LinkMyAccount;
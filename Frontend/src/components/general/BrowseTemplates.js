import React from 'react';
import Button from './Button';


const BrowseTemplates = () => {
  return (
    <section className='w-full py-52 xl:px-0 px-5'>
        <div className='flex flex-row justify-between items-center max-w-7xl my-0 mx-auto'>
            <div className='flex flex-col items-start max-w-xl'>
                <h2 className='text-2xl not-italic mb-8 w-full font-medium'>Create exceptional  designs by choosing from an 
                    array of easy to use templates
                </h2>
                <Button name="Browse Templates" />
            </div>
            <div className='flex'>
                <span className='bt-box'></span>
                {/* <span className='bt-box'></span> */}
            </div>
        </div>
    </section>
  );
}

export default BrowseTemplates;
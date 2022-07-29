import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full bg-gray-400'>
        <div className='flex flex-row max-w-7xl my-0 mx-auto'>
            <div>
                <h4 className='font-bold'>Products</h4>
            </div>
            <div>
                <h4 className='font-bold'>Resources</h4>
            </div>
            <div>
            <h4 className='font-bold'>Company</h4>
            </div>
            <div>
                <h4 className='font-bold'>Socials</h4>
            </div> 
        </div>
    </footer>
  );
}

export default Footer;
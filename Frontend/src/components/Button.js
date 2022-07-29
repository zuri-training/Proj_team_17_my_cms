import React from 'react';

const Button = (props) => {
  return (
    <>
      <button className='lg:py-4 lg:px-8 py-3.5 px-7 lg:text-base text-sm not-italic font-medium bg-gray-400 rounded cursor-pointer'>
        {props.name}
      </button>
    </>
  );
}

export default Button;
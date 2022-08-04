import React from 'react';

const Button = (props) => {
  return (
    <>
      <button className='btn-bg lg:py-4 lg:px-8 py-3.5 px-7 lg:text-base text-sm not-italic font-medium rounded cursor-pointer'>
        {props.name}
      </button>
    </>
  );
}

export default Button;
import React from 'react';

const Button = (props) => {
  return (
    <>
      <button className='btn-bg py-3 px-6 lg:text-base text-sm not-italic font-medium rounded cursor-pointer'>
        {props.name}
      </button>
    </>
  );
}

export default Button;
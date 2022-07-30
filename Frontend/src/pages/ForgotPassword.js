import React from 'react';
import Button from '../components/general/Button';
import TextInputGroup from '../components/layout/TextInputGroup';

const ForgotPassword = () => {
  return (
    <div className='flex items-center p-0'>
        <div className='first-col'>

        </div>

        <div className='second-col'>
            <div className='content ml-20 flex flex-col justify-center'>
                <div className='texts flex flex-col h-auto'>
                    <h2 className='not-italic'>
                        Forgot Password?
                    </h2>
                    <p className='not-italic text-base'>
                        Oops! <br/>
                        Don’t worry, we’ll help you get back in.
                    </p>
                </div>
                <div className='flex flex-col w-full h-auto'>
                    <form >
                      <TextInputGroup
                      label='Enter your email adress'
                      placeholder='johndoe@example.com'
                      type='email'
                      className='lg:p-4 p-3 w-full input outline-none'
                      />
                    </form>
                    <Button name='Send password recovery link'/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ForgotPassword;
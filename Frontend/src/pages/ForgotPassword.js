import React from 'react';
import forgotp from './../assets/img/forgotp-img.png';


const ForgotPassword = () => {
  return (
    <div className='h-screen flex'>
        <div className="w-2/4 flex flex-col my-auto items-center justify-center bg-uu">
            <img src={forgotp} alt="img" className='forgotp-img' />
        </div>
        <div className='w-1/2 flex flex-col justify-center m-auto'>
            <h1 className="text-center mb-7 font-semibold overflow-hidden text-4xl">Forgot Password?</h1>
            <p className='text-center mb-9 not-italic text-base'>Oops! <br/> Don’t worry, we’ll help you get back in.</p>
            <div className='flex items-center justify-center flex-col'>
                <form >
                    <div className=" w-[481px] mb-6">
                        <label htmlFor="forg-passw-input" className="block mb-2 text-sm font-medium  text-black">Enter your email address</label>
                        <input
                            type="email"
                            id="forg-passw-input"
                            placeholder="johndoe@example.com"
                            className=" h-12 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-gray-500 block w-full p-2.5 pr-20" 
                            required
                        />
                    </div>
                    <button type="submit" className="colorbtn-bg rounded-md font-semibold w-[481px] h-12 bg-gray-400 mt-6 flex items-center justify-center">
                        Send password recovery link
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default ForgotPassword;
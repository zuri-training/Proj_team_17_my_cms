import { useState } from "react";
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "../index.css";
// import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="he  flex">
      
     
      <div className="   w-1/2   ">
        
          
          <div className="text-center  mb-12 mt-10 font-semibold font-nunito text-5xl">
              Sign Up
          </div>
        
        <div className="flex items-center justify-center flex-col">
        
        <form action="submit" method="post">
          
          <div class="w-[481] mb-6 ">
            <label
              for="base-input"
              className="font-nunito font-medium block mb-2 text-sm  text-black dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="base-input"
              placeholder="John Doe"
              className=" h-12 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-gray-500 block w-full p-2.5 pr-20  placeholder-gray-400 dark:text-white " required
            />
             
          </div>
          <div class="w-[481px] mb-6">
            <label
              for="base-input"
              className="block mb-2 text-sm font-medium font-nunito text-black dark:text-gray-300"
            >
              Username
            </label>
            <input
              type="text"
              id="base-input"
              placeholder="johndoe"
              className=" h-12 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-gray-500 block w-full p-2.5 pr-20   dark:placeholder-gray-400 dark:text-white " required
            />
          </div>

          <div class=" w-[481px] mb-6">
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium font-nunito text-black dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="base-input"
              placeholder="johndoe@example.com"
              className=" h-12 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-gray-500 block w-full p-2.5 pr-20 dark:placeholder-gray-400 dark:text-white " required
            />
            <p class="invisible peer-invalid:visible text-red-700 font-light">
                Please enter a valid email address
            </p>
          </div>

          <div class="w-[481px] mb--6 mx-auto relative">
            <div className="w-full">
              <label
                for="base-input"
                className="block mb-2 text-sm font-medium font-nunito text-black dark:text-gray-300"
              >
                Password
              </label>
              <input
                type={open === false ? "password" : "text"}
                id="base-input"
                placeholder="*********"
                className="h-12 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-gray-500 block w-full p-2.5 pr-20dark:placeholder-gray-400 dark:text-white " required
              />
            </div>

            <div className=" text-2xl absolute top-10 right-5">
            
              {open === false ? (
                <FontAwesomeIcon icon={faEye} onClick={toggle} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} onClick={toggle} />
              )}
            </div>
          </div>

          <button className="font-nunito font-semibold w-[481px] h-12 bg-gray-400 mt-6 flex items-center justify-center">
            Sign Up
          </button>
        </form>
        
<div className="flex items-center justify-center flex-col">
        <div className="pt-3">
          <p>Already have an account? <a href="/">Log In</a></p>
        </div>

        <p className="mt-8 mb-8">OR</p>
        
        <div className="mb-12">
          <p className="mb-3">continue with:</p>
          <div className="flex items-center gap-9">
          <div className="w-8 h-8 bg-gray-400 rounded-full">
         
          </div>
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      
      </div>
      </div>
      <div className="bg-gray-400 w-2/4  bg-uu"></div>
    </div>
  );
};

export default SignUp;

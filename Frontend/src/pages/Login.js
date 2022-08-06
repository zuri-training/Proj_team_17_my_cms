import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons';
import login from '../assets/img/rafiki.svg';


const Login = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className='cms-bg flex h-full'>
        <div className='w-1/2'>
          <h1 className="text-center mb-12 mt-10 font-semibold overflow-hidden text-4xl">Login</h1>
          <div className='flex items-center justify-center flex-col'>

            <form action="submit" method="post">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="">
                <div className='mb-8'>
                  <label htmlFor="username" className="">Username</label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="h-12 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-gray-500 block w-full p-2.5 pr-20  placeholder-gray-400 dark:text-white "
                    placeholder="johndoe"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type={open === false ? "password" : "text"}
                    autoComplete="current-password"
                    required
                    className=" h-12 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-gray-500 block w-full p-2.5 pr-20  placeholder-gray-400 dark:text-white "
                    placeholder="********"
                  />
                  <span className='float-right relative -top-9 -left-4'>{open === false ? (
                      <FontAwesomeIcon icon={faEye} onClick={toggle} />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} onClick={toggle} />
                    )}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between px-3">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-gray-600 focus:ring-gray-900 border border-[#414345] rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-xs text-[#414345] font-medium">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="/forgot" className="font-semibold text-[#ABAEB0] text-xs hover:text-gray-500">
                    Forgot password?
                  </a>
                </div>
              </div>

              <button className="btn-bg rounded-md font-semibold w-[481px] h-12 bg-gray-400 mt-6 flex items-center justify-center">Login</button>

              <div className="flex items-center justify-center flex-col">
                <div className="pt-3">
                  <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                </div>

                <p className="mt-8 mb-8">OR</p>
                
                <div className="mb-12">
                  <p className="mb-3">Continue with:</p>
                  <div className="flex items-center gap-9">
                  <div className="w-8 h-8 bg-gray-400 rounded-full">
                
                  </div>
                  <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </form>

          </div>
        </div>
        <div className='w-2/4 bg-uu'>
          <img src={login} alt="sign up img" />
        </div>
      </div>
    </>
  );
}

export default Login;
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

const Login = () => {


  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className='flex h-full'>
        <div className='bg-gray-100 w-[50%] font-nunito '>
          <div className='flex relative left-16 flex-col justify-center py-12 px-4 max-w-lg w-full'>
            <h1 className='font-semibold text-5xl leading-[56px] text-[#000000]'>Log In</h1>
            <form className="mt-12 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="">
                <div className='mb-8'>
                  <label htmlFor="username" className="">
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="block w-full rounded-[4px] p-4 mt-3 border text-[#C0C2C4]"
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
                    className="block w-full rounded-[4px] p-4 mt-3 border text-[#C0C2C4]"
                    placeholder="********"
                  />
                  <span className='float-right relative -top-10 -left-4'>{open === false ? (
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

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center p-4 border border-transparent text-base font-semibold rounded text-[#414345] bg-[#C0C2C4] hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Log In
                </button>
              </div>

              <div className="flex items-center justify-center flex-col">
                <div className="pt-3">
                  <p>Don't have an account? <a href="/create">Sign Up</a></p>
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
        <div className='bg-[#C0C2C4] w-[50%]'></div>
      </div>
    </>
  );
}

export default Login;
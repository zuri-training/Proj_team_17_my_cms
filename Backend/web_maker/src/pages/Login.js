import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons';
import login from '../assets/img/rafiki.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../services/userAuthApi';
import { getToken, storeToken } from '../services/LocalStorageService';
import { setUserToken } from '../features/authSlice';
import { useDispatch } from 'react-redux'
import google from '../assets/img/download-4-removebg-preview 1.png';
import apple from '../assets/img/image 1.png';
import WebIt from './../assets/img/WebIt-logo.png';


const Login = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginUser, {isLoading}] = useLoginUserMutation();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const toggle = () => {
    setOpen(!open);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const user = {
        username: username.trim(),
        password: password.trim()
      }
      const res = await loginUser(user);
      console.log(res.data)
      storeToken(res.data.token)
      let { access_token } = getToken()
      dispatch(setUserToken({ access_token: access_token }))
      navigate('/dashboard')
      

    } catch (error) {
      setError('Failed to sign in')
      console.log(error)
    }
    setLoading(false)
  }
  
  let { access_token } = getToken()
  useEffect(() => {
    dispatch(setUserToken({ access_token: access_token }))
  }, [access_token, dispatch])

  return (
    <>
      <div className='cms-bg h-screen'>
        <div className='w-40 h-20 colorbtn-bg inline-flex items-center justify-center rounded-2xl mt-8 ml-8'>
          <Link to="/" className='flex items-center cursor-pointer m-auto'>
            <img  src={WebIt} alt="logo" className=''/>
            <h2 className='text-base text-white px-2.5 font-bold'>WebIt</h2>
          </Link>
        </div>
        
        <div className='flex w-full items-center mt-14'>
          <div className='w-1/2'>
            <h1 className="text-center mb-12 font-semibold overflow-hidden text-4xl">Login</h1>
            {error && <p className='text-center text-red-600'>{error}</p>}

            <div className='flex items-center justify-center flex-col'>
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="">
                  <div className='mb-8'>
                    <label htmlFor="username" className="">Username</label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      value={username}
                      onChange={({ target: { value }}) => setUsername(value)}
                      required
                      className="h-12 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-gray-500 block w-full p-2.5 pr-12 "
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
                      value={password}
                      onChange={({ target: { value }}) => setPassword(value)}
                      autoComplete="current-password"
                      required
                      className=" h-12 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-gray-500 block w-full p-2.5 pr-12 "
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
                    <Link to="/forgot" className="font-semibold text-[#ABAEB0] text-xs hover:text-gray-500">
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <button disabled={loading} className="colorbtn-bg rounded-md font-semibold w-[481px] h-12 bg-gray-400 mt-6 flex items-center justify-center">Login</button>

                <div className="flex items-center justify-center flex-col">
                  <div className="pt-3">
                    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                  </div>

                  <p className="mt-8 mb-8">OR</p>
                
                  <div className="mb-12">
                    <p className="mb-3">Continue with:</p>
                    <div className="flex items-center gap-9">
                      <img className="w-8 h-8" src={google} alt='icn1' />
                      <img className="w-8 h-8" src={apple} alt='icn1' />
                    </div>
                  </div>
                </div>
              </form>

            </div>
          </div>

          <div className='w-2/4 bg-uu inline-flex'>
            <img src={login} alt="sign up img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
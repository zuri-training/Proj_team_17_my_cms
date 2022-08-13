import React, {useState} from 'react';
import forgotp from './../assets/img/forgotp-img.png';
import{ useResetPasswordMutation } from '../services/userAuthApi'
import { useNavigate, useParams } from 'react-router-dom';


const ResetPassword = () => {
    const [password, setPassword] = useState('')
    const [server_error, setServerError] = useState({})
    const [server_msg, setServerMsg] = useState({})
    const [resetPassword] = useResetPasswordMutation()
    const { uid, token } = useParams()
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
        const actualData = {
            password: password.trim(),
        }
        
        const res = await resetPassword({ actualData, uid, token });

        setServerError({})
        setServerMsg(res.data)
        document.getElementById('password-reset-form').reset()
        setTimeout(() => {
            navigate('/login')
        }, 3000)

        
    
        } catch (error) {
        console.log(error.data.errors)
        setServerMsg({})
        setServerError(error.data.errors)
        }
    }



  return (
    <div className='h-screen flex'>
        <div className="w-2/4 flex flex-col my-auto items-center justify-center bg-uu">
            <img src={forgotp} alt="img" className='forgotp-img' />
        </div>
        <div className='w-1/2 flex flex-col justify-center m-auto'>
            <h1 className="text-center mb-7 font-semibold overflow-hidden text-4xl">Forgot Password?</h1>
            <p className='text-center mb-9 not-italic text-base'>Oops! <br/> Don’t worry, we’ll help you get back in.</p>
            <div className='flex items-center justify-center flex-col'>
                <form id='password-reset-form' onSubmit={handleSubmit} >
                    <div className=" w-[481px] mb-6">
                        <label htmlFor="forg-passw-input" className="block mb-2 text-sm font-medium  text-black">Enter your email address</label>
                        <input
                            type="password"
                            id="forg-passw-input"
                            value={password}
                            onChange={({ target: { value }}) => setPassword(value)}
                            placeholder="********"
                            className=" h-12 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-gray-500 block w-full p-2.5 pr-20" 
                            required
                        />
                        {server_error.email ? <h2 style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</h2> : ""}
                    </div>
                    <button type="submit" className="colorbtn-bg rounded-md font-semibold w-[481px] h-12 bg-gray-400 mt-6 flex items-center justify-center">
                        Reset Password
                    </button>
                    {server_error.password ? <h2 className='text-red-500'>{server_error.non_field_errors[0]}</h2> : ''}
                    {server_msg? <h2 className='text-green-400'>{server_msg.msg}</h2> : ''}
                </form>
            </div>
        </div>
    </div>
  );
}

export default ResetPassword;
import React, { useState } from 'react';
import WebIt from '../../assets/img/WebIt-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Button from '../general/Button';


const NavigationBar = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const show1Toggle = () => {
        setShow1(!show1);
    };

    const show2Toggle = () => {
        setShow2(!show2);
    };

  return (
    <nav className='w-full pt-12 xl:px-0 px-5'>
        <div className='max-w-6xl my-0 mx-auto w-auto flex items-center justify-between'>
            <div className='w-auto flex items-center'>
                <Link to="/" className='flex items-end cursor-pointer'>
                    <img  src={WebIt} alt="logo"/>
                    <h2 className='text-base text-white px-2.5 font-bold'>WebIt</h2>
                </Link>
                <button className='md:hidden border h-10 w-10 rounded-md'>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            <ul className='flex lg:w-3/5 w-8/12 justify-between item-center'>
                <div className='inline-flex item-center'>
                    <div className='w-auto inline-flex items-center cursor-pointer'>
                        <div className='py-1 text-white px-3 lg:text-base text-sm not-italic font-medium' onClick={show1Toggle}>
                            Features
                            <FontAwesomeIcon icon={faCaretDown} className='text-white px-3' />
    { show1 === false ? null :  <div className='absolute w-auto py-4 px-2 text-black bg-white rounded-lg mt-4 w-32'>
                                    <Link to='' className='block text-sm mb-2 hover:bg-slate-300 transition-all rounded-lg text-center'>WebIt Templates</Link>
                                    <Link to='' className='block text-sm hover:bg-slate-300 transition-all rounded-lg text-center'>WebIt Blog</Link>
                                </div>}
                        </div>
                    </div>
                    
                    <div className='w-auto inline-flex items-center cursor-pointer'>
                        <div className='py-1 text-white pr-3 pl-10 lg:text-base text-sm not-italic font-medium' onClick={show2Toggle}>
                            Resources
                            <FontAwesomeIcon icon={faCaretDown} className='text-white px-3' />
    { show2 === false ? null :  <div className='absolute w-auto py-4 px-2 text-black bg-white rounded-lg mt-4 w-32'>
                                    <Link to='/contact-us' className='block text-sm mb-2 hover:bg-slate-300 transition-all rounded-lg text-center active:'>Contact Center</Link>
                                    <Link to='/feedback-hub' className='block text-sm mb-2 hover:bg-slate-300 transition-all rounded-lg text-center'>Feedback Hub</Link>
                                    <Link to='' className='block text-sm hover:bg-slate-300 transition-all rounded-lg text-center'>FAQs</Link>
                                </div>}
                        </div>
                    </div>
                </div>

                <div className='inline-flex items-center'>
                    <li className='py-1 pl-3 pr-7'>
                        <Link to="/login" className='font-medium text-white text-sm lg:text-base not-italic cursor-pointer inline-flex'>Sign In</Link>
                    </li>
                    
                    <Link to='/signup'><Button name="Get Started"/></Link>
                </div>
            </ul>
        </div>
    </nav>
  );
}

export default NavigationBar;
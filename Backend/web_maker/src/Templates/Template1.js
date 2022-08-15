import React from 'react'
import twitter from '../assets/img/akar-icons_twitter-fill.png'
import facebook from '../assets/img/akar-icons_facebook-fill.png'
import behance from '../assets/img/ri-behance-line.png'
import dribble from '../assets/img/ri-dribbble-fill.png'
import instagram from '../assets/img/ri-instagram-line.png'
import rectangle from '../assets/img/image 30.png'
import image from '../assets/img/Rectangle 67.png'
import image2 from '../assets/img/Rectangle 67 (1).png'
import image3 from '../assets/img/Rectangle 67 (2).png'
import arrow from '../assets/img/Arrow.png'
import curve from '../assets/img/Ellipse 6.png'
import curve2 from '../assets/img/Ellipse 6 (1).png'
import curve3 from '../assets/img/Ellipse 6 (2).png'
import frame from '../assets/img/frame.png'

import { Link } from 'react-router-dom'

const Template1 = () => {
  return (
    <>
        <header className=''>
            <h2 className='font-bold text-[56px] text-center text-[#000000] mt-4'>shaunnice</h2>
            <h5 className='text-2xl text-center mt-12 text-[#000000]'>Digital design agency</h5>
        </header>
        <div className='flex flex-row items-center justify-center mt-6 py-[1px] px-[23px] gap-[31px]'>
            <img src={twitter} alt='tw' />
            <img src={facebook} alt='fb' />
            <img src={dribble} alt='db' />
            <img src={behance} alt='behance' />
            <img src={instagram} alt='instagram' />
        </div>
        <img className='absolute left-[10%] top-[36%]' src={arrow} alt='arrow' />
       
        <ul className='bg-[#2C1E1D] flex justify-center text-white gap-16 w-[80%] m-auto mt-12'>
            
            <li><Link to=''>Home</Link></li>
            <li><Link to=''>About</Link></li>
            <li><Link to=''>News</Link></li>
            <li><Link to=''>Phone</Link></li>
            <li><Link to=''>Portfolio</Link></li>
        </ul>
        <img className='w-[80%] m-auto' src={rectangle} alt='img' />
        <div className='text-[#000000] font-serif text-[56px] text-center mt-20'>More Than Your Average Agency</div>
        <p className='text-center text-[#000000 w-[43%] m-auto'>At shaunice we bring exceptional products across 3 key business areas: web design, digital marketing and branding </p>
        <button className='bg-[#402A2E] rounded font-medium text-white relative left-[46%] my-12 py-3 px-6'>Button</button>
        <div className='flex flex-row w-[80%] m-auto gap-10'>
            <div>
                <div className='text-center  '>Web Design</div>
                <img  src={image} alt="t" />
                <p className='text-center'>Web design encompasses many different skills and discipline in the production and maintenance of websites</p>
            </div>
            <div>
                <div className='text-center  '>Digital Marketing</div>
                <img className='w-[100%]'  src={image2} alt="t" />
                <p className='text-center'>Digital marketing is a component of marketing that uses the internet and online based digital technologies to promote products and services </p>
            </div>
            <div>
                <div className='text-center  '>branding</div>
                <img  src={image3} alt="t" />
                <p className='text-center'>Web design encompasses many different skills and disciplines in the production and maintenance of websites</p>
            </div>
       </div>
       <div className='font-serif text-[56px] text-[#000000] text-center mt-48'>Testimonials</div>
       <div className='mt-12 flex flex-row m-auto w-[60%] gap-10'>
            <div className='w-[60%]'>
                <img className=''  src={curve} alt="t" />
                <p className='text-center'>Shaunnice took care of our contents and gave us an amazing result</p>
                <p className='text-center'>Anastacia jobs</p>
            </div>
            <div>
                <img  src={curve2} alt="t" />
                <p className='text-center'>Shaunnice took care of our contents and gave us an amazing result</p>
                <p className='text-center'>Anastacia jobs</p>
            </div>
            <div>
                <img  src={curve3} alt="t" />
                <p className='text-center'>Shaunnice took care of our contents and gave us an amazing result</p>
                <p className='text-center'>Anastacia jobs</p>
            </div>
       </div>

        <div className='w-full h-96 px-5 bg-[#F3E5E8] mt-24'>
            <img className='pt-12 pl-20 mb-16' src={frame} alt='frame' />
            <Link to='/template1' className='bg-[#402A2E] rounded font-medium text-white relative left-[46%] my-12 py-3 px-6'>Customize Template</Link>
        </div>
        
    </>
  )
}

export default Template1;
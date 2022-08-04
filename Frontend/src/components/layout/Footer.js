import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='w-full h-80 bg-gray-400 xl:px-0 px-5'>
        <div className='h-full flex flex-row justify-around items-center max-w-5xl my-0 mx-auto'>
            <div className='mx-auto flex flex-col justify-start h-44 items-start'>
                <h4 className='font-bold text-xl not-italic pb-2 inline-flex'>Products</h4>
                <Link to="/editor"><p className='pb-1 inline-flex font-medium text-xl'>Editor</p></Link>
                <Link to="/blog"><p className='pb-1 inline-flex font-medium text-xl'>Blog</p></Link>
                <Link to="/cms"><p className='pb-1 inline-flex font-medium text-xl'>CMS</p></Link>
            </div>
            <div className='mx-auto flex flex-col justify-start h-44 items-start'>
                <h4 className='font-bold text-xl not-italic pb-2 inline-flex'>Resources</h4>
                <Link to="/faqs"><p className='pb-1 inline-flex font-medium text-xl'>FAQs</p></Link>
                <Link to="/contact-us"><p className='pb-1 inline-flex font-medium text-xl'>Contact Us</p></Link>
                <Link to="/demo-video"><p className='pb-1 inline-flex font-medium text-xl'>Docs</p></Link>
                <Link to="/feedback-hub"><p className='pb-1 inline-flex font-medium text-xl'>Feedback Hub</p></Link>
            </div>
            <div className='mx-auto flex flex-col justify-start h-44 items-start'>
                <h4 className='font-bold text-xl not-italic pb-2 inline-flex'>Company</h4>
                <Link to="/about-us"><p className='pb-1 inline-flex font-medium text-xl'>About Us</p></Link>
                <Link to="/terms-of-service"><p className='pb-1 inline-flex font-medium text-xl'>Terms Of Service</p></Link>
                <Link to="/privacy-policy"><p className='pb-1 inline-flex font-medium text-xl'>Privacy Policy</p></Link>
            </div>
            <div className='mx-auto flex flex-col justify-start h-44 items-start'>
                <h4 className='font-bold text-xl not-italic pb-2 inline-flex'>Socials</h4>
                <Link to="/twitter"><p className='pb-1 inline-flex font-medium text-xl'>Twitter</p></Link>
                <Link to="/facebook"><p className='pb-1 inline-flex font-medium text-xl'>Facebook</p></Link>
                <Link to="/linkedin"><p className='pb-1 inline-flex font-medium text-xl'>LinkedIn</p></Link>
            </div> 
        </div>
    </footer>
  );
}

export default Footer;
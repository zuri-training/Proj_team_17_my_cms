import React from 'react';
import choosedomain from '../../assets/img/ch-domain-img.png';
import { Link } from 'react-router-dom';


const ChooseDomain = () => {
  return (
    <section className='w-full py-36 xl:px-0 px-5'>
        <div className='flex flex-col items-center max-w-7xl my-0 mx-auto'>
            <div className='mb-10'>
              <img src={choosedomain} alt="domain" className='choosedomain-img' />
            </div>
            <h2 className='arima-heading text-5xl not-italic mb-8 max-w-xl leading-tight overflow-hidden text-center font-medium text-gray-800'>
              Choose an appropriate domain name according to your preference
            </h2>
            <Link to='/domian-new-user'><button className='colorbtn-bg py-3 px-6 lg:text-base text-sm not-italic font-medium rounded cursor-pointer'>Choose Domain</button></Link>
        </div>
    </section>
  );
}

export default ChooseDomain;
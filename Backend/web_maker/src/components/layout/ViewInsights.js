import React from 'react';
import { Link } from 'react-router-dom';
import viewInsights from '../../assets/img/viewInsights-img.png';

const ViewInsights = () => {
  return (
    <section className='viewinsights-sec w-full py-36 xl:px-0 px-5'>
        <div className='flex flex-row justify-between items-start max-w-7xl my-0 mx-auto'>
            <div className='flex flex-col items-start max-w-xl'>
               <h1 className='arima-heading text-5xl mb-2 overflow-hidden font-bold leading-relaxed text-gray-800'>View Insights</h1>
                <p className='text-2xl not-italic mb-4 w-full font-medium'>Learn how your contents are performing. 
                    Get to understand what your audience wants per time
                </p>
                <Link to='dashboard' className='font-semibold'>View Insights →</Link>
            </div>
            <div className='w-full h-auto'>
                <img src={viewInsights} alt="view insights" className='viewInsights-img rounded-3xl inline-flex drop-shadow-lg shadow-lg translate-x-28 translate-y-12 origin-bottom -rotate-12' />
                <img src={viewInsights} alt="view insights" className='viewInsights-img rounded-3xl inline-flex drop-shadow-lg shadow-lg -translate-y-2/4' />
            </div>
        </div>
    </section>
  );
}

export default ViewInsights;
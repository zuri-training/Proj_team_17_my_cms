import React from 'react';
import { Link } from 'react-router-dom';
import viewInsights from '../../assets/img/viewInsights-img.png';

const ViewInsights = () => {
  return (
    <section className='w-full py-36 xl:px-0 px-5'>
        <div className='flex flex-row justify-between items-start max-w-6xl my-0 mx-auto'>
            <div className='flex flex-col items-start max-w-xl'>
               <h1 className='arima-heading text-5xl mb-2 overflow-hidden font-bold leading-relaxed text-gray-800'>View Insights</h1>
                <p className='text-2xl not-italic mb-4 w-full font-medium'>Learn how your contents are performing. 
                    Get to understand what your audience wants per time
                </p>
                <Link to='' className='font-semibold'>View Insights →</Link>
            </div>
            <div>
                <img src={viewInsights} alt="view insights" className='viewInsights-img' />
            </div>
        </div>
    </section>
  );
}

export default ViewInsights;
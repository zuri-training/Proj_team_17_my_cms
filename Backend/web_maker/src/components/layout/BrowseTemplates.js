import React from 'react';
import { Link } from 'react-router-dom';
import browseTemp1 from '../../assets/img/browse-temp1-img.png'
import browseTemp2 from '../../assets/img/browse-temp2-img.png'



const BrowseTemplates = () => {
  return (
    <section className='w-full py-36 xl:px-0 px-5'>
        <div className='flex flex-row justify-between items-start max-w-7xl my-0 mx-auto'>
            <div className='flex flex-col items-start max-w-xl'>
                <h1 className='arima-heading text-5xl mb-2 overflow-hidden font-bold leading-relaxed color1'>Easy-to-use templates</h1>
                <p className='text-2xl not-italic mb-4 w-full font-medium'>View and choose from an array of easily customizable 
                    templates and create yours
                </p>
                <Link to='/Templates' className='font-semibold color1'>Browse Templates →</Link>
            </div>
            <div className=''>
                <img src={browseTemp1} alt="browse template" className='browse-temp1-img inline-flex drop-shadow-lg shadow-2xl' />
                <img src={browseTemp2} alt="browse template" className='browse-temp2-img inline-flex drop-shadow-lg shadow-2xl -translate-y-2/4 translate-x-40' />
            </div>
        </div>
    </section>
  );
}

export default BrowseTemplates;
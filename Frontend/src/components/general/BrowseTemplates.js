import React from 'react';
import { Link } from 'react-router-dom';
import browseTemp1 from '../../assets/img/browse-temp1-img.png'



const BrowseTemplates = () => {
  return (
    <section className='w-full py-36 xl:px-0 px-5'>
        <div className='flex flex-row justify-between items-start max-w-6xl my-0 mx-auto'>
            <div className='flex flex-col items-start max-w-xl'>
                <h1 className='arima-heading text-5xl mb-2 overflow-hidden font-bold leading-relaxed color1'>Easy-to-use templates</h1>
                <p className='text-2xl not-italic mb-4 w-full font-medium'>View and choose from an array of easily customizable 
                    templates and create yours
                </p>
                <Link to='' className='font-semibold color1'>Browse Templates →</Link>
            </div>
            <div>
                <img src={browseTemp1} alt="browse template" className='browse-temp-img' />
            </div>
        </div>
    </section>
  );
}

export default BrowseTemplates;
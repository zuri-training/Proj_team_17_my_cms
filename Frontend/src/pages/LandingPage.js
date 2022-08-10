import React from 'react';

import NavigationBar from '../components/layout/NavigationBar';
import GetStarted from '../components/layout/GetStarted';
import BrowseTemplates from '../components/layout/BrowseTemplates';
import ViewInsights from '../components/layout/ViewInsights';
import ChooseDomain from '../components/layout/ChooseDomain';
import LinkAccount from '../components/layout/LinkAccount';
import CreateWebsite from '../components/layout/CreateWebsite';
import Footer from '../components/layout/Footer';


const LandingPage = () => {
  return (
    <main className='cms-bg'>
      <div className='header'>
        <NavigationBar />
        <GetStarted />
      </div>
        <BrowseTemplates />
        <ViewInsights />
        <LinkAccount />
        <ChooseDomain />
        <CreateWebsite />
        <Footer />
    </main>
  );
}

export default LandingPage;

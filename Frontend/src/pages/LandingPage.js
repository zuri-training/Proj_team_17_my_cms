import React from 'react';

import NavigationBar from '../components/layout/NavigationBar';
import GetStarted from '../components/general/GetStarted';
import BrowseTemplates from '../components/general/BrowseTemplates';
import ViewInsights from '../components/general/ViewInsights';
import ChooseDomain from '../components/general/ChooseDomain';
import LinkAccount from '../components/general/LinkAccount';
import CreateWebsite from '../components/general/CreateWebsite';
import Footer from '../components/layout/Footer';


const LandingPage = () => {
  return (
    <>
      <NavigationBar />
      <GetStarted />
      <BrowseTemplates />
      <ViewInsights />
      <LinkAccount />
      <ChooseDomain />
      <CreateWebsite />
      <Footer />
    </>
  );
}

export default LandingPage;

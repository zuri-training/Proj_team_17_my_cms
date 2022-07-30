import React from 'react';

import NavigationBar from '../components/layout/NavigationBar';
import GetStarted from '../components/general/GetStarted';
import BrowseTemplates from '../components/general/BrowseTemplates';
import GetInsights from '../components/general/GetInsights';
import ChooseDomain from '../components/general/ChooseDomain';
import LinkMyAccount from '../components/general/LinkMyAccount';
import CreateWebsite from '../components/general/CreateWebsite';
import Footer from '../components/layout/Footer';


const LandingPage = () => {
  return (
    <>
      <NavigationBar />
      <GetStarted />
      <BrowseTemplates />
      <GetInsights />
      <LinkMyAccount />
      <ChooseDomain />
      <CreateWebsite />
      <Footer />
    </>
  );
}

export default LandingPage;

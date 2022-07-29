import React from 'react';

import NavigationBar from '../components/NavigationBar';
import GetStarted from '../components/GetStarted';
import BrowseTemplates from '../components/BrowseTemplates';
import GetInsights from '../components/GetInsights';
import ChooseDomain from '../components/ChooseDomain';
import LinkMyAccount from '../components/LinkMyAccount';
import CreateWebsite from '../components/CreateWebsite';
import Footer from '../components/Footer';



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

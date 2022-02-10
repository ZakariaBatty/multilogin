import React from 'react';
import Cummunity from './Sections/cummunity/Cummunity';
import Header from './Sections/header/Header';
import Help from './Sections/help/Help';
import Packs from './Sections/packs/Packs';
import Rating from './Sections/rating/Rating';
import Subscribe from './Sections/subscribe/Subscribe';
import Work from './Sections/work/Work';

const LandingPage = () => {
  return (
    <>
      <Header />
      <Work />
      <Help />
      <Packs />
      <Cummunity />
      <Subscribe />
      <Rating />
    </>
  );
};

export default LandingPage;

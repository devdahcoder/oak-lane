import React from 'react';
import { getAppLayout } from '../components/Layouts/AppLayout';
import BookDemo from '../components/Sections/BookDemo';
import Offer from '../components/Sections/Offer';
import Participant from '../components/Sections/Participant';
import Integration from '../components/Sections/Integration';
import Review from '../components/Sections/Review';
import Company from '../components/Sections/Company';
import Interactive from '../components/Sections/Interactive';
import Blog from '../components/Sections/Blog';
import Footer from '../components/Sections/Footer';

const HomePage = () => {
  return (
    <div>
      <BookDemo />
      <Offer />
      <Participant />
      <Integration />
      <Review />
      <Company />
      <Interactive />
      <Blog />
      <Footer />
    </div>
  )
}

HomePage.getLayout = getAppLayout;

export default HomePage;

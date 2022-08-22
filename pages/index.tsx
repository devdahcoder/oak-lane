import React from 'react';
import { getAppLayout } from '../components/Layouts/AppLayout';
import BookDemo from '../components/Sections/BookDemo';
import Offer from '../components/Sections/Offer';
import Participant from '../components/Sections/Participant';
import Integration from '../components/Sections/Integration';
import Review from '../components/Sections/Review';

const HomePage = () => {
  return (
    <div>
      <BookDemo />
      <Offer />
      <Participant />
      <Integration />
      <Review />
    </div>
  )
}

HomePage.getLayout = getAppLayout;

export default HomePage;

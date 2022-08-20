import React from 'react';
import { getAppLayout } from '../components/Layouts/AppLayout';
import BookDemo from '../components/Sections/BookDemo';
import Offer from '../components/Sections/Offer';
import Participant from '../components/Sections/Participant';
import Integration from '../components/Sections/Integration';

const HomePage = () => {
  return (
    <div>
      <BookDemo />
      <Offer />
      <Participant />
      <Integration />
    </div>
  )
}

HomePage.getLayout = getAppLayout;

export default HomePage;

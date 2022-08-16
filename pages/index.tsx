import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { getAppLayout } from '../components/Layouts/AppLayout'
import BookDemo from '../components/Sections/BookDemo'
import styles from '../styles/Home.module.css'

const HomePage = () => {
  return (
    <div>
      <BookDemo />
    </div>
  )
}

HomePage.getLayout = getAppLayout;

export default HomePage;

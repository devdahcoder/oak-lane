import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { getAppLayout } from '../components/Layouts/AppLayout'
import styles from '../styles/Home.module.css'

const HomePage = () => {
  return (
    <div >
      hello world welcome to home pageProps
    </div>
  )
}

HomePage.getLayout = getAppLayout;

export default HomePage;

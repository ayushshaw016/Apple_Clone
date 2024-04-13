import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './api/Navbar'
import MainPage from './api/Mainpage'
import Store from './api/Navbar_items/Store'
import { useState } from 'react'
export default function Home() {
  return (
    <>
      <Navbar />
      <MainPage/>
      {/* <Store /> */}
    </>
  )
}

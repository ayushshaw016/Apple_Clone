import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './Component/Navbar'
import MainPage from './Mainpage'

import { useState } from 'react'
import Footer from './Component/Footer/Footer'
import Homepage from './Homepage'
import Learnmore from './Learnmore'
export default function Home() {
  return (
    <>
    <Navbar />
    {/* <Learnmore/> */}
    <Homepage/>
    <Footer/>
    </>
  )
}

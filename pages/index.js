import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './Component/Navbar'
import MainPage from './Mainpage'

import { useState } from 'react'
import Footer from './Component/Footer/Footer'
import Homepage from './Homepage'
import Learnmore from './Learnmore'
// import Carousel from './Carousel'
import img from "../public/Assets/images/airpods.png"
import img1 from "../public/Assets/images/frame.png"
import Carousel from './Carousel'
export default function Home() {
  const images=[
    img,
    img1
  ]

  
  
  return (
    <>
      <Navbar />
      {/* <Learnmore/> */}
      <Homepage />
      {/* <Carousel images={images}/> */}
      

      <Footer />
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './api/Navbar'
import MainPage from './api/Mainpage'
export default function Home() {
  return (
    <>
      <Navbar />
      <MainPage/>
    </>
  )
}

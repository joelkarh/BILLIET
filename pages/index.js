import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Navbar from "../components/Navbar"
import MainIntro from '../components/MainIntro'
import MainServices from '../components/Main-services'
import MainReviews from '../components/Main-reviews'
import Info from '../components/Info'
import { Footer } from '../components/Footer'




export default function Home() {
    return (
        <>
        <Head>
        </Head>
        <Navbar/>
        <Header/>
        <MainIntro/>
        <MainServices/>
        <Info/>
        
        <Footer/>
        </>
    )
}

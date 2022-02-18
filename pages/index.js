import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Layout from '../components/Layout'

import Navbar from "../components/Navbar"
import MainIntro from '../components/MainIntro'
import MainServices from '../components/Main-services'



export default function Home() {
    return (
        <>
        <Navbar/>
        <Header/>
        <MainIntro/>
        <MainServices/>
        </>
    )
}

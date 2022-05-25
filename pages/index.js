import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Navbar from "../components/Navbar"
import MainIntro from '../components/MainIntro'
import MainServices from '../components/Main-services'
import Info from '../components/Info'
import { Footer } from '../components/Footer'




export default function Home() {
    const{ id, title,description} = headerData
    return (
        <>
        <Head>
        </Head>
        <Navbar/>
        <Header id={id} title={title} description={description}/>
        <MainIntro/>
        <MainServices/>
        <Info/>
        <Footer/>
        </>
    )
}
export const headerData = {
    id:1,
    title: 'Experten in verhuis',
    description: 'BILLIET QUALITY MOVERS verhuist uw meubels en goederen met de GROOTST MOGELIJKE ZORG. Met onze uitstekende transportservice over het volledige nationale grondgebied garanderen wij een veilige verhuis van al uw waardevolle bezittingen.',
}
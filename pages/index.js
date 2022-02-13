import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'
import image1 from '../public/image_2.png'
import bgBar from '../public/image-bar.svg'
import mail from "../public/courier.jpg"

export default function Home() {
    return (
        <Layout>
            <section className='row home '>
                <article className="">
                    <div className="box-Image">
                        <Image src={image1} objectFit='cover' alt="" className='image-BG'/>
                    </div>
                    <div className="text-box_2">
                        <h2>Over ons</h2>
                        <h3>Billiet quality movers</h3>
                        <p>Wanneer wij een verhuis verzorgen dan waken we erover dat onze klanten kunnen
                            genieten van een top kwaliteit service. Tijd en aandacht besteden aan de details
                            is echt belangrijk voor ons. Wij zijn een professionele Belgische verhuisfirma
                            die aan de hoogste standaarden voldoet. Onze aandacht en toewijding gaat naar
                            snelle, professionele en efficiënte dienstverlening naar de klanten toe. Wij
                            beseffen dat ons bedrijf enkel kan verder groeien als de klant tevreden is. Het
                            is dan ook ons doel om de klant gelukkig te maken.</p>
                        <button className="btn-home">
                            <a href="#" className='btn-font'>Read more</a>
                        </button>
                        <div className='purple-bar'>
                            {/* <Image src={bgBar} layout='' alt=''/> */}
                        </div>
                    </div>
                </article>
            </section>
            <section className="row diensten-article">
                <h1>Diensten</h1>
                <article className="col-12 col-lg-3">
                    {/* eslint-disable-next-line  */}
                    <img src="/delivery.png" alt=""/>
                    <h2>Inpakservice</h2>
                    <p>The level of service at Moving Company is fantastic. Having been since my
                        first move, I am consistently impressed by the professionalism of every staff
                        member I have come in contact with. Thank you!</p>
                </article>
                <article className="col-12 col-lg-3">
                    {/* eslint-disable-next-line  */}
                    <img src="/box.png" alt=""/>
                    <h2>Inpakmateriaal</h2>
                    <p>Just wanted to write to say thank you for the service you provided for
                        helping us relocate. You were extremely courteous, very professional,
                        knowledgeable, and prompt. Everything went according to schedule en tight
                        planning.Thank you again</p>
                </article>
                <article className="col-12 col-lg-3">
                    {/* eslint-disable-next-line  */}
                    <img src="/crane.png" alt=""/>
                    <h2>Cross docking</h2>
                    <p>Our complete office was moved to a different state. All in 3 days time! We
                        ordered the packing service and service. We opened the door
                        to our new office and could start the same day. Their care for our furniture was
                        excellent.</p>
                </article>
            </section>
            <section className="row klanttevredenheid-article">
                <h1>Diensten</h1>
                <article className="col-12 col-lg-3">
                    {/* eslint-disable-next-line  */}
                    <img src="/delivery.png" alt=""/>
                    <h2>Inpakservice</h2>
                    <p>The level of service at Moving Company is fantastic. Having been since my
                        first move, I am consistently impressed by the professionalism of every staff
                        member I have come in contact with. Thank you!</p>
                </article>
                <article className="col-12 col-lg-3">
                    {/* eslint-disable-next-line  */}
                    <img src="/box.png" alt=""/>
                    <h2>Inpakmateriaal</h2>
                    <p>Just wanted to write to say thank you for the service you provided for
                        helping us relocate. You were extremely courteous, very professional,
                        knowledgeable, and prompt. Everything went according to schedule en tight
                        planning.Thank you again</p>
                </article>
                <article className="col-12 col-lg-3">
                    {/* eslint-disable-next-line  */}
                    <img src="/crane.png" alt=""/>
                    <h2>Cross docking</h2>
                    <p>Our complete office was moved to a different state. All in 3 days time! We
                        ordered the packing service and service. We opened the door
                        to our new office and could start the same day. Their care for our furniture was
                        excellent.</p>
                </article>
            </section>
            <div className="next-btn">
                <div className="next-btn__1"></div>
                <div className="next-btn__1"></div>
                <div className="next-btn__1"></div>
            </div>
            
        </Layout>
    )
}

import Image from 'next/image'
import React from 'react'
import overOns from "../public/image_2.png"

const MainIntro = () => {
    return (
        <section className="main-Intro container">
            <article className="row">
                <div className="col-lg main-Intro__image">
                <Image src={overOns} alt="" objectFit='contain'/>
                </div>
                <div className="col-lg">
                    <h2>Over ons</h2>
                    <h3>Billiet Quality Movers</h3>
                    <p>Wanneer wij een verhuis verzorgen dan waken we erover dat onze klanten kunnen
                        genieten van een top kwaliteit service. Tijd en aandacht besteden aan de details
                        is echt belangrijk voor ons. Wij zijn een professionele Belgische verhuisfirma
                        die aan de hoogste standaarden voldoet. Onze aandacht en toewijding gaat naar
                        snelle, professionele en efficiënte dienstverlening naar de klanten toe. Wij
                        beseffen dat ons bedrijf enkel kan verder groeien als de klant tevreden is. Het
                        is dan ook ons doel om de klant gelukkig te maken.</p>
                    <button><a href="#">Lees meer</a></button>
                </div>
            </article>
            
        </section>
    )
}

export default MainIntro
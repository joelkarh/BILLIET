import Image from 'next/image'
import React from 'react'

const MainServices = () => {
    return (
        <section className="container-fluid service-container">
            <h2>Diensten</h2>
            <section className="row">
                {data.map(({id, title, src, description})=>(
                    <article key={id} className="col-xl">
                    <Image alt="l" src={src} width={80} height={80} objectFit='cover'/>
                    <h3>{title}</h3>
                    <p className="truncate" >{description}</p>
                    <button><a href="#">Meer...</a></button>
                </article>
                ))}
            </section>
        </section>
    )
}

export default MainServices

export const data = [
    {
        id:1,
        title: "Inpakservice",
        src:"/handing-package.svg",
        description: "Een succesvolle en vlotte verhuis start met een goed georganiseerde voorbereiding en inpakwerk. De juiste dozen en beschermingsmateriaal zijn van vitaal belang voor de veiligheid van uw bezittingen."
    },
    {
        id:2,
        title: "Inpakmateriaal",
        src:"/box.svg",
        description: `VERHUISDOZEN EN INPAKMATERIALL: BILLIET QUALITY MOVERS® heeft een grote selectie aan verhuisdozen en inpakmateriaal aan voordelige prijzen: plakband, inpakpapier, plasticfolie en bubbelfolie 
        (gelieve de bubbels niet te poppen tot de verhuis werd afgerond).`
    },
    {
        id:3,
        title: "Cross Docking",
        src:"/kraan.svg",
        description: `Grote meubelstukken en toestellen kunnen niet altijd via de trap of de lift naar boven of naar beneden. Het alternatief is de meubellift. Indien U verhuist met BILLIET QUALITY MOVERS® , 
        dan wordt deze service (optioneel) aan een voordelige prijs aangeboden.`
    }
]
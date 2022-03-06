import Image from "next/image";

const Header = () => {
    return (
    <header id='wrapper' className="container-fluid">
        <div className="header-Home ">
            <h1> Experten in verhuis</h1>
            <p>BILLIET QUALITY MOVERS verhuist uw meubels en goederen met de GROOTST MOGELIJKE ZORG. Met onze uitstekende transportservice over het volledige nationale grondgebied garanderen wij een veilige verhuis van al uw waardevolle bezittingen.</p>
        </div>
        {/* <div className="image-container">
            <Image layout="fill"  src="/leftCorner.png" alt="" className="corners" /> 
        </div> */}
        <div className="corner">
        <img src="/leftCorner.png" alt="" className="corner-left" />
        <img src="/rightCorner.png" alt="" className="corner-right" />
        </div>
        
    </header>
    )
};


export default Header;

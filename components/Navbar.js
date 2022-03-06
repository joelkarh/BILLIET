/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Home from '../styles/Home.module.scss'
const Navbar = () => {
    return (

        <div id='logo' className="container">
            <div className="row ">
                <div className="col-10 col-lg">
                    <a href="#"><img alt="img" src='./logo_billiet.png' className='img-fluid'/></a>
                </div>
                <div className="col-2 col-lg menu">
                    <div className="menubar"></div>
                    <ul className="menu-items">
                            <li><a href="">Over Ons</a></li>
                            <li><a href="">Diensten</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Offerte</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
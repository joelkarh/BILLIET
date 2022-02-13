/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Home from '../styles/Home.module.scss'
const Navbar = () => {
    return (
    <> 
    <div id='logo'className="container">
        <div className="row">
        <div className="col-4 offset-4 "> 
        <span className="">
            <img alt="img" src='./logo_billiet.png' className='img-fluid'/>
        </span>
        </div>
        <div className="col-4 menu">
            <div className="menubar">
                
            </div> 
        </div>
        </div>
    </div>
    </>)
}

export default Navbar;
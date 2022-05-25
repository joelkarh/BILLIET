/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Home from '../styles/Home.module.scss'
import Link from 'next/link'
const Navbar = () => {
    return (

        <div id='logo' className="container">
            <div className="row ">
                <div className="col-10 col-lg">
                    <Link href='/'> 
                    <a>
                        <img alt="img" src='./logo_billiet.png' className='img-fluid'/>
                    </a>
                    </Link>
                </div>
                <div className="col-2 col-lg menu">
                    <div className="menubar"></div>
                    <ul className="menu-items">
                        {
                            navItems.map(({id, href, item})=>(
                                <li key={id} e>
                                <Link href={href}>
                                    <a>{item}</a>
                                </Link>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

export const navItems = [
    {
        id:1,
        item:'Over ons',
        href:'/About'
    },
    {
        id:2,
        item:'Diensten',
        href:'/Services'
    },
    {
        id:3,
        item:'Contact',
        href:'/Contact'
    },
    {
        id:4,
        item:'Offerte',
        href:'/Offerte'
    },
]
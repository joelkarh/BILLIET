import Link from 'next/link'
import React from 'react'
import {CgPin} from '@react-icons/all-files/cg/CgPin'
import {FiPhone} from '@react-icons/all-files/fi/FiPhone'
import {AiOutlineMail} from '@react-icons/all-files/ai/AiOutlineMail'
import {AiFillInstagram} from '@react-icons/all-files/ai/AiFillInstagram'
import {AiFillFacebook} from '@react-icons/all-files/ai/AiFillFacebook'

export const Footer = () => {
    return (
        <footer className="container">
            <div className="row footer-section">
                
                <div className="col">
                    <Link passHref href="#" className="">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="img" src='./logo_billiet.png' className='footer-logo'/>
                    </Link>
                </div>
                <div className="col links">
                    <h6>Links</h6>
                    <ul>
                        <li>
                            <Link href="/About">
                                <a>
                                    Over ons
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Services">
                                <a>
                                    Diensten
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Contact">
                                <a>Contact us</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Aanvraag Offerte</a>
                            </Link>
                        </li>
                        <li>
                        
                            <Link href="#">
                                <a>Privacyverklaring</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Cookiebeleid</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>ALgemene voorwaarden</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <adress className="col footer-adress">
                    <h6>
                        Contact us
                    </h6>
                    <ul>
                        <li>
                            <CgPin/>
                            <Link href="https://goo.gl/maps/tHrHA58bMPUdzr7x6">
                                <a>Groot-Brittanjelaan 59 <br/>8530 Harelbeke Belgium</a>
                            </Link>
                        </li>
                        <span className="col">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2518.5091391402198!2d3.3214943!3d50.8587734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c33c74f062de17%3A0x755827d1ec24925c!2sGroot-Brittanjelaan%2059%2C%208530%20Harelbeke!5e0!3m2!1snl!2sbe!4v1653389127131!5m2!1snl!2sbe"   allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </span>
                        <li>
                            <FiPhone/>
                            <Link href="tel:+32(0)470039969">
                                <a>+32(0)470039969</a>
                            </Link>
                        </li>
                        <li>
                            <AiOutlineMail/>
                            <Link href="mailto: info@qmbilliet.be">
                                <a>
                                    info@qmbilliet.be</a>
                            </Link>
                        </li>
                    </ul>
                </adress>
                <section className="col footer-social">
                    <h6>
                        Follow us
                    </h6>
                    <ul>
                        <li>
                            <Link passHref href="#" width="100" height="100">
                                <a><AiFillInstagram/></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <a><AiFillFacebook/></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <a></a>
                            </Link>
                        </li>
                    </ul>
                    <span className="">BTW BE 0723.536.361 </span>
                </section>
            </div>
            <div className="joel"> made with love</div>
            &copy;2021-2022 {''}
        </footer>
    )
}

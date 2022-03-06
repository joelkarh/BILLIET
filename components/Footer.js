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
                            <Link href="#">
                                <a>
                                    Over ons
                                </a>
                            </Link>

                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    Diensten
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Contact us</a>
                            </Link>

                        </li>
                        <li>
                            <Link href="#">
                                <a>get qoute</a>
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
                </section>
            </div>
        </footer>
    )
}

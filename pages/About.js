import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

const About = () => {
  const {id, title,description} = aboutData
  return (
    <>
    <Navbar/>
      <Header id={id} description={description} title={title} />
      
    </>
  )
}

export default About

export const aboutData = {
  id:1,
  title: 'About test',
  description: 'Irure Lorem quis veniam commodo ut deserunt consectetur aliquip. Magna enim enim mollit occaecat in minim. Tempor sint aute voluptate incididunt est adipisicing ex ut. Ad anim voluptate consectetur incididunt nostrud. Non sint ex magna aute reprehenderit  '
}
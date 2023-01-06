import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT..." text="I am a Full Stack Web Developer." />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
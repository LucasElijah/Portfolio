import React from 'react'
import Footer from '../components/Footer/Footer'
import Form from '../components/Form/Form'
import HeroImg2 from '../components/HeroImg2/HeroImg2'
import Navbar from '../components/Navbar/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT..." text="Contact Me Here" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
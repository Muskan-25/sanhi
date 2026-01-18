import React from 'react'
import Header from '../components/layout/Header'
import PageHero from '../components/common/PageHero'
import ContactSection from '../components/Contact/ContactSection'
import contact_bg from '../assets/contact_bg.png'

function Contact() {
  return (
    <>
        <Header home={false}/>
        <PageHero title="Contact Us" bgImage={contact_bg} />
        <ContactSection/>
    </>  
)
}

export default Contact
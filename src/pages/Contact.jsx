import React from 'react'
import Header from '../components/layout/Header'
import PageHero from '../components/common/PageHero'
import ContactSection from '../components/Contact/ContactSection'

function Contact() {
  return (
    <>
        <Header home={false}/>
        <PageHero title="Contact Us" bgImage={"https://html.tf.dreamitsolution.net/consalt/assets/images/home_two/about_2.png"} />
        <ContactSection/>
    </>  
)
}

export default Contact
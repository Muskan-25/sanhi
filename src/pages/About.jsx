import React from 'react'
import Header from '../components/layout/Header'
// import aboutImg from 'https://html.tf.dreamitsolution.net/consalt/assets/images/home_two/about_2.png'
import PageHero from '../components/common/PageHero'
import CtaStats from '../components/common/CTAStats'
import Testimonials from '../components/common/Testimonials'
import AboutSection from '../components/Home/AboutSection'
import WhyChooseUs from '../components/About/WhyChooseUs'

function About() {
  return (
    <>
        <Header home={false}/>
        <PageHero title="About Us" bgImage={"https://html.tf.dreamitsolution.net/consalt/assets/images/home_two/about_2.png"} />

        <AboutSection/>
        <CtaStats/>
        <WhyChooseUs/>
        {/* <Testimonials/> */}

    </>
)
}

export default About
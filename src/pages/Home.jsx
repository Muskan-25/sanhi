import React from 'react'
import Header from '../components/layout/Header'
import Banner from '../components/Home/Banner'
import FeaturedService from '../components/Home/FeaturedService'
import SolutionApproach from '../components/Home/SolutionApproach'
import TextCarousel from '../components/Home/TextCarousel'
import AboutSection from '../components/Home/AboutSection'
import CtaStats from '../components/common/CTAStats'
import WorkingSteps from '../components/Home/WorkingSteps'
import Testimonials from '../components/common/Testimonials'

function Home() {
  return (
    <>
        <Header home={true}/>
        <Banner/>
        <FeaturedService/>
        <SolutionApproach/>
        <TextCarousel/>
        <AboutSection/>
        <CtaStats/>
        <WorkingSteps/>
        <Testimonials/>
    </>
  )
}

export default Home
import React from 'react'
import Header from '../components/layout/Header'
import Banner from '../components/Home/Banner'
import FeaturedService from '../components/Home/FeaturedService'
import SolutionApproach from '../components/Home/SolutionApproach'
import TextCarousel from '../components/Home/TextCarousel'

function Home() {
  return (
    <>
        <Header/>
        <Banner/>
        <FeaturedService/>
        <SolutionApproach/>
        <TextCarousel/>
    </>
  )
}

export default Home
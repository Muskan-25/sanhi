import React from 'react'
import Header from '../components/layout/Header'
import PageHero from '../components/common/PageHero'
import ServicesSlider from '../components/Services/ServicesSlider'
import services_bg from '../assets/services_bg.png'
function Services() {
  return (
    <>
        <Header home={false}/>
        <PageHero title="Services" bgImage={services_bg} />
        <ServicesSlider />
    </> 
)
}

export default Services
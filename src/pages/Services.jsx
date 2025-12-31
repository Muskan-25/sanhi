import React from 'react'
import Header from '../components/layout/Header'
import PageHero from '../components/common/PageHero'
import ServicesSlider from '../components/Services/ServicesSlider'

function Services() {
  return (
    <>
        <Header home={false}/>
        <PageHero title="Services" bgImage={"https://html.tf.dreamitsolution.net/consalt/assets/images/home_two/about_2.png"} />
        <ServicesSlider />
    </> 
)
}

export default Services
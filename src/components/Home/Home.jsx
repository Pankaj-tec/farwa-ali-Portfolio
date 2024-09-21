import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Service from '../Service/Service'
import Project from '../Project/Project'
import Testimonials from '../Testimonials/Testimonials'
import Conatct from '../Contact/Conatct'

const Home = () => {
  return (
   <>
    <Hero />
    <About />
    <Service />
    <Project />
    <Testimonials />
    <Conatct/>
   </>
  )
}

export default Home
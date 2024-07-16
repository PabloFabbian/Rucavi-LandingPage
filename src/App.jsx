import React from 'react'
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Techstack from './components/Techstack'
import WhyRucavi from './components/WhyRucavi'
import Partners from './components/Partners'
import ContactUs from './components/ContactUs'

function App() {

  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Techstack />
      <WhyRucavi />
      <Partners />
      <ContactUs />
    </>
  )
}

export default App
import React from 'react'
import Navigation from "./components/Navbar/Navigation"
import Hero from "./components/HeroSection/Hero"
import About from "./components/AboutUs/About"
import Techstack from './components/TechStack/Techstack'

function App() {

  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Techstack />
    </>
  )
}

export default App
import React from 'react'
import { NavBar } from './components/NavBar'
import { SectionFour } from './components/SectionFour'
import { SectionOne } from './components/SectionOne'
import { SectionThree } from './components/SectionThree'
import { SectionTwo } from './components/SectionTwo'


function App() {
  

  return (
    <div>
      <NavBar />
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour />
    </div> 
  )
}

export default App

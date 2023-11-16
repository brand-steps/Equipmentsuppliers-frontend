import React from 'react'
import Home from '../HOme/Home'
import Second from '../Corporate/SecondSec/Second'
import Footer from '../Foooter/Footer'
import MiddleSecTeachnical from './MiddleSec'
import SecondTechnical from '../Corporate/SecondSec/SecondTechnical'
const Teachnical = () => {
  return (
    <div>
<Home/>
<SecondTechnical   name="About Us" text1="Home  > " text2="About Us" />
<MiddleSecTeachnical/>

<Footer/>

    </div>
  )
}

export default Teachnical
import React from 'react'
import { Link } from 'react-router-dom'
const SecondDocument = ({name , text1 , text2, text3}) => {

    // let text = ""
  return (
<div className="bg-cover w-full h-[300px] mb-4" style={{ backgroundImage: 'url(https://www.osimo.com.tr/assets/images/headers/pages.jpg)' }}>
  <div className='flex w-full h-[300px] justify-between items-center px-4 md:px-24'>
  <Link to={"/"}><h1 className='text-white text-sm md:text-xl lg:text-2xl'>{name}</h1></Link>
  <h1 className='text-white text-sm md:text-xl lg:text-2xl'><Link to={"/"}><span>{text1}</span></Link>
  <Link to={"/TechnicalService"}><span>{text2}</span> </Link> 
  <Link to={"/OurDocument"}><span>{text3}</span> </Link>
   </h1>
  
  </div>
</div>
  )
}

export default SecondDocument
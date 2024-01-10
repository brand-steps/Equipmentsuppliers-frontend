import React from 'react'
import img from '../../Images/mockups.jpg'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'



const AboutKent = () => {
  const navigate = useNavigate();
  const {t} = useTranslation(["home"]);

  return (
    
    <div className='flex flex-col md:flex-row p-4 md:p-20'>
    <div className='w-full md:w-2/5'>
      <img src={img} alt="" className="w-full" />
    </div>
  
    <div className='w-full md:w-3/5 pl-0 md:pl-8'>
      <h1 className='text-3xl md:text-5xl pb-4 md:pb-8 font-bold mt-3'>{t("aboutus")}</h1>
      <p>
      {t("aboutkent")}
      </p>
      <button style={{ "background": "#d6b02e" }} className="text-black font-semibold px-4 py-2 rounded-lg mt-4" onClick={() => {navigate("/Corporate")}}>
      {t("viewall")}
      </button>
    </div>
  </div>
  
  


  )
}

export default AboutKent
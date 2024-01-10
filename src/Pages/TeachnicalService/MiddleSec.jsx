import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../../Images/DG.jpg'
import { useTranslation } from 'react-i18next'

const MiddleSecTeachnical = () => {
  const {t} = useTranslation(["coperate"]);

  return (
    <div className='flex flex-col justify-center my-4 pt-12'>
    <div className="flex flex-col md:flex-row justify-center">
      <div     className='px-4 md:px-12 		'>
        <h1 className='text-2xl md:text-3xl font-bold pr-6 pt-4 text-left'>
          {t("about")}
        </h1>
        <ul className='pt-8   '>
          <li style={{ background: 'red', color: 'white' }} className='px-20 p-2 mb-4'>
            {t("about")}
          </li>
          <li  style={{"box-shadow": "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}  className='px-20 p-2 mb-4'><NavLink to="/OurDocument">{t("docs")}</NavLink> </li>
          <li  style={{"box-shadow": "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}  className='px-20 p-2 mb-4'><NavLink to="/Prducts">{t("products")}</NavLink> </li>
          <li  style={{"box-shadow": "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}  className='px-20 p-2 mb-4'><NavLink to="/Contact">{t("contact")}</NavLink> </li>
        </ul>
      </div>
      {/* Mid Sec */}
      <div className='w-full md:w-6/12 px-4 md:px-0'>
  <img src="https://www.osimo.com.tr/dimg/sayfalar/PWxNkliPlh.jpg" alt="" />
  

  <p className='mt-4 text-sm md:text-base md:text-lg mb-4'>
  {t("des1")}  </p>
  <p className='text-sm md:text-base md:text-lg mb-4'>
  {t("des2")}  </p>
  <p className='text-sm md:text-base md:text-lg mb-4'>
  {t("des3")}  </p>

{/*
  <div  className='flex my-2'>
    
  <img src={img} alt=""    className='mr-6'  style={{ width: "200px", height: "200px",  }} />
  <img src={img} alt=""    className='mr-6'  style={{ width: "200px", height: "200px",  }} />
  <img src={img} alt=""    className='mr-6'  style={{ width: "200px", height: "200px",  }} />
</div>
  <div  className='flex my-2'>
  <img src={img} alt=""    className='mr-6'  style={{ width: "200px", height: "200px",  }} />
  <img src={img} alt=""    className='mr-6'  style={{ width: "200px", height: "200px",  }} />
  <img src={img} alt=""    className='mr-6'  style={{ width: "200px", height: "200px",  }} />
</div>
  <div  className='flex my-2'>
  <img src={img} alt=""    className='mr-6'  style={{ width: "200px", height: "200px",  }} />
 
  
</div>
 */}




</div>


    </div>
  </div>

  )
}

export default MiddleSecTeachnical
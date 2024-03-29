import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Middlesec = () => {
  const {t} = useTranslation(["coperate"]);

  return (
    <div className='flex flex-col justify-center my-4 pt-12'>
    <div className="flex flex-col md:flex-row justify-center">
      <div     className='px-4 md:px-12 		'>
        <h1 className='text-2xl md:text-3xl font-bold pr-6 pt-4 text-left'>
        {t("document")}
        </h1>
        <ul className='pt-8   '>
        <li  
          style={{ background: 'red', color: 'white' }}
          className='px-20 p-2 mb-4'>{t("docs")}</li>
        <li  style={{"box-shadow": "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}  className='px-20 p-2 mb-4'><NavLink to="/TechnicalService">{t("about")}</NavLink> </li>
        <li  style={{"box-shadow": "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}  className='px-20 p-2 mb-4'><NavLink to="/Prducts">{t("products")}</NavLink> </li>
          <li  style={{"box-shadow": "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}  className='px-20 p-2 mb-4'><NavLink to="/Contact">{t("contact")}</NavLink> </li>
        {/*}  <li  style={{"box-shadow": "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}  className='px-20 p-2 mb-4'><NavLink to="/vendorlogin">Vendor Login</NavLink> </li>
*/}

        </ul>
        
      </div>
      {/* Mid Sec */}
      <div className='w-full md:w-6/12 px-4 md:px-0'>
  <img src="https://www.osimo.com.tr/dimg/sayfalar/osimo_kalite_gorseli.png" alt="" />
  <p className='mt-4 text-sm md:text-base md:text-lg mb-4'>
    Industrial kitchen equipment: It is the equipment that enables the work of enterprises such as restaurants, hotels, hospitals, factories and schools where large amounts of food production is carried out, consisting of stainless steel products in accordance with the rules determined in terms of health and hygiene and that the work is done quickly.
  </p>
  <p className='text-sm md:text-base md:text-lg mb-4'>
    Our company, which has adopted the principle of closely following the technological developments in the field of industrial kitchen equipment, aims to offer our customers quality machinery and equipment under the most economical conditions.
  </p>
  <p className='text-sm md:text-base md:text-lg mb-4'>
    We offer our innovative and aesthetic products to our customers and produce them, for them and market them over our country and all the world.
  </p>
</div>


    </div>
  </div>
  )
}

export default Middlesec
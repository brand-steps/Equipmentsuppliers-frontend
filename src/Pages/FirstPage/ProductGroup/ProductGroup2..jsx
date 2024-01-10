import React from 'react'
import { useTranslation } from 'react-i18next'

const ProductGroup2 = () => {
  const {t} = useTranslation(["home"]);

  return (
 
    <div className='ml-4 md:ml-24 p-4'>
  <div style={{ "textTransform": "uppercase" }} className='text-3xl md:text-4xl font-bold'>{t("Products")} </div>

  <div className='w-full md:w-72' style={{ "border": "1px solid red" }}>
    {/* Content for the inner div */}
  </div>
</div>



  )
}

export default ProductGroup2;
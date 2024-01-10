import React from 'react'
import Home from '../HOme/Home'
import Second from '../Corporate/SecondSec/Second'
import ContactMiddle from './ContactMiddle/ContactMiddle'
import Footer from '../Foooter/Footer'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const {t} = useTranslation(["contact"]);

  return (
    <div>
<Home/>
<Second  name={`${t("contact")}`} text={`${t("contactpath")}`}/>
<ContactMiddle/>
<Footer/>
    </div>
  )
}

export default Contact
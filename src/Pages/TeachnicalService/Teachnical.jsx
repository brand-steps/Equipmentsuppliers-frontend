import React from 'react'
import Home from '../HOme/Home'
import Second from '../Corporate/SecondSec/Second'
import Footer from '../Foooter/Footer'
import MiddleSecTeachnical from './MiddleSec'
import SecondTechnical from '../Corporate/SecondSec/SecondTechnical'
import { useTranslation } from 'react-i18next'

const Teachnical = () => {
  const {t} = useTranslation(["coperate"]);

  return (
    <div>
<Home/>
<SecondTechnical   name={`${t("about")}`} text1={`${t("techhead")}`} text2={`${t("about")}`} />
<MiddleSecTeachnical/>

<Footer/>

    </div>
  )
}

export default Teachnical
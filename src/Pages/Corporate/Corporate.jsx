import React from 'react'
import Home from '../HOme/Home'
import Second from './SecondSec/Second'
import MiddleSec from './MiddleSec/MiddleSec'
import Footer from '../Foooter/Footer'
import { useTranslation } from 'react-i18next'


const Corporate = () => {
  const {t} = useTranslation(["coperate"]);

  return (
    <div>
<Home/>
<Second   name={`${t("supplier")}`} text={`${t("homehead")}`}  />
<MiddleSec/>
<Footer/>
    </div>
  )
}

export default Corporate
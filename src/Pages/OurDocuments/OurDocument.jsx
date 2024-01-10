import React from "react";
import Home from "../HOme/Home";
import Second from "../Corporate/SecondSec/Second";
import MiddleSec from "../Corporate/MiddleSec/MiddleSec";
import Footer from "../Foooter/Footer";
import Middlesec from "./Middlesec/Middlesec";
import SecondDocument from "../Corporate/SecondSec/SecondDecument";
import { useTranslation } from 'react-i18next'

const OurDocument = () => {
  const {t} = useTranslation(["coperate"]);

  return (
    <div>
      <Home />
      <SecondDocument name={`${t("docs")}`} text1={`${t("techhead")}`} text2={`${t("docshead")}`} text3={`${t("docs")}`} />
      <Middlesec />
      <Footer />
    </div>
  );
};

export default OurDocument;

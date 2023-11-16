import React from "react";
import Home from "../HOme/Home";
import Second from "../Corporate/SecondSec/Second";
import MiddleSec from "../Corporate/MiddleSec/MiddleSec";
import Footer from "../Foooter/Footer";
import Middlesec from "./Middlesec/Middlesec";
import SecondDocument from "../Corporate/SecondSec/SecondDecument";
const OurDocument = () => {
  return (
    <div>
      <Home />
      <SecondDocument name="OUR DOCUMENTS" text1="Home  > " text2="About Us > " text3="Our Document " />
      <Middlesec />
      <Footer />
    </div>
  );
};

export default OurDocument;

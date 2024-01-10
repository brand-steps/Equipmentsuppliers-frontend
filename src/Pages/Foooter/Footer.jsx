import React from 'react';
import logo from '../../Images/newlogo.png';
import CompanyLogo from '../../Images/bs logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faFacebook, faTwitter, faInstagram , faLinkedin, faWhatsapp,  } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next'

function Footer() {
  const {t} = useTranslation(["home"]);
  const textcolr = {
    color: '#d6b02e'
  }
  return (
    <footer className="bg-gray-900 text-white py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="md:col-span-2 lg:col-span-1">

          <Link to={'/'}   >
       <img   width={"200px "}   src={logo} alt="" />
       </Link>
            <p className="text-sm">
            {t("footdes")}
            </p>
            <div className="flex gap-4 mt-2">
      <a href="https://www.facebook.com" className="text-blue-500 hover:text-blue-700">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com" className="text-blue-500 hover:text-blue-700">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com" className="text-pink-500 hover:text-pink-700">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://wa.me/+447445953220" className="text-blue-700 hover:text-blue-900">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
    </div>

          </div>
          
          <div className="mt-8 md:mt-0">
            <h2 className="text-2xl font-bold mb-2" style={textcolr}>{t("ovendes")}</h2>
            <div className="border-b-2 border-red-600 w-10"></div>
            <ul className="mt-4 space-y-2">
            <li>
        <Link to="/Corporate">{t("corporate")}</Link>
      </li>
      <li>
        <Link to="/TechnicalService">{t("vision")}</Link>
      </li>
      <li>
        <Link to="/Corporate">{t("mission")}</Link>
      </li>
      <li>
        <Link to="/OurDocument">{t("documents")}</Link>
      </li>
      <li>
        <Link to="/PrivacyPolicy">{t("privacy")}</Link>
      </li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-2xl font-bold mb-2" style={textcolr}>{t("Cities")}</h2>
            <div className="border-b-2 border-red-600 w-10"></div>
            <ul className="mt-4 space-y-2">
         {/*}     <li><a href="#">{t("dough")}</a></li>
              <li><a href="#">{t("blender")}</a></li>
              <li><a href="#"> {t("professional")} </a></li>
              <li><a href="#">  {t("ovens")}</a></li>
              <li><a href="#">   {t("overturn")}</a></li>
               */}
                             <li><a href="/Sussex">Sussex {t("Cities")}</a></li>
              <li><a href="/Kent">Kent {t("Cities")}</a></li>
              <li><a href="/Surry"> Surry {t("Cities")}</a></li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-2xl font-bold mb-2" style={textcolr}>{t("get")}</h2>
            <div className="border-b-2 border-red-600 w-10"></div>
            <ul className="mt-4 space-y-2">
              <li className="font-bold">
              {t("phone")} <br />
                01273 569355
              </li>
              <li className="font-bold">
              {t("email")} <br />
                Info@equipmentsuppliers.co.uk
              </li>
              <li className="font-bold">
              {t("address")} <br />
                Unit 19 Beach Cl, Newhaven BN9 0BY
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex justify-center p-2'>
</div>


      <div className="flex flex-col justify-center items-center pt-4">
  <hr className='w-4/5 sm:w-3/5 border border-gray-300' />
            <div className="text-sm text-white mt-2 font-2xl" >
              <Link  target="_blank" to="https://londonlogodesigners.co.uk/"  >
                &copy; 2023 <span style={{textDecoration : "underline" }}    >LondonLogoDesigners</span> . </Link> {t("allright")}
            </div>
        </div>

    </footer>
  );
}

export default Footer;

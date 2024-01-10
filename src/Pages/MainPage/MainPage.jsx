import Home from '../../Pages/HOme/Home';
import Slider from '../../Pages/Slider/Slider';
import Cards from '../../Pages/Cards/Cards';
import About from '../../Pages/Aboutus/About'; 
import ProductGroup from '../../Pages/FirstPage/ProductGroup/ProductGroup';
import ProductSlider from '../../Pages/FirstPage/ProductGroup/ProductSlider.jsx/ProductSlider';
import Services from '../../Pages/FirstPage/Services/Services';
import Login from '../../Pages/FirstPage/Login/Login';
import FairsComponent from '../../Pages/FirstPage/FairsArticle/FairsArticle';
import Footer from '../../Pages/Foooter/Footer';
import { useEffect , useState} from 'react';
import axios from 'axios';
import { faWhatsapp,  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import whats from '../../Images/whatss.png'
import whatss from '../../Images/whatsapp.png'
import whatsss from '../../Images/whatsapps.webp'
import Whatsappchat from '../../Components/WhatsappChat/Whatsappchat';
import Maps from '../Maps/Maps';
import './mainpage.css'

const MainPage = () => {

  return (
    <div>
<Home />
  <Slider/>
 <Whatsappchat/>
  <Cards/>
  
  <ProductGroup/>
  <ProductSlider/>
  <About/>
  <Services/>
  <Login/>
   {/*<FairsComponent/>*/}
<Maps/>
  <Footer/>
    </div>
  )
}

export default MainPage
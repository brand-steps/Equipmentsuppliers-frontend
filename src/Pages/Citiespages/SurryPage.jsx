import Home from '../HOme/Home';
import Slider from '../Slider/Slider';
import Cards from '../Cards/Cards';
import About from '../Aboutus/About';
import ProductGroup from '../FirstPage/ProductGroup/ProductGroup';
import ProductSlider from '../FirstPage/ProductGroup/ProductSlider.jsx/ProductSlider';
import Services from '../FirstPage/Services/Services';
import Login from '../FirstPage/Login/Login';
import FairsComponent from '../FirstPage/FairsArticle/FairsArticle';
import Footer from '../Foooter/Footer';
import Whatsappchat from '../../Components/WhatsappChat/Whatsappchat';
import AboutSurry from '../Aboutus/AboutSurry';

const SurryPage = () => {
  return (
    <div>
<Home />
  <Slider/>
<Whatsappchat/>
  <Cards/>
  
  <ProductGroup/>
  <ProductSlider/>
  <AboutSurry/>
  <Services/>
  <Login/>
   {/*<FairsComponent/>*/}
  <Footer/>
    </div>
  )
}

export default SurryPage
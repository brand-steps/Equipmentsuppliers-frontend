import { useNavigate } from "react-router-dom";
import Cardss from "../Products/Cardss";
import BasicPagination from "../Products/Pagination";
import React, { useState, useEffect } from 'react'
import Home from "../HOme/Home";
import axios from 'axios'
import './categorypages.css';
import piz1 from '../../Images/piz1.jpg';
import piz2 from '../../Images/piz2.jpg';
import piz3 from '../../Images/piz3.jpg';
import piz4 from '../../Images/piz4.jpg';
import piz5 from '../../Images/piz5.jpg';
import piz6 from '../../Images/piz6.jpg';
import piz7 from '../../Images/piz7.jpg';
import piz8 from '../../Images/piz8.jpg';
import piz9 from '../../Images/piz9.jpg';
import piz10 from '../../Images/piz10.jpg';
import piz11 from '../../Images/piz11.jpg';
import piz12 from '../../Images/piz12.jpg';
import { useTranslation } from 'react-i18next'


const Pizzeria = () => {
  const {t} = useTranslation(["product"]);

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loadProduct, setLoadProduct] = useState(false)
    const [page, setPage] = useState(1)
    const [numberOfPages, setnumberOfPages] = useState(9)
    const [StarsArray, setStarsArray] = useState([1, 2, 3])

    const [icecream , Seticecream] = useState("Pizza Ovens");
    const [juice , Setjuice] = useState("Pizza Prep Counters");
    const [machine , Setmachine] = useState("Dough Kneaders & Mixers");
    const [mixers , Setmixers] = useState("Gyros Donar Kebab Grills");
    const [slush , Setslush] = useState("Planetary Mixers");
    const [bar , Setbar] = useState("Rotisseries Ovens");
    const [milshake , Setmilshake] = useState("Charcoal Grills");
    const [espress , Setespress] = useState("Pita Ovens & Salamander Grills");
    const [filter , Setfilter] = useState("Chicken Warmers");
    const [coffee , Setcoffee] = useState("Dough Rollers & Dough Sheeters");
    const [percol , Setpercol] = useState("Pizza Storage & Transport");
    const [water , Setwater] = useState("Pizza Utensils");    

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '160px', // Adjust the width as needed
    height: '180px',


    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
 

  const imageStyle = {
    width: '90px',
    height: '80px',
    marginBottom: '2px',
  };
  const getAllProducts = async () => {
    try {
      const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/pizzeria?page=${page}`);
      console.log("response: ", response);
      console.log(response.data);
      setnumberOfPages(response.data.pages)
      setLoadProduct(!loadProduct)
      setProducts(response.data.data);
      console.log("Products" + response.data.data);
    } catch (error) {
      console.log("Error In Getting All Products ", error);
    }
  };
  const Geticecream = () => {
    navigate(`/Subcategorypage/${icecream}`)
  }
  const Getjuice = () => {
    navigate(`/Subcategorypage/${juice}`)
  }
  const Getmachine = () => {
    navigate(`/Subcategorypage/${machine}`)
  }
  const Getmixers = () => {
    navigate(`/Subcategorypage/${mixers}`)
  }
  const Getslush = () => {
    navigate(`/Subcategorypage/${slush}`)
  }
  const getbar = () => {
    navigate(`/Subcategorypage/${bar}`)
  }
  const getmilshake = () => {
    navigate(`/Subcategorypage/${milshake}`)
  }
    
  const Getespress = () => {
    navigate(`/Subcategorypage/${espress}`)
  }
  const Getfilter = () => {
    navigate(`/Subcategorypage/${filter}`)
  }
  const Getcoffee = () => {
    navigate(`/Subcategorypage/${coffee}`)
  }
  const Getpercol = () => {
    navigate(`/Subcategorypage/${percol}`)
  }
  const Getwater = () => {
    navigate(`/Subcategorypage/${water}`)
  }
  
  useEffect(() => {
    console.log('asdasd')
    getAllProducts()
  }, [page])

    return (
<>

<Home/>
<div >
        
        <div className='flex justify-evenly flex-wrap my-4' >

        <div style={containerStyle} className="subhovers" onClick={Geticecream}>
        <img src={piz1} alt="Fairs" style={imageStyle} />
        <p>{t("PizzaOvens")}</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getjuice}>
        <img src={piz2} alt="Fairs" style={imageStyle} />
        <p>{t("PizzaPrepCounters")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getmachine}>
        <img src={piz3} alt="Fairs" style={imageStyle} />
        <p>{t("DoughMixers")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getmixers}>
        <img src={piz4} alt="Fairs" style={imageStyle} />
        <p>{t("GyrosKebabGrills")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getslush}>
        <img src={piz5} alt="Fairs" style={imageStyle} />
        <p>{t("Planetarymixers")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getbar}>
        <img src={piz6} alt="Fairs" style={imageStyle} />
        <p>{t("RotisseriesOvens")}</p>
      </div>
      </div>
      <div className='flex justify-evenly flex-wrap my-4' >
      <div style={containerStyle} className="subhovers" onClick={getmilshake}>
        <img src={piz7} alt="Fairs" style={imageStyle} />
        <p>{t("CharcoalGrills")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getespress}>
        <img src={piz8} alt="Fairs" style={imageStyle} />
        <p>{t("PitaOvensGrills")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getfilter}>
        <img src={piz9} alt="Fairs" style={imageStyle} />
        <p>{t("ChickenWarmers")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getcoffee}>
        <img src={piz10} alt="Fairs" style={imageStyle} />
        <p>{t("DoughRollers")}</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getpercol}>
        <img src={piz11} alt="Fairs" style={imageStyle} />
        <p>{t("PizzaStorage")}</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getwater}>
        <img src={piz12} alt="Fairs" style={imageStyle} />
        <p>{t("PizzaUtensils")}</p>
      </div>
    </div>

      </div>
      <hr/>
<h1 className="flex  flex-wrap justify-center heads">{t("products")}</h1>

<div className='flex  flex-wrap justify-center   '>
        {products.map((eachProduct, i) => (
          <Cardss index={eachProduct._id} price={eachProduct.price} img={eachProduct.imageUrl} text={eachProduct.name} 
          paragraph={eachProduct.description} cats={eachProduct.category} colors={eachProduct.color}
          mats={eachProduct.material} capicitys = {eachProduct.capacity} shelf = {eachProduct.shelves} lids = {eachProduct.lid} 
          lights = {eachProduct.lightening} levels = {eachProduct.noiselevel} doors = {eachProduct.door} widths = {eachProduct.Width}
          depths = {eachProduct.depth} heights = {eachProduct.height} weights = {eachProduct.weight} consumptions = {eachProduct.powerconsumption}
          supplys = {eachProduct.powersupply} powers = {eachProduct.power} temps = {eachProduct.temperature} refris = {eachProduct.refrigerant}
          coolings = {eachProduct.cooling} warrantys = {eachProduct.warranty} castorss = {eachProduct.castors} trays = {eachProduct.tray}
          pressures = {eachProduct.pressure} productions = {eachProduct.production} innerheights = {eachProduct.innerheight} baskets = {eachProduct.basket}
          programss = {eachProduct.programs} volumes = {eachProduct.volume} cycless = {eachProduct.watercycles} pumps = {eachProduct.waterpump}
          rinsepowers = {eachProduct.rinsepower} dispensers = {eachProduct.dispenser} rinsefuncs = {eachProduct.rinsefunc} volumerinses = {eachProduct.volumerinse}
          versions = {eachProduct.version} taps = {eachProduct.tap} outputs = {eachProduct.output} feets = {eachProduct.productfeet}
          bottomshelfs = {eachProduct.bottomshelf} bowlposs = {eachProduct.bowlpos} sinkbowls = {eachProduct.sinkbowl} upstands = {eachProduct.upstand}
          assemblys = {eachProduct.assembled} timers = {eachProduct.timer} controlss = {eachProduct.controls} rpms = {eachProduct.rpm}
          speedss = {eachProduct.speeds} includeds = {eachProduct.included} weldingbars = {eachProduct.weldingbar} bins = {eachProduct.bin}
          waterconnections = {eachProduct.waterconnection} types = {eachProduct.type} locks = {eachProduct.lock} worksurfaces = {eachProduct.worksurface}
          gasconsumptions = {eachProduct.gasconsumption} defrosts = {eachProduct.defrost} steams = {eachProduct.steam} piecess = {eachProduct.pieces}
          diameters = {eachProduct.diameter} lengths = {eachProduct.length}

          />
        ))}
      </div>


      <BasicPagination shape="rounded" setPage={setPage} pageNumber={numberOfPages} />

</>
    )
}
export default Pizzeria;
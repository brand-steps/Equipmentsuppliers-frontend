import { useNavigate } from "react-router-dom";
import Cardss from "../Products/Cardss";
import BasicPagination from "../Products/Pagination";
import React, { useState, useEffect } from 'react'
import Home from "../HOme/Home";
import axios from 'axios'
import './categorypages.css';
import bev1 from '../../Images/bev1.jpg';
import bev2 from '../../Images/bev2.jpg';
import bev3 from '../../Images/bev3.jpg';
import bev4 from '../../Images/bev4.jpg';
import bev5 from '../../Images/bev5.jpg';
import bev6 from '../../Images/bev6.jpg';
import bev7 from '../../Images/bev7.jpg';
import bev8 from '../../Images/bev8.jpg';
import bev9 from '../../Images/bev9.jpg';
import bev10 from '../../Images/bev10.jpg';
import bev11 from '../../Images/bev11.jpg';
import bev12 from '../../Images/bev12.jpg';
import bev13 from '../../Images/bev13.jpg';
import bev14 from '../../Images/bev14.jpg';
import { useTranslation } from 'react-i18next'

const Beverage = () => {
  const {t} = useTranslation(["product"]);

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loadProduct, setLoadProduct] = useState(false)
    const [page, setPage] = useState(1)
    const [numberOfPages, setnumberOfPages] = useState(9)
    const [StarsArray, setStarsArray] = useState([1, 2, 3])

    const [icecream , Seticecream] = useState("Ice Cream & Yoghurt Machines");
    const [juice , Setjuice] = useState("Juice Dispensers");
    const [machine , Setmachine] = useState("Juicer Machines");
    const [mixers , Setmixers] = useState("Hand Mixers & immersion Blenders");
    const [slush , Setslush] = useState("Slush Machines");
    const [bar , Setbar] = useState("Bar Blenders");
    const [milshake , Setmilshake] = useState("Milshakes & Bar Mixers");
    const [espress , Setespress] = useState("Espresso Coffee Machines");
    const [filter , Setfilter] = useState("Filter Coffee Machines");
    const [coffee , Setcoffee] = useState("Coffee Grinders");
    const [percol , Setpercol] = useState("Percolators & Coffee Urns");
    const [water , Setwater] = useState("Water Boilers & Water Dispensers");
    const [choco , Setchoco] = useState("Chocolate Machines");
    const [cup , Setcup] = useState("Cup Warmers");
    
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
      const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/Beverage?page=${page}`);
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
  const getchoco = () => {
    navigate(`/Subcategorypage/${choco}`)
  }
  const getcup = () => {
    navigate(`/Subcategorypage/${cup}`)
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
        <img src={bev1} alt="Fairs" style={imageStyle} />
        <p>{t("IceCreamMachines")}</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getjuice}>
        <img src={bev2} alt="Fairs" style={imageStyle} />
        <p>{t("JuiceDispensers")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getmachine}>
        <img src={bev3} alt="Fairs" style={imageStyle} />
        <p>{t("JuicerMachines")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getmixers}>
        <img src={bev4} alt="Fairs" style={imageStyle} />
        <p>{t("HandMixersimmersion")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getslush}>
        <img src={bev5} alt="Fairs" style={imageStyle} />
        <p>{t("SlushMachines")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getbar}>
        <img src={bev6} alt="Fairs" style={imageStyle} />
        <p>{t("BarBlenders")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getmilshake}>
        <img src={bev7} alt="Fairs" style={imageStyle} />
        <p>{t("MilshakesBarMixers")}</p>
      </div>
      </div>
      <div className='flex justify-evenly flex-wrap my-4' >
      <div style={containerStyle} className="subhovers" onClick={Getespress}>
        <img src={bev8} alt="Fairs" style={imageStyle} />
        <p>{t("EspressoCoffeeMachines")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getfilter}>
        <img src={bev9} alt="Fairs" style={imageStyle} />
        <p>{t("FilterCoffeeMachines")}</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getcoffee}>
        <img src={bev10} alt="Fairs" style={imageStyle} />
        <p>{t("CoffeeGrinders")}</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getpercol}>
        <img src={bev11} alt="Fairs" style={imageStyle} />
        <p>{t("PercolatorsUrns")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getwater}>
        <img src={bev12} alt="Fairs" style={imageStyle} />
        <p>{t("WaterDispensers")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getchoco}> 
        <img src={bev13} alt="Fairs" style={imageStyle} />
        <p>{t("ChocolateMachines")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getcup}>
        <img src={bev14} alt="Fairs" style={imageStyle} />
        <p>{t("CupWarmers")}</p>
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
export default Beverage;
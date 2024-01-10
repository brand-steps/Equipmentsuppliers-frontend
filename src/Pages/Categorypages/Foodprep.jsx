import { useNavigate } from "react-router-dom";
import Cardss from "../Products/Cardss";
import BasicPagination from "../Products/Pagination";
import React, { useState, useEffect } from 'react'
import Home from "../HOme/Home";
import axios from 'axios'
import './categorypages.css';
import foo1 from '../../Images/foo1.jpg';
import foo2 from '../../Images/foo2.jpg';
import foo3 from '../../Images/foo3.jpg';
import foo4 from '../../Images/foo4.jpg';
import foo5 from '../../Images/foo5.jpg';
import foo6 from '../../Images/foo6.jpg';
import foo7 from '../../Images/foo7.jpg';
import foo8 from '../../Images/foo8.jpg';
import foo9 from '../../Images/foo9.jpg';
import foo10 from '../../Images/foo10.jpg';
import foo11 from '../../Images/foo11.jpg';
import foo12 from '../../Images/foo12.jpg';
import { useTranslation } from 'react-i18next'

const Foodprep = () => {
  const {t} = useTranslation(["product"]);

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loadProduct, setLoadProduct] = useState(false)
    const [page, setPage] = useState(1)
    const [numberOfPages, setnumberOfPages] = useState(9)
    const [StarsArray, setStarsArray] = useState([1, 2, 3])

    const [icecream , Seticecream] = useState("Planetary Mixers");
    const [juice , Setjuice] = useState("Spiral Mixers & Dough Kneaders");
    const [machine , Setmachine] = useState("Vegetable Prep Machines");
    const [mixers , Setmixers] = useState("Hand Mixers & immersion Blenders");
    const [slush , Setslush] = useState("Meat Mincers");
    const [bar , Setbar] = useState("Meat Slicers");
    const [milshake , Setmilshake] = useState("Bone Saw Machines");
    const [espress , Setespress] = useState("Sausage Stuffers");
    const [filter , Setfilter] = useState("Potato peelers");
    const [coffee , Setcoffee] = useState("Bread Slicers");
    const [percol , Setpercol] = useState("Vacuum Machines");
    const [water , Setwater] = useState("Hamburger Presses");

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
      const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/Foodprep?page=${page}`);
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
        <img src={foo1} alt="Fairs" style={imageStyle} />
        <p>{t("PlanetaryMixers")}</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getjuice}>
        <img src={foo2} alt="Fairs" style={imageStyle} />
        <p>{t("SpiralMixers")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getmachine}>
        <img src={foo3} alt="Fairs" style={imageStyle} />
        <p>{t("VegetableMachines")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getmixers}>
        <img src={foo4} alt="Fairs" style={imageStyle} />
        <p>{t("HandMixersBlenders")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getslush}>
        <img src={foo5} alt="Fairs" style={imageStyle} />
        <p>{t("MeatMincers")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getbar}>
        <img src={foo6} alt="Fairs" style={imageStyle} />
        <p>{t("MeatSlicers")}</p>
      </div>
      </div>
      <div className='flex justify-evenly flex-wrap my-4' >
      <div style={containerStyle} className="subhovers" onClick={getmilshake}>
        <img src={foo7} alt="Fairs" style={imageStyle} />
        <p>{t("BoneMachines")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getespress}>
        <img src={foo8} alt="Fairs" style={imageStyle} />
        <p>{t("SausageStuffers")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getfilter}>
        <img src={foo9} alt="Fairs" style={imageStyle} />
        <p>{t("Potatopeelers")}</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getcoffee}>
        <img src={foo10} alt="Fairs" style={imageStyle} />
        <p>{t("BreadSlicers")}</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getpercol}>
        <img src={foo11} alt="Fairs" style={imageStyle} />
        <p>{t("VacuumMachines")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getwater}>
        <img src={foo12} alt="Fairs" style={imageStyle} />
        <p>{t("HamburgerPresses")}</p>
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
export default Foodprep;
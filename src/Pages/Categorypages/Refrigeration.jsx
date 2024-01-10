import { useNavigate } from "react-router-dom";
import Cardss from "../Products/Cardss";
import BasicPagination from "../Products/Pagination";
import React, { useState, useEffect } from 'react'
import Home from "../HOme/Home";
import axios from 'axios'
import './categorypages.css';
import { useTranslation } from 'react-i18next'

import ref1 from '../../Images/ref1.jpg';
import ref2 from '../../Images/ref2.jpg';
import ref3 from '../../Images/ref3.jpg';
import ref4 from '../../Images/ref4.jpg';
import ref5 from '../../Images/ref5.jpg';
import ref6 from '../../Images/ref6.jpg';
import ref7 from '../../Images/ref7.jpg';
import ref8 from '../../Images/ref8.jpg';
import ref9 from '../../Images/ref9.jpg';
import ref10 from '../../Images/ref10.jpg';
import ref11 from '../../Images/ref11.jpg';
import ref12 from '../../Images/ref12.jpg';
import ref13 from '../../Images/ref13.jpg';
import ref14 from '../../Images/ref14.jpg';
import ref15 from '../../Images/ref15.jpg';
import ref16 from '../../Images/ref16.jpg';
import ref17 from '../../Images/ref17.jpg';
import ref18 from '../../Images/ref18.jpg';
import ref19 from '../../Images/ref19.jpg';
import ref20 from '../../Images/ref20.jpg';
import ref21 from '../../Images/ref21.jpg';
import ref22 from '../../Images/ref22.jpg';
import ref23 from '../../Images/ref23.jpg';
import ref24 from '../../Images/ref24.jpg';
import ref25 from '../../Images/ref25.jpg';
import ref26 from '../../Images/ref26.jpg';
import ref27 from '../../Images/ref27.jpg';
import ref28 from '../../Images/ref28.jpg';
import ref29 from '../../Images/ref29.jpg';
import ref30 from '../../Images/ref30.jpg';
import ref31 from '../../Images/ref31.jpg';

const Refrigration = () => {
  const {t} = useTranslation(["product"]);

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loadProduct, setLoadProduct] = useState(false)
    const [page, setPage] = useState(1)
    const [numberOfPages, setnumberOfPages] = useState(9)
    const [StarsArray, setStarsArray] = useState([1, 2, 3])
    
    const [Subcategory , SetSubcategory] = useState("Beer Fridges");
    const [BackBar , SetBackBar] = useState("Back Bar Refrigerators");
    const [minifridge , Setminifridge] = useState("Mini Fridges");
    const [Bottle , SetBottle] = useState("Bottle Coolers");
    const [wine , Setwine] = useState("Wine Coolers");
    const [undercounter , Setundercounter] = useState("Undercounter Fridges");
    const [glassdoor , Setglassdoor] = useState("Glass Door Fridges");
    const [underfreez , Setunderfreez] = useState("Undercounter Freezers");
    const [Icemaker , SetIcemaker] = useState("Ice Makers");
    const [uprightfri , Setuprightfri] = useState("Upright Fridges");
    const [uprightfre , Setuprightfre] = useState("Upright Freezers");
    const [chestfre , Setchestfre] = useState("Chest Freezers");
    const [refdis , Setrefdis] = useState("Refrigerated Displays & Merchandisers");
    const [cakecoun , Setcakecoun] = useState("Cake Counters & Patisserie Showcases");
    const [serveover , Setserveover] = useState("Serve Over Counters & Deli Display Refrigerators");
    const [counterfri , Setcounterfri] = useState("Counter Fridges");
    const [dryagi , Setdryagi] = useState("Dry Aging Refrigerators");
    const [lowref , Setlowref] = useState("Low Refrigerated Counters Chef Bases");
    const [counterfre , Setcounterfre] = useState("Counter Freezers");
    const [pizzatab , Setpizzatab] = useState("Refrigerated Pizza Tables");
        const [salad , Setsalad] = useState("Salad & Sandwitch Preparation Counters");
    const [Saladettes , SetSaladettes] = useState("Saladettes");
    const [displayref , Setdisplayref] = useState("Display Refrigerated Counters");
    const [bakery , Setbakery] = useState("Bakery Refrigeration");
    const [preptops , Setpreptops] = useState("Refrigerated Prep Tops");
    const [sushi , Setsushi] = useState("Sushi & Tapas Display Showcases");   
     const [multi , Setmulti] = useState("Multi Deck Displays & Refrigerated Wall Cabinets");
     const [supers , Setsupers] = useState("Supermarket Refrigerators");
    const [balst , Setbalst] = useState("Blast Chillers & Flash Freezers");
    const [coldroom , Setcoldroom] = useState("Cold Rooms & Freezer Rooms");
    const [dis , Setdis] = useState("Display Refrigeration");

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
      const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/Refrigration?page=${page}`);
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
const Getsubcat = () => {
  navigate(`/Subcategorypage/${Subcategory}`)
}
const Getbackbar = () => {
  navigate(`/Subcategorypage/${BackBar}`)
}
const Getminifridge = () => {
  navigate(`/Subcategorypage/${minifridge}`)
}
const Getbottle = () => {
  navigate(`/Subcategorypage/${Bottle}`)
}
const Getwine = () => {
  navigate(`/Subcategorypage/${wine}`)
}
const getUndercounter = () => {
  navigate(`/Subcategorypage/${undercounter}`)
}
const getglass = () => {
  navigate(`/Subcategorypage/${glassdoor}`)
}
const getUnderfreez = () => {
  navigate(`/Subcategorypage/${underfreez}`)
}
const getIcemaker = () => {
  navigate(`/Subcategorypage/${Icemaker}`)
}
const getuprightfri = () => {
  navigate(`/Subcategorypage/${uprightfri}`)
}
const getuprightfre = () => {
  navigate(`/Subcategorypage/${uprightfre}`)
}
const getchestfre = () => {
  navigate(`/Subcategorypage/${chestfre}`)
}
const getrefdis = () => {
  navigate(`/Subcategorypage/${refdis}`)
}
const getcakecoun = () => {
  navigate(`/Subcategorypage/${cakecoun}`)
}
const getserveover = () => {
  navigate(`/Subcategorypage/${serveover}`)
}
const getcounterfri = () => {
  navigate(`/Subcategorypage/${counterfri}`)
}
const getdryagi = () => {
  navigate(`/Subcategorypage/${dryagi}`)
}

const getlowref = () => {
  navigate(`/Subcategorypage/${lowref}`)
}
const getcounterfre = () => {
  navigate(`/Subcategorypage/${counterfre}`)
}
const getpizzatab = () => {
  navigate(`/Subcategorypage/${pizzatab}`)
}
const getsalad = () => {
  navigate(`/Subcategorypage/${salad}`)
}
const getSaladettes = () => {
  navigate(`/Subcategorypage/${Saladettes}`)
}
const getdisplayref = () => {
  navigate(`/Subcategorypage/${displayref}`)
}
const getbakery = () => {
  navigate(`/Subcategorypage/${bakery}`)
}
const getpreptops = () => {
  navigate(`/Subcategorypage/${preptops}`)
}
const getsushi = () => {
  navigate(`/Subcategorypage/${sushi}`)
}
const getmulti = () => {
  navigate(`/Subcategorypage/${multi}`)
}
const getsupers = () => {
  navigate(`/Subcategorypage/${supers}`)
}
const getbalst = () => {
  navigate(`/Subcategorypage/${balst}`)
}
const getcoldroom = () => {
  navigate(`/Subcategorypage/${coldroom}`)
}

const getdis = () => {
  navigate(`/Subcategorypage/${dis}`)
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

        <div style={containerStyle} className="subhovers" onClick={Getsubcat}>
        <img src={ref1} alt="Fairs" style={imageStyle} />
        <p>{t("Beer")}</p>
      </div>

      <div style={containerStyle} onClick={Getbackbar} className="subhovers">
        <img src={ref2} alt="Fairs" style={imageStyle} />
        <p>{t("BackBar")}</p>
      </div>
      <div style={containerStyle} onClick={Getminifridge} className="subhovers">
        <img src={ref3} alt="Fairs" style={imageStyle} />
        <p>{t("MiniFridges")}</p>
      </div>
      <div style={containerStyle} onClick={Getbottle} className="subhovers">
        <img src={ref4} alt="Fairs" style={imageStyle} />
        <p>{t("BottleCoolers")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getwine}>
        <img src={ref5} alt="Fairs" style={imageStyle} />
        <p>{t("WineCoolers")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getUndercounter}>
        <img src={ref6} alt="Fairs" style={imageStyle} />
        <p>{t("UndercounterFridges")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getglass}>
        <img src={ref8} alt="Fairs" style={imageStyle} />
        <p>{t("GlassDoorFridges")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getUnderfreez}>
        <img src={ref7} alt="Fairs" style={imageStyle} />
        <p>{t("UndercounterFreezers")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getIcemaker}>
        <img src={ref9} alt="Fairs" style={imageStyle} />
        <p>{t("IceMakers")}</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={getuprightfri}>
        <img src={ref10} alt="Fairs" style={imageStyle} />
        <p>{t("UprightFridges")}</p>
      </div>

      <div style={containerStyle} className="subhovers"onClick={getuprightfre}>
        <img src={ref11} alt="Fairs" style={imageStyle} />
        <p>{t("UprightFreezers")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getchestfre}>
        <img src={ref12} alt="Fairs" style={imageStyle} />
        <p>{t("ChestFreezers")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getrefdis}>
        <img src={ref13} alt="Fairs" style={imageStyle} />
        <p>{t("RefrigeratedDisplays")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getcakecoun}>
        <img src={ref14} alt="Fairs" style={imageStyle} />
        <p>{t("CakeCounters")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getserveover}>
        <img src={ref15} alt="Fairs" style={imageStyle} />
        <p>{t("ServeOverCounters")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getcounterfri}>
        <img src={ref16} alt="Fairs" style={imageStyle} />
        <p>{t("CounterFridges")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getdryagi}>
        <img src={ref17} alt="Fairs" style={imageStyle} />
        <p>{t("DryAgingRefrigerators")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getlowref}>
        <img src={ref18} alt="Fairs" style={imageStyle} />
        <p>{t("LowRefrigeratedCounters")}</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={getcounterfre}>
        <img src={ref19} alt="Fairs" style={imageStyle} />
        <p>{t("CounterFreezers")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getpizzatab}>
        <img src={ref20} alt="Fairs" style={imageStyle} />
        <p>{t("RefrigeratedPizza")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getsalad}>
        <img src={ref21} alt="Fairs" style={imageStyle} />
        <p>{t("SaladSandwitch")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getSaladettes}>
        <img src={ref22} alt="Fairs" style={imageStyle} />
        <p>{t("Saladettes")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getdisplayref}>
        <img src={ref23} alt="Fairs" style={imageStyle} />
        <p>{t("DisplayRefrigerated")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getbakery}>
        <img src={ref24} alt="Fairs" style={imageStyle} />
        <p>{t("BakeryRefrigeration")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getpreptops}>
        <img src={ref25} alt="Fairs" style={imageStyle} />
        <p>{t("RefrigeratedPrep")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getsushi}>
        <img src={ref26} alt="Fairs" style={imageStyle} />
        <p>{t("SushiDisplayShowcases")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getmulti}>
        <img src={ref27} alt="Fairs" style={imageStyle} />
        <p>{t("MultiDeckDisplays")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getsupers}>
        <img src={ref28} alt="Fairs" style={imageStyle} />
        <p>{t("SupermarketRefrigerators")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getbalst}>
        <img src={ref29} alt="Fairs" style={imageStyle} />
        <p>{t("BlastChillers")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getcoldroom}>
        <img src={ref30} alt="Fairs" style={imageStyle} />
        <p>{t("ColdRoomsFreezer")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getdis}>
        <img src={ref31} alt="Fairs" style={imageStyle} />
        <p>{t("DisplayRefrigeration")}</p>
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
export default Refrigration;
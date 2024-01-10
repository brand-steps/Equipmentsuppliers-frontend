import { useNavigate } from "react-router-dom";
import Cardss from "../Products/Cardss";
import BasicPagination from "../Products/Pagination";
import React, { useState, useEffect } from 'react'
import Home from "../HOme/Home";
import axios from 'axios'
import './categorypages.css';
import coo1 from '../../Images/coo1.jpg';
import coo2 from '../../Images/coo2.jpg';
import coo3 from '../../Images/coo3.jpg';
import coo4 from '../../Images/coo4.jpg';
import coo5 from '../../Images/coo5.jpg';
import coo6 from '../../Images/coo6.jpg';
import coo7 from '../../Images/coo7.jpg';
import coo8 from '../../Images/coo8.jpg';
import coo9 from '../../Images/coo9.jpg';
import coo10 from '../../Images/coo10.jpg';
import coo11 from '../../Images/coo11.jpg';
import coo12 from '../../Images/coo12.jpg';
import coo13 from '../../Images/coo13.jpg';
import coo14 from '../../Images/coo14.jpg';
import { useTranslation } from 'react-i18next'

const Cooking = () => {
  const {t} = useTranslation(["product"]);

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loadProduct, setLoadProduct] = useState(false)
    const [page, setPage] = useState(1)
    const [numberOfPages, setnumberOfPages] = useState(9)
    const [StarsArray, setStarsArray] = useState([1, 2, 3])

    const [icecream , Seticecream] = useState("Boiling Tops & Hobs");
    const [juice , Setjuice] = useState("Induction");
    const [machine , Setmachine] = useState("Range Ovens & Floor Standing Cooker");
    const [mixers , Setmixers] = useState("Bains Marie & Hotpots");
    const [slush , Setslush] = useState("Chargrills & Gas Grills");
    const [bar , Setbar] = useState("BBQ Grills");
    const [milshake , Setmilshake] = useState("Chip Scuttles");
    const [espress , Setespress] = useState("Fryers");
    const [filter , Setfilter] = useState("Griddles");
    const [coffee , Setcoffee] = useState("Pasta Boilers");
    const [percol , Setpercol] = useState("Tilting Bratt Pans");
    const [water , Setwater] = useState("Wok Stoves");
    const [choco , Setchoco] = useState("Bases & Neutral Units");
    const [cup , Setcup] = useState("Modular Cooking Ranges");     

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
      const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/Cooking?page=${page}`);
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
        <img src={coo1} alt="Fairs" style={imageStyle} />
        <p>{t("BoilingHobs")}</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getjuice}>
        <img src={coo2} alt="Fairs" style={imageStyle} />
        <p>{t("Induction")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getmachine}>
        <img src={coo3} alt="Fairs" style={imageStyle} />
        <p>{t("RangeOvens")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getmixers}>
        <img src={coo4} alt="Fairs" style={imageStyle} />
        <p>{t("BainsMarieHotpots")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getslush}>
        <img src={coo5} alt="Fairs" style={imageStyle} />
        <p>{t("Chargrills")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getbar}>
        <img src={coo6} alt="Fairs" style={imageStyle} />
        <p>{t("BBQGrills")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getmilshake}>
        <img src={coo7} alt="Fairs" style={imageStyle} />
        <p>{t("ChipScuttles")}</p>
      </div>
      </div>
      <div className='flex justify-evenly flex-wrap my-4' >
      <div style={containerStyle} className="subhovers" onClick={Getespress}>
        <img src={coo8} alt="Fairs" style={imageStyle} />
        <p>{t("Fryers")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getfilter}>
        <img src={coo9} alt="Fairs" style={imageStyle} />
        <p>{t("Griddless")}</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getcoffee}>
        <img src={coo10} alt="Fairs" style={imageStyle} />
        <p>{t("PastaBoilers")}</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getpercol}>
        <img src={coo11} alt="Fairs" style={imageStyle} />
        <p>{t("TiltingPans")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getwater}>
        <img src={coo12} alt="Fairs" style={imageStyle} />
        <p>{t("WokStoves")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getchoco}>
        <img src={coo13} alt="Fairs" style={imageStyle} />
        <p>{t("BasesUnits")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getcup}>
        <img src={coo14} alt="Fairs" style={imageStyle} />
        <p>{t("ModularRanges")}</p>
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
export default Cooking;
import { useNavigate } from "react-router-dom";
import Cardss from "../Products/Cardss";
import BasicPagination from "../Products/Pagination";
import React, { useState, useEffect } from 'react'
import Home from "../HOme/Home";
import axios from 'axios'
import './categorypages.css';
import app1 from '../../Images/app1.jpg';
import app2 from '../../Images/app2.jpg';
import app3 from '../../Images/app3.jpg';
import app4 from '../../Images/app4.jpg';
import app5 from '../../Images/app5.jpg';
import app6 from '../../Images/app6.jpg';
import app7 from '../../Images/app7.jpg';
import app8 from '../../Images/app8.jpg';
import app9 from '../../Images/app9.jpg';
import app10 from '../../Images/app10.jpg';
import app11 from '../../Images/app11.jpg';
import app12 from '../../Images/app12.jpg';
import app13 from '../../Images/app13.jpg';
import app14 from '../../Images/app14.jpg';
import app15 from '../../Images/app15.jpg';
import app16 from '../../Images/app16.jpg';
import app17 from '../../Images/app17.jpg';
import app18 from '../../Images/app18.jpg';
import app19 from '../../Images/app19.jpg';
import app20 from '../../Images/app20.jpg';
import app21 from '../../Images/app21.jpg';
import app22 from '../../Images/app22.jpg';
import app23 from '../../Images/app23.jpg';
import { useTranslation } from 'react-i18next'

const Appliances = () => {
  const {t} = useTranslation(["product"]);

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loadProduct, setLoadProduct] = useState(false)
    const [page, setPage] = useState(1)
    const [numberOfPages, setnumberOfPages] = useState(9)
    const [StarsArray, setStarsArray] = useState([1, 2, 3])

    const [icecream , Seticecream] = useState("Table Top Fryers");
    const [juice , Setjuice] = useState("Countertop Mixers");
    const [machine , Setmachine] = useState("Griddles");
    const [mixers , Setmixers] = useState("Microwaves");
    const [slush , Setslush] = useState("Panini / Contact Grills");
    const [bar , Setbar] = useState("Roller Grills");
    const [milshake , Setmilshake] = useState("Food Warming");
    const [espress , Setespress] = useState("Hotdog Warmers");
    const [filter , Setfilter] = useState("Heated Merchandisers / Displays");
    const [coffee , Setcoffee] = useState("Induction Cookers");
    const [percol , Setpercol] = useState("Table Top Bains Marie & Hotpots");
    const [water , Setwater] = useState("Soup Kettles");
    const [choco , Setchoco] = useState("Rice Cookers");
    const [cup , Setcup] = useState("Salamanders");    
    const [Glass , SetGlass] = useState("Toasters");
    const [underdish , Setunderdish] = useState("Pressure Cookers");
    const [passthrough , Setpassthrough] = useState("Sous Vide & Slow Cookers");
    const [dishwash , Sedishwash] = useState("Waffle Makers");
    const [cuttlery , Setcuttlery] = useState("Knife Sterilisers");
    const [shower , Setshower] = useState("Egg Boilers");
    const [racks , Setracks] = useState("Popcorn Machines");
    const [candy , Setcandy] = useState("Candy Floss Machines");
    const [insect , Setinsect] = useState("Insect Killers");

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
      const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/Appliances?page=${page}`);
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
  const GetGlass = () => {
    navigate(`/Subcategorypage/${Glass}`)
  }
  const Getunderdish = () => {
    navigate(`/Subcategorypage/${underdish}`)
  }
  const Getpassthrough = () => {
    navigate(`/Subcategorypage/${passthrough}`)
  }
  const Getdishwash = () => {
    navigate(`/Subcategorypage/${dishwash}`)
  }
  const Getcuttlery = () => {
    navigate(`/Subcategorypage/${cuttlery}`)
  }
  const getshower = () => {
    navigate(`/Subcategorypage/${shower}`)
  }
  const getracks = () => {
    navigate(`/Subcategorypage/${racks}`)
  }
  const getcandy = () => {
    navigate(`/Subcategorypage/${candy}`)
  }
  const getinsect = () => {
    navigate(`/Subcategorypage/${insect}`)
  }
  useEffect(() => {
    console.log('asdasd')
    getAllProducts()
  }, [page])

    return (
<>

<Home/>
<div >
        
        <div className='flex justify-evenly flex-wrap my-4'  >

        <div style={containerStyle} onClick={Geticecream} className="subhovers">
        <img src={app1}  alt="Fairs" style={imageStyle} />
        <p>{t("TableTop")}</p>
      </div>

      <div style={containerStyle} onClick={Getjuice} className="subhovers">
        <img src={app2}  alt="Fairs" style={imageStyle} />
        <p>{t("CountertopMixers")}</p>
      </div>
      <div style={containerStyle} onClick={Getmachine} className="subhovers">
        <img src={app3}  alt="Fairs" style={imageStyle} />
        <p>{t("Griddles")}</p>
      </div>
      <div style={containerStyle} onClick={Getmixers} className="subhovers">
        <img src={app4}  alt="Fairs" style={imageStyle} />
        <p>{t("Microwaves")}</p>
      </div>
      <div style={containerStyle} onClick={Getslush} className="subhovers">
        <img src={app5}  alt="Fairs" style={imageStyle} />
        <p>{t("Panini")}</p>
      </div>
      <div style={containerStyle} onClick={getbar} className="subhovers">
        <img src={app6}  alt="Fairs" style={imageStyle} />
        <p>{t("RollerGrills")}</p>
      </div>
      <div style={containerStyle} onClick={getmilshake} className="subhovers">
        <img src={app7}  alt="Fairs" style={imageStyle} />
        <p>{t("FoodWarming")}</p>
      </div>
      <div style={containerStyle} onClick={Getespress} className="subhovers">
        <img src={app8} alt="Fairs" style={imageStyle} />
        <p>{t("HotdogWarmers")}</p>
      </div>
      <div style={containerStyle} onClick={Getfilter} className="subhovers">
        <img src={app9}  alt="Fairs" style={imageStyle} />
        <p>{t("HeatedMerchandisers")}</p>
      </div>

      <div style={containerStyle} onClick={Getcoffee} className="subhovers">
        <img src={app10}  alt="Fairs" style={imageStyle} />
        <p>{t("InductionCookers")}</p>
      </div>

      <div style={containerStyle}  onClick={Getpercol} className="subhovers">
        <img src={app11} alt="Fairs" style={imageStyle} />
        <p>{t("TableTopBains")}</p>
      </div>
      <div style={containerStyle} onClick={Getwater} className="subhovers">
        <img src={app12}  alt="Fairs" style={imageStyle} />
        <p>{t("SoupKettles")}</p>
      </div>
      <div style={containerStyle} onClick={getchoco} className="subhovers">
        <img src={app13} alt="Fairs" style={imageStyle} />
        <p>{t("RiceCookers")}</p>
      </div>
      <div style={containerStyle} onClick={getcup} className="subhovers">
        <img src={app14} alt="Fairs" style={imageStyle} />
        <p>{t("Salamanders")}</p>
      </div>
      <div style={containerStyle}  onClick={GetGlass} className="subhovers">
        <img src={app15} alt="Fairs" style={imageStyle} />
        <p>{t("Toasters")}</p>
      </div>
      <div style={containerStyle} onClick={Getunderdish} className="subhovers">
        <img src={app16} alt="Fairs" style={imageStyle} />
        <p>{t("PressureCookers")}</p>
      </div>
      <div style={containerStyle}  onClick={Getpassthrough} className="subhovers">
        <img src={app17} alt="Fairs" style={imageStyle} />
        <p>{t("SousVide")}</p>
      </div>
      <div style={containerStyle} onClick={Getdishwash} className="subhovers">
        <img src={app18} alt="Fairs" style={imageStyle} />
        <p>{t("WaffleMakers")}</p>
      </div>

      <div style={containerStyle} onClick={Getcuttlery} className="subhovers">
        <img src={app19} alt="Fairs" style={imageStyle} />
        <p>{t("KnifeSterilisers")}</p>
      </div>
      <div style={containerStyle} onClick={getshower} className="subhovers">
        <img src={app20} alt="Fairs" style={imageStyle} />
        <p>{t("EggBoilers")}</p>
      </div>
      <div style={containerStyle} onClick={getracks} className="subhovers">
        <img src={app21} alt="Fairs" style={imageStyle} />
        <p>{t("PopcornMachines")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getcandy}>
        <img src={app22} alt="Fairs" style={imageStyle} />
        <p>{t("CandyFlossMachines")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getinsect} >
        <img src={app23} alt="Fairs" style={imageStyle} />
        <p>{t("InsectKillers")}</p>
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
export default Appliances;
import { useNavigate } from "react-router-dom";
import Cardss from "../Products/Cardss";
import BasicPagination from "../Products/Pagination";
import React, { useState, useEffect } from 'react'
import Home from "../HOme/Home";
import axios from 'axios'
import './categorypages.css';
import ste1 from '../../Images/ste1.jpg';
import ste2 from '../../Images/ste2.jpg';
import ste3 from '../../Images/ste3.jpeg';
import ste4 from '../../Images/ste4.jpg';
import ste5 from '../../Images/ste5.jpg';
import ste6 from '../../Images/ste6.jpg';
import ste7 from '../../Images/ste7.jpg';
import ste8 from '../../Images/ste8.jpg';
import ste9 from '../../Images/ste9.jpg';
import ste10 from '../../Images/ste10.jpg';
import ste11 from '../../Images/ste11.jpg';
import ste12 from '../../Images/ste12.jpg';
import ste13 from '../../Images/ste13.jpg';
import ste14 from '../../Images/ste14.jpg';
import ste15 from '../../Images/ste15.jpg';
import ste16 from '../../Images/ste16.jpg';
import ste17 from '../../Images/ste17.jpg';
import ste18 from '../../Images/ste18.jpg';
import ste19 from '../../Images/ste19.jpg';
import ste20 from '../../Images/ste20.jpg';
import ste21 from '../../Images/ste21.jpg';
import ste22 from '../../Images/ste22.jpg';
import ste23 from '../../Images/ste23.jpg';
import { useTranslation } from 'react-i18next'

const Stainlesssteel = () => {
  const {t} = useTranslation(["product"]);

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loadProduct, setLoadProduct] = useState(false)
    const [page, setPage] = useState(1)
    const [numberOfPages, setnumberOfPages] = useState(9)
    const [StarsArray, setStarsArray] = useState([1, 2, 3])

    const [icecream , Seticecream] = useState("Work Tables");
    const [juice , Setjuice] = useState("Sink Units with 1 & 2 Bowls");
    const [machine , Setmachine] = useState("Sink Units with 3 Bowls");
    const [mixers , Setmixers] = useState("Sink Top Storage Cupboards");
    const [slush , Setslush] = useState("Sink Tops");
    const [bar , Setbar] = useState("Sink Units For Dishwashers");
    const [milshake , Setmilshake] = useState("Wall Shelves");
    const [espress , Setespress] = useState("Wash Basin & Hand Sinks");
    const [filter , Setfilter] = useState("Bar Sinks");
    const [coffee , Setcoffee] = useState("Base Storage Cupboards");
    const [percol , Setpercol] = useState("Ice Bins");
    const [water , Setwater] = useState("Plain Top Hot Cupboards");
    const [choco , Setchoco] = useState("Cabinet Storage Cupboards");
    const [cup , Setcup] = useState("Work Stations");    
    const [Glass , SetGlass] = useState("Wall Cupboards");
    const [underdish , Setunderdish] = useState("Gantries & Chefs Passes");
    const [passthrough , Setpassthrough] = useState("Extraction Canopies");
    const [dishwash , Sedishwash] = useState("Grease Traps & Fat Seperators");
    const [cuttlery , Setcuttlery] = useState("Shelving Units");
    const [shower , Setshower] = useState("Equipment Stands");
    const [racks , Setracks] = useState("Waste Bins");
    const [candy , Setcandy] = useState("Trolleys & Carts");
    const [insect , Setinsect] = useState("Stainless Steel GN Pans & Container");    

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
      const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/StainlessSteel?page=${page}`);
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
        
        <div className='flex justify-evenly flex-wrap my-4' >

        <div style={containerStyle} className="subhovers" onClick={Geticecream}>
        <img src={ste1} alt="Fairs" style={imageStyle} />
        <p>{t("WorkTables")}</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getjuice}>
        <img src={ste2} alt="Fairs" style={imageStyle} />
        <p>{t("Sink12Bowls")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getmachine}>
        <img src={ste3} alt="Fairs" style={imageStyle} />
        <p>{t("Sink3Bowls")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getmixers}>
        <img src={ste4}alt="Fairs" style={imageStyle} />
        <p>{t("SinkTopStorage")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getslush}>
        <img src={ste5} alt="Fairs" style={imageStyle} />
        <p>{t("SinkTops")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getbar}>
        <img src={ste6} alt="Fairs" style={imageStyle} />
        <p>{t("SinkUnitsDishwashers")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getmilshake}>
        <img src={ste7} alt="Fairs" style={imageStyle} />
        <p>{t("WallShelves")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getespress}>
        <img src={ste8} alt="Fairs" style={imageStyle} />
        <p>{t("WashBasin")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getfilter}>
        <img src={ste9} alt="Fairs" style={imageStyle} />
        <p>{t("BarSinks")}</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getcoffee}>
        <img src={ste10} alt="Fairs" style={imageStyle} />
        <p>{t("BaseStorage")}</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getpercol}>
        <img src={ste11} alt="Fairs" style={imageStyle} />
        <p>{t("IceeBins")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getwater}>
        <img src={ste12} alt="Fairs" style={imageStyle} />
        <p>{t("PlainCupboards")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getchoco}>
        <img src={ste13} alt="Fairs" style={imageStyle} />
        <p>{t("CabinetStorageCupboards")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getcup}>
        <img src={ste14} alt="Fairs" style={imageStyle} />
        <p>{t("WorkStations")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={GetGlass}>
        <img src={ste15} alt="Fairs" style={imageStyle} />
        <p>{t("WallCupboards")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getunderdish}>
        <img src={ste16} alt="Fairs" style={imageStyle} />
        <p>{t("GantriesChefs")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getpassthrough}>
        <img src={ste17} alt="Fairs" style={imageStyle} />
        <p>{t("ExtractionCanopies")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getdishwash}>
        <img src={ste18} alt="Fairs" style={imageStyle} />
        <p>{t("GreaseTraps")}</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getcuttlery}>
        <img src={ste19} alt="Fairs" style={imageStyle} />
        <p>{t("ShelvingUnits")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getshower}>
        <img src={ste20} alt="Fairs" style={imageStyle} />
        <p>{t("EquipmentStands")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getracks}>
        <img src={ste21} alt="Fairs" style={imageStyle} />
        <p>{t("WasteBins")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getcandy}>
        <img src={ste22} alt="Fairs" style={imageStyle} />
        <p>{t("TrolleysCarts")}</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getinsect}>
        <img src={ste23} alt="Fairs" style={imageStyle} />
        <p>{t("StainlessSteelGN")}</p>
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
export default Stainlesssteel;
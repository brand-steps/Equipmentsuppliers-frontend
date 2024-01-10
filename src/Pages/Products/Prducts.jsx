import React, { useState, useEffect } from 'react'
import Home from '../HOme/Home'
import axios from 'axios'
import Second from '../Corporate/SecondSec/Second'
import ProductGroup from '../FirstPage/ProductGroup/ProductGroup'
import Footer from '../Foooter/Footer'
import Cardss from './Cardss'
import './ProductDetail.css'
import img1 from '../../Images/WhatsApp_Image_2022-02-07_at_17.14.26_.jpg'
import img2 from '../../Images/WhatsApp_Image_2022-02-07_at_16.52.42 (1).jpg'
import BasicPagination from './Pagination'
import { Link } from 'react-router-dom';
import ImageFilter from './SearchFilter'
import CategorySlider from './CategorySlider'
import Sidebar from '../AdminDashboard/Sidebar'
import SearchBar from '../HOme/SearchBar'
import ProductGroup2 from '../FirstPage/ProductGroup/ProductGroup2.'
import { useTranslation } from 'react-i18next'

const Prducts = () => {
  const {t} = useTranslation(["product"]);


  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [loadProduct, setLoadProduct] = useState(false)
  const [page, setPage] = useState(1)
  const [numberOfPages, setnumberOfPages] = useState(9)
  const [StarsArray, setStarsArray] = useState([1, 2, 3])
  let text = "Home  > Products "
  let name = "PRODUCTS"


  const performSearch = async () => {
    try {
      const response = await axios.get(
        `https://busy-lime-cygnet-hem.cyclic.cloud/api/v1/search?query=${searchInput}`
      );
      console.log("Search results: ", response.data);
      setProducts(response.data.data);
    } catch (error) {
      console.log("Error in performing search: ", error);
    }
  };
  const getAllProducts = async () => {
    try {
      const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/api/v1/paginatpost?page=${page}`);
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

  useEffect(() => {
    console.log('asdasd')
    getAllProducts()
  }, [page])

  return (
    <div>
      <Home />
      <div className="bg-cover flex flex-col w-full h-[300px] mb-4" style={{ backgroundImage: 'url(https://www.osimo.com.tr/assets/images/headers/pages.jpg)' }}>
        <div className='flex w-full h-[300px] justify-between items-center px-4 md:px-24'>
         <Link to={"/"}> <h1 className='text-white text-sm md:text-xl lg:text-2xl'>PRODUCTS</h1></Link>
          <h1 className='text-white text-sm md:text-xl lg:text-2xl'>{t("Home")}</h1>




        </div>


      </div>

      <ProductGroup2 />
       {/*<SearchBar/>*/}
    <CategorySlider/>

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

      <Footer />
    </div>
  )
}

export default Prducts
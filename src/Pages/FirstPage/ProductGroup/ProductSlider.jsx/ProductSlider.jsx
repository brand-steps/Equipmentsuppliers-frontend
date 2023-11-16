// import React from 'react';
import React, { useState , useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cardss from '../../../Products/Cardss';
import img2 from '../../../../Images/WhatsApp_Image_2022-02-07_at_16.52.42 (1).jpg'
import  img1  from  '../../../../Images/WhatsApp_Image_2022-02-07_at_17.14.26_.jpg'
import axios from 'axios';
const ProductSlider = () => {
const [products, setProducts] = useState([]);
const [productsBoolean, setProductsBoolean] = useState(false);
const [Delete , setdelete] = useState(false);

const getAllProducts = async () => {
  try {
    const response = await axios.get(`http://localhost:8000/bestsellerdisplaytrue`);
    console.log("response: ", response);
    console.log(response.data);
    setProducts(response.data.data);
    console.log("Products" + response.data.data);
  } catch (error) {
    console.log("Error In Getting All Products ", error);
  }
};

 useEffect(() => {
        console.log('asdasd')
        getAllProducts()
        // return () => {
        //   console.log('Cleanup Function');
        //  }
    }, [Delete , productsBoolean ])



  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
    swipeable={true}
    arrows={true} 
    draggable={true} 
    autoPlay={true}
    responsive={responsive}>
      {/*<Cardss img={img2} text={'Dough Kneading Machine'}  price={"600"}  paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
      <Cardss img="https://www.osimo.com.tr/dimg/kategoriler/blender-mikser_1.jpeg" price={"700"}  text={'Blender/ Mikser'} paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
  <Cardss img="https://www.osimo.com.tr/dimg/kategoriler/WhatsApp_Image_2022-02-07_at_17.14.26_4.jpeg" price={"800"}  text={'Professional Dough Kneading Machine'} paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
  <Cardss img="https://www.osimo.com.tr/dimg/kategoriler/QUATTRO.jpg" price={"900"}  text={'Oven'} paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
  <Cardss img={img1} text={'OVERTURN DOUGH KNEADING MACHINE'}   price={"1000"}  paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
<Cardss img="https://www.osimo.com.tr/dimg/kategoriler/WhatsApp_Image_2020-12-23_at_14.34.36.jpeg"  price={"1200"} text={'DOUGH ROLLER'}   paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
<Cardss img="https://www.osimo.com.tr/dimg/kategoriler/dik-tipi-buzdolabY.jpeg" text={'REFRIGERATORS'}   price={"400"}  paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
<Cardss img="https://www.osimo.com.tr/dimg/kategoriler/WhatsApp_Image_2020-12-23_at_14.35.20.jpeg"  price={"1300"} text={'MEAT MINCING MACHİNE'}   paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
  */}
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
    </Carousel>
  );
};

export default ProductSlider;

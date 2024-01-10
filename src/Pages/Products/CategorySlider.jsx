// import React from 'react';
import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import ProductSlider from '../FirstPage/ProductGroup/ProductSlider.jsx/ProductSlider.jsx';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'


const CategorySlider = () => {
    const {t} = useTranslation(["product"]);

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [productsBoolean, setProductsBoolean] = useState(false);
    const [Delete, setdelete] = useState(false);
    const [Modularkitchens, setModularkitchens] = useState(false)
    const [MainKitchenEquiment, setMainKitchenEquiment] = useState(false)
    const [coldUnits, setColdUnits] = useState(false)
    const [DishwasherEquipment, setDishwasherEquipment] = useState(false)
    const [ovens, setOvens] = useState(false)
    const [preprationMachine, setpreprationMachine] = useState(false)
    const [Neutral, setNeutral] = useState(false)
    const [OpenBuffet, setOpenBuffet] = useState(false)
    const [TeaCoffee, setTeaCoffee] = useState(false)
    const [CaffeBar, setCACaffeBar] = useState(false)
    const [CountertopKitchen, setCountertopKitchen] = useState(false)
    const [bakeryEqupent, setbakeryEqupent] = useState(false)
    const [KitchenUtensil , setKitchenUtensil] = useState(false)
    const [HygieneandSanitation , setHygieneandSanitation] =  useState(false)
    const [DesktopandPresentationEquiment , setDesktopandPresentationEquiment] = useState(false) 
    const [BeverageandBar , setBeverageandBar ] = useState(false)

   const [category, setCategory] = useState("");

   const divStyle = {
    cursor: "pointer",
    /* Other styles you might want to apply */
  };
    const getAllProducts = async () => {
        
        try {
            const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/api/v1/products`);
            console.log("response: ", response);
            console.log(products);
            setProducts(response.data.data);
        } catch (error) {
            console.log("error in getting all products", error);
        }
    };
    const getCategoryProducts = async (value) => {
        setCategory(value);
        console.log("sss",category)
        try {
            const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/api/v1/products`);
            console.log("response: ", response);
            console.log(products);
            setProducts(response.data.data);
        } catch (error) {
            console.log("error in getting all products", error);
        }
    };
    useEffect(() => {
        console.log('asdasd')
        getAllProducts()
        // return () => {
        //   console.log('Cleanup Function');
        //  }
    }, [Delete, productsBoolean])
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className='mx-6 my-4' style={divStyle}>
            <Carousel
                swipeable={true}
                arrows={true}
                draggable={true}
                autoPlay={true}
                responsive={responsive}

            >
                
                <div onClick={() => {navigate("/Refrigeration")}} onMouseEnter={() => (setOpenBuffet(true))} onMouseLeave={() => (setOpenBuffet(false))} className='flex flex-col justify-center items-center'>
                    <img className='w-20 h-12	' src="https://ozti.com/media/vhpberxz/tasima_arabalari.svg" alt="" />
                    <h1>{t("refrigeration")}</h1>
                </div>
                <div onClick={() => {navigate("/Dishwashing")}} onMouseEnter={() => (setDishwasherEquipment(true))} onMouseLeave={() => (setDishwasherEquipment(false))} className='flex flex-col justify-center items-center'>
                    <img className='w-20 h-12	' src="https://ozti.com/media/vr5npfcg/bulasik_giyotin.svg" alt="" />
                    <h1>{t("diswashing")}</h1>
                </div>
                <div onClick={() => {navigate("/Appliances")}} onMouseEnter={() => (setbakeryEqupent(true))} onMouseLeave={() => (setbakeryEqupent(false))} className='flex flex-col justify-center items-center'>
                    <img className='w-20 h-12' src="https://ozti.com/media/xgipiphp/pastane.svg" alt="" />
                    <h1>{t("appliances")}</h1>
                </div>
                <div onClick={() => {navigate("/StainlessSteel")}} onMouseEnter={() => (setNeutral(true))} onMouseLeave={() => (setNeutral(false))} className='flex flex-col justify-center items-center'>
                    <img className='w-20 h-12	' src="https://ozti.com/media/b1zf4p3m/davlumbaz.svg" alt="" />
                    <h1>{t("stainless Steel")}</h1>
                </div>
                <div onClick={() => {navigate("/Cooking")}} onMouseEnter={() => (setCountertopKitchen(true))} onMouseLeave={() => (setCountertopKitchen(false))} className='flex flex-col justify-center items-center'>
                    <img className='w-20 h-12	' src="https://ozti.com/media/0ezpsikc/mutfak_gerecleri.svg" alt="" />
                    <h1>{t("cooking")}</h1>
                </div>
                <div onClick={() => {navigate("/Foodprep")}} onMouseEnter={() => (setBeverageandBar(true))} onMouseLeave={() => (setBeverageandBar(false))}    className='flex flex-col justify-center items-center'>
                    <img className='w-20 h-12	' src="https://ozti.com/media/nlbmh4kh/buzlar-portakal.png" alt="" />
                    <h1>{t("food")}</h1>
                </div>
                <div onClick={() => {navigate("/Beverage")}} onMouseEnter={() => (setTeaCoffee(true))} onMouseLeave={() => (setTeaCoffee(false))} className='flex flex-col justify-center items-center'>
                    <img className='w-20 h-12	' src="https://ozti.com/media/yrxeybpa/kahve_makinasi.svg" alt="" />
                    <h1>{t("beverage")}t</h1>
                </div>


                <div onClick={() => {navigate("/Pizzeria")}} onMouseEnter={() => (setMainKitchenEquiment(true))} onMouseLeave={() => (setMainKitchenEquiment(false))} className='flex flex-col justify-center items-center'  >
                <img className='w-20 h-12	' src="https://ozti.com/media/hbpeulq3/ada-mutfak.svg" alt="" />
                    <h1>{t("pizzeria")}</h1>

                </div>

<div onClick={() => {navigate("/Ovens")}} onMouseEnter={() => (setMainKitchenEquiment(true))} onMouseLeave={() => (setMainKitchenEquiment(false))} className='flex flex-col justify-center items-center'  >
                    <img className='w-20 h-12	' src="https://ozti.com/media/mhtltgf5/ocak.svg" alt="" />
                    <h1>{t("oven")}</h1>

                </div>
                <div onClick={() => {navigate("/Utensils")}} onMouseEnter={() => (setDesktopandPresentationEquiment(true))} onMouseLeave={() => (setDesktopandPresentationEquiment(false))} className='flex flex-col justify-center items-center'>
                    <img className='w-20 h-12	' src="https://ozti.com/media/odhfgpj3/spoon.svg" alt="" />
                    <h1>{t("utensils")}</h1>
                </div>

{/*

                <div onMouseEnter={() => (setColdUnits(true))} onMouseLeave={() => (setColdUnits(false))} className='flex flex-col justify-center items-center 		'  >
                    <img className='w-20 h-12	' src="https://ozti.com/media/qqdj5bun/buzdolabi_tekkapakli.svg" alt="" />
                    <h1>Cold Units  </h1>

                </div>

                <div onMouseEnter={() => (setOvens(true))} onMouseLeave={() => (setOvens(false))} className='flex flex-col justify-center items-center'>
                    <img className='w-20 h-12	' src="https://ozti.com/media/w2mfko4s/firin.svg" alt="" />
                    <h1>Ovens    </h1>
                </div>
                <div onMouseEnter={() => (setpreprationMachine(true))} onMouseLeave={() => (setpreprationMachine(false))} className='flex flex-col justify-center items-center'>
                    <img className='w-20 h-12	' src="https://ozti.com/media/pzqjgiar/hazirlik_makinasi.svg" alt="" />
                    <h1>Prepration Machines     </h1>
                </div>



                <div onMouseEnter={() => (setCACaffeBar(true))} onMouseLeave={() => (setCACaffeBar(false))} className='flex flex-col justify-center items-center'>
                    <img className='w-20 h-12	' src="https://ozti.com/media/dxkph4va/bar_ekipmanlari.svg" alt="" />
                    <h1>Caffe & Bar Equiment      </h1>
                </div>



                <div   onMouseEnter={() => (setKitchenUtensil(true))} onMouseLeave={() => (setKitchenUtensil(false))}  className='flex flex-col justify-center items-center'>
                    <img className='w-20 h-12	' src="https://ozti.com/media/e4rf2phl/yard%C4%B1mc%C4%B1.svg" alt="" />
                    <h1>Kitchen     Utensils   </h1>
                </div>
                <div  onMouseEnter={() => (setHygieneandSanitation(true))} onMouseLeave={() => (setHygieneandSanitation(false))}  className='flex flex-col justify-center items-center'>
                    <img className='w-20 h-12	' src="https://ozti.com/media/xhzjtsmn/temizlik_ekipmanlari.svg" alt="" />
                    <h1>Hygiene and Sanitation Equiment </h1>
                </div>

                  */}


            </Carousel>
           {/* 
            {Modularkitchens ? <div className='w-full '  >
                <div className='flex '  >
                    <ul className='mr-36'   >
                        <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >600 Series </h1>
                        <li>Ranges</li>
                        <li>Cookers</li>
                        <li>Grills</li>
                        <li>Fryers</li>
                        <li>Potato Rests </li>
                        <li>Bain Maries </li>
                        <li>Cooking Pasta </li>
                        <li>Benches and Cabinets </li>
                    </ul>
                    <ul className='mr-36'   >
                        <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >700 Series </h1>
                        <li>Ranges</li>
                        <li>Cookers</li>
                        <li>Grills</li>
                        <li>Fryers</li>
                        <li>Potato Rests </li>
                        <li>Bain Maries </li>
                        <li>Cooking Pasta </li>
                        <li>Benches and Cabinets </li>
                        <li>Boiling Pots  </li>
                        <li>Tilating Pns  </li>
                    </ul>
                    <ul className='mr-36'   >
                        <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >700 Series </h1>
                        <li>Ranges</li>
                        <li>Cookers</li>
                        <li>Grills</li>
                        <li>Fryers</li>
                        <li>Potato Rests </li>
                        <li>Bain Maries </li>
                        <li>Cooking Pasta </li>
                        <li>Benches and Cabinets </li>
                        <li>Boiling Pots  </li>
                        <li>Tilating Pns  </li>
                    </ul>

                </div>
            </div> : null}
            {MainKitchenEquiment ?
                <div className='w-full '  >
                    <div className='flex '  >
                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Ranges </h1>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Cookers </h1>
                            <li>Electric Ranges </li>
                            <li>Gas Ranges </li>
                            <li> Induction  Ranges </li>
                            <li> Ground  Ranges </li>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Fryers</h1>


                        </ul>
                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Potato Resting  </h1>
                            <li>Hot Banquet Carts</li>
                            <li>Cold Banquet Trolleys</li>
                            <li>Neutral  Banquet Trolleys</li>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Bain Maries  </h1>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Food Processing Machinery   </h1>
                            <li>Meat Processing Machinery</li>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Vegetable  Processing Machinery   </h1>
                        </ul>
                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  > Toaster and Toaster  </h1>
                            <li>Conveyor Toasting Machines </li>
                            <li>Toast and Waffle  Machines </li>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  > Other Equiment   </h1>
                            <li>Salamader</li>
                            <li>Hamburger Press </li>
                            <li>Vaccum and Stretch Wrapping Machine </li>
                            <li>Crepe Waffle  Makees</li>
                        </ul>

                    </div>
                </div>
                : null}
            {coldUnits ?
                <div className='w-full '  >
                    <div className='flex '  >
                        <ul className='mr-36'   >




                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Refrigerators </h1>
                            <li>Vertical Refrigerators</li>
                            <li>Horizontal Refrigerators </li>
                            <li> Counter Type Refrigerator </li>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  > Deep Freezers </h1>
                            <li>Vertical Freezer</li>
                            <li>Horizontal Freezer </li>


                        </ul>
                        <ul className='mr-36'   >


                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Display Cabinets</h1>
                            <li>Meat Display Cabinets</li>
                            <li>Dry aged Cabinets</li>
                            <li>Milk Cupboard</li>
                            <li>Cake Display Cabinet</li>
                            <li>Salat Bars</li>
                            <li>Neutral  Banquet Trolleys</li>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Bain Maries  </h1>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Food Processing Machinery   </h1>
                            <li>Meat Processing Machinery</li>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Vegetable  Processing Machinery   </h1>
                        </ul>
                        <ul className='mr-36'   >

                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  > Preparation Cabinets </h1>
                            <li>Salad Preparation Cabinets </li>
                            <li>Pizza Preparation Cabinets </li>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Cold Storage Rooms    </h1>
                            <li>Deep Freezing Rooms</li>
                            <li>Cooler Rooms </li>
                        </ul>
                        <ul className='mr-36'   >



                            Other Cold Units
                            Service Units
                            Cold Service Counter

                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Other Cold Units</h1>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Service Units</h1>
                            <li>Cold Service Counter</li>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Water Dispensers</h1>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Ice Machines</h1>
                        </ul>

                    </div>
                </div>
                : null}
            {DishwasherEquipment ?
                <div className='w-full '  >
                    <div className='flex '  >
                        <ul className='mr-36'   >









                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Dishwashers</h1>
                            <li>Glass Washing</li>
                            <li>Under counter </li>
                            <li>Guillotine Type</li>
                            <li>Conveyor Washing</li>
                            <li>Flight Type</li>


                        </ul>
                        <ul className='mr-36'   >





                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Dishwasher Counters</h1>
                            <li>Washing Machines</li>
                            <li>Dishwasher Counters</li>
                            <li>Shower Sprays</li>
                        </ul>
                        <ul className='mr-36'   >






                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Dishwasher Baskets </h1>
                            <li>Plate Baskets </li>
                            <li>Cup Baskets</li>
                            <li>Cutlery Baskets</li>
                            <li>Basket Risers</li>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Drying and Polishing Machines</h1>
                        </ul>
                        <ul className='mr-36'   >







                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Garbage Shredders
                            </h1>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Trash Bins</h1>
                            <li>Cold Service Counter</li>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Stainless Steel Trash Cans</h1>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Garbage Containers</h1>
                        </ul>

                    </div>
                </div>
                : null}
            {ovens ?
                <div className='w-full '  >
                    <div className='flex '  >
                        <ul className='mr-36'   >










                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Combi Ovens</h1>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Convection Ovens</h1>



                        </ul>
                        <ul className='mr-36'   >








                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Imported Furnaces</h1>
                            <li>Unox Ovens</li>
                            <li>Rational Ovens</li>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Multipurpose ovens</h1>
                        </ul>
                        <ul className='mr-36'   >









                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  > Pizza Ovens </h1>
                            <li>Conveyor Ovens </li>
                            <li>Electrical Pizza Ovens</li>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Charcoal Ovens</h1>
                        </ul>
                        <ul className='mr-36'   >









                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  > Fermentation Cabinets</h1>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Microwave Ovens</h1>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Accessories</h1>
                        </ul>

                    </div>
                </div>
                : null}
            {preprationMachine ?
                <div className='w-full '  >
                    <div className='flex '  >
                        <ul className='mr-36'   >








                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Dough Processing Machines</h1>
                            <li>mixers</li>
                            <li>Dough Rolling Machines</li>
                            <li>Dough Dividing and Rounding Machines</li>
                            <li>Pasta Cutting Machines</li>
                            <li>Bread Slicers</li>



                        </ul>
                        <ul className='mr-36'   >









                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  > Vegetable Shredders</h1>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  > Potato Onion Garlic Peeling Machines</h1>

                        </ul>
                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  > Robot Coupe Products </h1>
                            <li>Hand Mixers </li>
                            <li>Vegetable Chop</li>
                            <li>Vegetable Chopper and Shredder</li>
                            <li>Vegetable Shredder</li>
                        </ul>
                        <ul className='mr-36'   >









                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  > Fermentation Cabinets</h1>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Microwave Ovens</h1>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Accessories</h1>
                        </ul>

                    </div>
                </div>
                : null}
            {Neutral ?
                <div className='w-full '  >
                    <div className='flex '  >



                        <ul className='mr-36'   >








                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Sinks and Countertops</h1>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >sinks</h1>
                            <li>Hand Washing Sinks</li>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Shelves and Cabinets</h1>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Stacking Racks</h1>




                        </ul>
                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  > Cars</h1>
                            <li>Flour - Sugar Trolleys</li>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  > Plate Trolleys</h1>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  > Restaurant Service Trolleys</h1>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >House Keeping Trolleys</h1>

                        </ul>
                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >  Hoods </h1>
                            <li>Island Type Hoods </li>
                            <li>Wall Mounted Hoods </li>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Floor Grates</h1>
                            <li>Center Siphon</li>
                            <li>Side Siphon</li>

                        </ul>
                        <ul className='mr-36'   >










                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Food Storage and Transport</h1>
                            <h2 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Transport Containers</h2>
                        </ul>

                    </div>
                </div>
                : null}
            {OpenBuffet ?
                <div className='w-full '  >
                    <div className='flex '  >



                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Display Cabinets</h1>
                            <li>Self-Service Display Cabinets</li>
                            <li>Built-in Self-Service Cabinets</li>
                            <li>Built-in Pool and Surfaces</li>
                            <li>Front Decors</li>
                        </ul>
                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  > Cars</h1>
                            <li>Room Service Trolleys</li>
                        </ul>
                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >  Other Units </h1>
                            <li>Service Rack</li>
                            <li>Cuver Unit </li>
                            <li>Tray Slide Stand </li>
                            <li>Accessories</li>
                        </ul>
                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Service Units</h1>
                            <li>Hot Service Counter</li>
                            <li>Neutral Service Counter</li>
                        </ul>

                    </div>
                </div>
                : null}
            {TeaCoffee ?
                <div className='w-full '  >
                    <div className='flex '  >





                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Imported Coffee Machines</h1>
                            <li>Simonelli Coffee Machines (1)</li>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Accessories</h1>
                        </ul>
                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Coffee Grinders</h1>
                            <li>Faema Coffee Grinders</li>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Brewing Equipment</h1>
                        </ul>
                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Coffee and Tea Makers</h1>
                            <li>Tea machine</li>
                            <li>Filter Coffee Machines </li>
                            <li>Boiler</li>
                        </ul>
                        <ul className='mr-36'   >



                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Hot Drink Serving Equipment</h1>
                            <li>Coffee Milk Pots</li>
                            <li>Coffee Machines</li>
                        </ul>

                    </div>
                </div>
                : null}
            {CaffeBar ?
                <div className='w-full '  >
                    <div className='flex '  >
                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Ice Serving Utensils</h1>
                            <li>Ice Buckets</li>
                            <li>Ice Shovels</li>
                            <li>Ice Shovels</li>
                        </ul>
                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  > Beverage Preparation Equipment</h1>
                            <li>Cocktail Mixers</li>
                            <li>jigger</li>
                        </ul>
                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Juicing Machines</h1>
                            <li>Juicers</li>
                        </ul>
                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Service Equipment</h1>
                            <li>Champagne Bucket Stands</li>
                            <li>Wine-Champagne Buckets</li>
                            <li>Cookies</li>
                            <li>Punch Bowls</li>
                        </ul>

                    </div>
                </div>
                : null}
            {CountertopKitchen ?
                <div className='w-full '  >
                    <div className='flex '  >
                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Cookers</h1>
                            <li>Pans</li>
                            <li>Halvane Pots</li>
                            <li>Cylindrical Pots</li>
                            <li>Specialty Ranges</li>
                            <li>cocarolar</li>
                        </ul>

                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Hand Tools</h1>
                            <li>Whispers and Beaters</li>
                            <li>Ladles and Colanders</li>
                            <li>tweezers</li>
                            <li>Service Tools</li>
                            <li>Pizza Utensils</li>
                            <li>Spatulas and Tongs</li>
                            <li>Meat Beaters</li>
                            <li>They will carve and peel</li>
                            <li> Decor Tools</li>
                            <li>They will open</li>
                            <li>scissors</li>
                            <li>Cutlery</li>
                            <li>Strainer and Sieves</li>
                        </ul>
                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Juicing Machines</h1>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Knives</h1>
                            
                            <li>Chef Knives</li>
                            <li>Decor Tools</li>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >F&B Equipment</h1>
                            <li>Cutlery Sets</li>
                            <li>Ashtrays</li>
                            <li>Salt Pepper and Spices</li>
                            <li>Sauce Oil and Vinegars</li>
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Gastronomy Tubs</h1>
                            <li>Stainless Steel GN Pans</li>
                            <li>GN Tub Strainers</li>
                        </ul>


                    </div>
                </div>
                : null}
            {bakeryEqupent ?
                <div className='w-full '  >
                    <div className='flex '  >
                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Other products</h1>
                            <li>Service Trolleys</li>
                            <li>Pastry Utensils</li>
                        </ul>

                        <ul className='mr-36'   >



                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Dough Processing Machines</h1>
                            <li>Dough Kneading Machines</li>
                            <li>Dough Rolling Machines</li>
                        </ul>
                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Pastry Molds</h1>
                            <li>cake molds</li>
                            <li>Volovans</li>
                            <li>circles</li>

                        </ul>


                    </div>
                </div>
                : null}
            {KitchenUtensil ?
                <div className='w-full '  >
                    <div className='flex '  >
                        <ul className='mr-36'   >
                         <h1     style={{ "color": "#EC0C36" }}  >Cookers </h1>
 <h1     style={{ "color": "#EC0C36" }}  >Pizza Cooking Equipment </h1>
 <h1     style={{ "color": "#EC0C36" }}  >Pots </h1>
 <h1     style={{ "color": "#EC0C36" }}  >Pans </h1>
 <h1     style={{ "color": "#EC0C36" }}  >Specialty Ranges </h1>
 <h1     style={{ "color": "#EC0C36" }}  >Gastronomy Tubs </h1>
 <li       >Polycarbonate GN Tubs </li>
 <li       >Polypropylene GN Pans </li>
 <h1     style={{ "color": "#EC0C36" }}  >Food Storage and Transport </h1>
                          
                        </ul>

                        <ul className='mr-36'   >
                        <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Hand Tools</h1>
                        
<li>Whispers and Beaters</li>
<li>skewers</li>
<li>Service Tools</li>
<li>Colanders</li>
<li>Meat Beaters</li>
<li>Hooks</li>
<li>Mortar</li>
<li>Decor Tools</li>
<li>Tables</li>
<li>Spatulas</li>
<li>Strainer and Sieves</li>
<li>Gloves and Aprons</li>
<li>Brushes</li>



                      
                            <li>Dough Kneading Machines</li>
                            <li>Dough Rolling Machines</li>
                        </ul>
                        <ul className='mr-36'   >
                        <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  > Knives</h1>
            
<li>Butcher Knives</li>
<li>Fish Knives</li>
<li>Vegetable Knives</li>
<li>Bread Knives</li>
<li>Double Handle Knives</li>
<li>Doner Knives</li>
<li>Rows</li>
<li>Chef Knives</li>
<li>Armors</li>
<li>Tables</li>
<li>Stripping Blades</li>
<li>Slicing Knives</li>
<li>Pastry & Pastry Knives</li>

                        
                            <li>Dough Kneading Machines</li>
                            <li>Dough Rolling Machines</li>
                        </ul>
                        <ul className='mr-36'   >
                            <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Polyethylene Sheets</h1>
                            <li>flat cutting sheets</li>
                        </ul>


                    </div>
                </div>
                : null}
            {HygieneandSanitation ?
                <div className='w-full '  >
                    <div className='flex '  >
                        <ul className='mr-36'   >
                         <h1     style={{ "color": "#EC0C36" }}  >Cleaning Chemicals</h1>
                        
<li>Kitchen Hygiene Products</li>
<li>Personal Hygiene and Disinfectant Products</li>
<li>Bathroom - Toilet Cleaning Supplies</li>
<li>Floor Cleaning and Polisher Maintenance Chemicals</li>

                          
                        </ul>

                        <ul className='mr-36'   >
                        <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Hygiene and Disinfection Products</h1>
                        <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Fly Killer</h1>
                        



                        
<li>Hygiene Barriers</li>




                      
                           
                        </ul>
                        


                    </div>
                </div>
                : null}
            {DesktopandPresentationEquiment ?
                <div className='w-full '  >
                    <div className='flex '  >
                        <ul className='mr-36'   >
                        <h1     style={{ "color": "#EC0C36" }}  > Desktop Equipment</h1>
                       
<li>Fork Spoon Knife</li>
<li>wooden presentations</li>
<li>Salt and Pepper Shaker Toothpick</li>
<li>napkin holder</li>
<li>Ashtray</li>
                      
                        


                          
                        </ul>

                        <ul className='mr-36'   >
                        


                        <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Open Buffet Presentation Equipment</h1>
                        <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Buffet Heating Equipment</h1>                        
<li>Gel Fuels</li>




                      
                           
                        </ul>
                        <ul className='mr-36'   >
                        



                        <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Trays</h1>
                        <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Laminated Trays</h1>                        





                      
                           
                        </ul>
                        


                    </div>
                </div>
                : null}
            {BeverageandBar ?
                <div className='w-full '  >
                    <div className='flex '  >
                        <ul className='mr-36'   >
                        <h1     style={{ "color": "#EC0C36" }}  >Cold Drink Serving Equipment</h1>
                        

                       
<li>Juice and Ayran coolers</li>
                      
                        


                          
                        </ul>

                        <ul className='mr-36'   >
                        


                        <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Cookie Warmers</h1>
                        




                      
                           
                        </ul>
                        <ul className='mr-36'   >
                        

                        


                        <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Ice Serving Utensils</h1>
                        <li style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Ice Tongs</li>                        





                      
                           
                        </ul>
                        <ul className='mr-36'   >
                        

                        



                        <h1 style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Juicing Machines</h1>
                        <li style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Automatic Orange Juicer Machines</li>                        
                        <li style={{ "color": "#EC0C36" }} className='text-2xl  my-2'  >Juicing Presses</li>                        





                      
                           
                        </ul>
                        


                    </div>
                </div>
                : null}

            */}





        </div>


    );
};


export default CategorySlider;

// 

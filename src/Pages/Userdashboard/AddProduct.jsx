import React from "react";
import Sidebaruser from "./sidebarUser";
import { useEffect, useState } from "react";
import axios from "axios";

const AddProductuser = () => {
  const [Email, setEmail] = useState();
  const [Name, setName] = useState();
  const [Price, setPrice] = useState();
  const [Description, setDescription] = useState();
  const [Input, setInput] = useState();
  const [category, Setcategory] = useState();
  const [subcategory, SetSubcategory] = useState();
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [subcategoryError, SetSubcategoryError] = useState();
//refrigration

  const [color, setcolor] = useState();
  const [material, setmaterial] = useState();
  const [capacity, setCapacity] = useState();
  const [shelves, setShelves] = useState();
  const [lid, setlid] = useState();
  const [lightening, setlightening] = useState();
  const [level, setlevel] = useState();
  const [door, setdoor] = useState();
  const [Width, setWidth] = useState();
  const [depth, setDepth] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [consumption, setconsumption] = useState();
  const [supply, setsupply] = useState();
  const [power, setPower] = useState();
  const [temperature, settemperature] = useState();
  const [refrigerant, setrefrigerant] = useState();
  const [cooling, setcooling] = useState();
  const [warranty, setwarranty] = useState();

  //dishwashing
  const [castors, setcastors] = useState();
  const [tray, settray] = useState();
  const [pressure, setpressure] = useState();
  const [production, setproduction] = useState();
  const [innerheight, setinnerheight] = useState();
  const [basket, setbasket] = useState();
  const [programs, setprograms] = useState();
  const [volume, setvolume] = useState();
  const [cycles, setcycles] = useState();
  const [pump, setpump] = useState();
  const [rinsepower, setrinsepower] = useState();
  const [dispenser, setdispenser] = useState();
  const [rinsefunc, setrinsefunc] = useState();
  const [volumerinse, setvolumerinse] = useState();

  //appliance
  const [version, setversion] = useState();
  const [tap, settap] = useState();
  const [output, setoutput] = useState();

  //stanless steel
  const [feet, setfeet] = useState();
  const [bottomshelf, setbottomshelf] = useState();
  const [bowlpos, setbowlpos] = useState();
  const [sinkbowl, setsinkbowl] = useState();
  const [upstand, setupstand] = useState();
  const [assembly, setassembly] = useState();

  //Cooking
  const [timer, settimer] = useState();
  const [controls, setcontrols] = useState();

  //food prep
  const [rpm, setrpm] = useState();
  const [speeds, setspeeds] = useState();
  const [included, setincluded] = useState();
  const [weldingbar, setweldingbar] = useState();

  //Beverage equipment
  const [bin, setbin] = useState();
  const [waterconnection, setwaterconnection] = useState();
  const [type, settype] = useState();

  //pizza & grills
  const [lock, setlock] = useState();
  const [worksurface, setworksurface] = useState();
  const [gasconsumption, setgasconsumption] = useState();
  const [defrost, setdefrost] = useState();

  //ovens
  const [steam, setsteam] = useState();

  //utensils
  const [pieces, setpieces] = useState();
  const [diameter, setdiameter] = useState();
  const [length, setlength] = useState();


  const getInitialState = () => {
    const value = "Shirt";
    return value;
  };
  const [value, setValue] = useState(getInitialState);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleUpload = async () => {
    alert("Product Added Suceesfully ");
    console.log(Email);
    console.log(Name);
    console.log(Price);
    console.log(value);
    console.log(subcategory);
    console.log(Description);
if (!subcategory || subcategory == "Select a Sub category") {
  SetSubcategory("");
  SetSubcategoryError("Please Enter a Sub Category");
}

    if (!selectedFiles || selectedFiles.length === 0) {
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("images", selectedFiles[i]);
    }

    formData.append("email", Email);
    formData.append("name", Name);
    formData.append("price", Price);
    formData.append("value", value);
    formData.append("subcategory", subcategory);
    formData.append("description", Description);

    //refrigeration
    formData.append("color", color);
    formData.append("material", material);
    formData.append("capacity", capacity);
    formData.append("shelves", shelves);
    formData.append("lid", lid);
    formData.append("lightening", lightening);
    formData.append("level", level);
    formData.append("door", door);
    formData.append("Width", Width);
    formData.append("depth", depth);
    formData.append("height", height);
    formData.append("weight", weight);
    formData.append("consumption", consumption);
    formData.append("supply", supply);
    formData.append("power", power);
    formData.append("temperature", temperature);
    formData.append("refrigerant", refrigerant);
    formData.append("cooling", cooling);
    formData.append("warranty", warranty);

    //dishwashing
    formData.append("castors", castors);
    formData.append("tray", tray);
    formData.append("pressure", pressure);
    formData.append("production", production);
    formData.append("innerheight", innerheight);
    formData.append("basket", basket);
    formData.append("programs", programs);
    formData.append("volume", volume);
    formData.append("cycles", cycles);
    formData.append("pump", pump);
    formData.append("rinsepower", rinsepower);
    formData.append("dispenser", dispenser);
    formData.append("rinsefunc", rinsefunc);
    formData.append("volumerinse", volumerinse);

    //appliance
    formData.append("version", version);
    formData.append("tap", tap);
    formData.append("output", output);

    //stanless steel
    formData.append("feet", feet);
    formData.append("bottomshelf", bottomshelf);
    formData.append("bowlpos", bowlpos);
    formData.append("sinkbowl", sinkbowl);
    formData.append("upstand", upstand);
    formData.append("assembly", assembly);

    //cooking
    formData.append("timer", timer);
    formData.append("controls", controls);

    //food prep
    formData.append("rpm", rpm);
    formData.append("speeds", speeds);
    formData.append("included", included);
    formData.append("weldingbar", weldingbar);

    //beverage equipment
    formData.append("bin", bin);
    formData.append("waterconnection", waterconnection);
    formData.append("type", type);

     //pizza & grills
     formData.append("lock", lock);
     formData.append("worksurface", worksurface);
     formData.append("gasconsumption", gasconsumption);
     formData.append("defrost", defrost);

       //ovens
     formData.append("steam", steam);

      //utensils
     formData.append("pieces", pieces);
     formData.append("diameter", diameter);
     formData.append("length", length);

    try {
      const response = await axios.post(
        "https://sore-cyan-fly-kit.cyclic.app/productrequestnew",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      // Handle response from backend if needed
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <div>
      <Sidebaruser />
      <div className="flex flex-wrap justify-evenly">
        <div class="flex flex-col  mt-4 items-center h-screen w-3/4">
          {/* <h2 class="text-center text-black font-bold text-2xl uppercase dasdsd mb-10">Add Product </h2> */}
          <div class="asdasdasdasdasdas  p-6  rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">


          <div class="mb-5">
              <label for="email" class="block mb-2 font-bold text-white">email</label>
              <input onChange={(e) => {
                setEmail(e.target.value)
              }} type="text" id="email" name="email" placeholder="Enter registered email" class="border border-gray-300 shadow p-3 w-full rounded mb-" />
            </div>
            
            <div class="mb-5">
              <label for="name" class="block mb-2 font-bold text-white">
                Product Name
              </label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                id="name"
                name="name"
                placeholder="Enter Prouct Name ."
                class="border border-gray-300 shadow p-3 w-full rounded mb-"
              />
            </div>

            <div class="mb-5">
              <label for="twitter" class="block mb-2 font-bold text-white">
                Product Price
              </label>
              <input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="number"
                required="true"
                id="twitter"
                name="twitter"
                placeholder="Enter Product Price"
                class="border  border-gray-300 shadow p-3 w-full rounded mb-"
              />
            </div>
            {/*
            <div class="mb-5">
            <label for="twitter" class="block mb-2 font-bold text-white">
                Category
              </label>
              <input
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                type="text"
                placeholder="Enter Product Category"
                class="border  border-gray-300 shadow p-3 w-full rounded mb-"
              />
               <input     type="text" required='true'  id="twitter" onClick={(e)=>{setValue(e.target.value)}} name="twitter" placeholder="Enter Product Category" class=""/> 
            </div>
*/}
            <div class="mb-5">
            <label for="twitter" class="block mb-2 font-bold text-white">
                Category
              </label>
            <select id="category" name='category' onChange={(e) => {setValue(e.target.value);}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Select a category</option>
        <option value="Refrigeration" >Refrigeration</option>
        <option value="Diswashing">Diswashing</option>
        <option value="Appliances">Appliances</option>
        <option value="Stainless Steel">Stainless Steel</option>
        <option value="Cooking">Cooking</option>
        <option value="Food prep">Food prep</option>
        <option value="Beverage Equipment">Beverage Equipment</option>
        <option value="Pizzeria & Grill">Pizzeria & Grill</option>
        <option value="Oven & Steamers">Oven & Steamers</option>
        <option value="Utensils">Utensils</option>

</select>
              </div>

              <div class="mb-5">
            <label for="twitter" class="block mb-2 font-bold text-white">
                Sub category
              </label>
        {value === "Refrigeration" && (
                      <select id="subcategory" name='subgategory' onChange={(event) => { SetSubcategory(event.target.value)}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">

        <option>Select a Sub category</option>
        <option value="Beer Fridges">Beer Fridges</option>
        <option value="Back Bar Refrigerators">Back Bar Refrigerators</option>
        <option value="Mini Fridges">Mini Fridges</option>
        <option value="Bottle Coolers">Bottle Coolers</option>
        <option value="Wine Coolers">Wine Coolers</option>
        <option value="Undercounter Fridges">Undercounter Fridges</option>
        <option value="Glass Door Fridges">Glass Door Fridges</option>
        <option value="Undercounter Freezers">Undercounter Freezers</option>
        <option value="Ice Makers">Ice Makers</option>
        <option value="Upright Fridges">Upright Fridges</option>
        <option value="Upright Freezers">Upright Freezers</option>
        <option value="Chest Freezers">Chest Freezers</option>
        <option value="Refrigerated Displays & Merchandisers">Refrigerated Displays & Merchandisers</option>
        <option value="Cake Counters & Patisserie Showcases">Cake Counters & Patisserie Showcases</option>
        <option value="Serve Over Counters & Deli Display Refrigerators">Serve Over Counters & Deli Display Refrigerators</option>
        <option value="Counter Fridges">Counter Fridges</option>
        <option value="Dry Aging Refrigerators">Dry Aging Refrigerators</option>
        <option value="Low Refrigerated Counters Chef Bases">Low Low Refrigerated Counters Chef Bases</option>
        <option value="Counter Freezers">Counter Freezers</option>
        <option value="Refrigerated Pizza Tables">Refrigerated Pizza Tables</option>
        <option value="Salad & Sandwitch Preparation Counters">Salad & Sandwitch Preparation Counters</option>
        <option value="Saladettes">Saladettes</option>
        <option value="Display Refrigerated Counters">Display Refrigerated Counters</option>
        <option value="Bakery Refrigeration">Bakery Refrigeration</option>
        <option value="Refrigerated Prep Tops">Refrigerated Prep Tops</option>
        <option value="Sushi & Tapas Display Showcases">Sushi & Tapas Display Showcases</option>
        <option value="Multi Deck Displays & Refrigerated Wall Cabinets">Multi Deck Displays & Refrigerated Wall Cabinets</option>
        <option value="Supermarket Refrigerators">Supermarket Refrigerators</option>
        <option value="Blast Chillers & Flash Freezers">Blast Chillers & Flash Freezers</option>
        <option value="Cold Rooms & Freezer Rooms">Cold Rooms & Freezer Rooms</option>
        <option value="Display Refrigeration">Display Refrigeration</option>
        </select>
        )}

{value === "Diswashing" && (
                      <select id="subcategory" name='subcategory' onChange={(event) => { SetSubcategory(event.target.value)}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">

        <option>Select a Sub category</option>
        <option value="Glasswashers">Glasswashers</option>
        <option value="Undercounter Dishwashers">Undercounter Dishwashers</option>
        <option value="Pass Through Dishwashers">Pass Through Dishwashers</option>
        <option value="Dishwasher Tables">Dishwasher Tables</option>
        <option value="Cuttlery & Glass Polishers">Cuttlery & Glass Polishers</option>
        <option value="Shower Unit & Faucets">Shower Unit & Faucets</option>
        <option value="Dishwasher Racks">Dishwasher Racks</option>
        </select>
        )}

{value === "Appliances" && (
                      <select id="subcategory" name='subcategory' onChange={(event) => { SetSubcategory(event.target.value)}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">

        <option>Select a Sub category</option>
        <option value="Table Top Fryers">Table Top Fryers</option>
        <option value="Countertop Mixers">Countertop Mixers</option>
        <option value="Griddles">Griddles</option>
        <option value="Microwaves">Microwaves</option>
        <option value="Shower Unit & Faucets">Panini / Contact Grills</option>
        <option value="Roller Grills">Roller Grills</option>
        <option value="Food Warming">Food Warming</option>
        <option value="Hotdog Warmers">Hotdog Warmers</option>
        <option value="Heated Merchandisers / Displays">Heated Merchandisers / Displays</option>
        <option value="Induction Cookers">Induction Cookers</option>
        <option value="Shower Unit & Faucets">Table Top Bains Marie & Hotpots</option>
        <option value="Soup Kettles">Soup Kettles</option>
        <option value="Rice Cookers">Rice Cookers</option>
        <option value="Salamanders">Salamanders</option>
        <option value="Toasters">Toasters</option>
        <option value="Pressure Cookers">Pressure Cookers</option>
        <option value="Sous Vide & Slow Cookers">Sous Vide & Slow Cookers</option>
        <option value="Waffle Makers">Waffle Makers</option>
        <option value="Knife Sterilisers">Knife Sterilisers</option>
        <option value="Egg Boilers">Egg Boilers</option>
        <option value="Popcorn Machines">Popcorn Machines</option>
        <option value="Candy Floss Machines">Candy Floss Machines</option>
        <option value="Insect Killers">Insect Killers</option>

        </select>
        )}

{value === "Stainless Steel" && (
                      <select id="subcategory" name='subcategory' onChange={(event) => { SetSubcategory(event.target.value)}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">

        <option>Select a Sub category</option>
        <option value="Work Tables">Work Tables</option>
        <option value="Sink Units with 1 & 2 Bowls">Sink Units with 1 & 2 Bowls</option>
        <option value="Sink Units with 3 Bowls">Sink Units with 3 Bowls</option>
        <option value="Sink Top Storage Cupboards">Sink Top Storage Cupboards</option>
        <option value="Sink Tops">Sink Tops</option>
        <option value="Sink Units For Dishwashers">Sink Units For Dishwashers</option>
        <option value="Wall Shelves">Wall Shelves</option>
        <option value="Wash Basin & Hand Sinks">Wash Basin & Hand Sinks</option>
        <option value="Bar Sinks">Bar Sinks</option>
        <option value="Base Storage Cupboards">Base Storage Cupboards</option>
        <option value="Ice Bins">Ice Bins</option>
        <option value="Plain Top Hot Cupboards">Plain Top Hot Cupboards</option>
        <option value="Cabinet Storage Cupboards">Cabinet Storage Cupboards</option>
        <option value="Work Stations">Work Stations</option>
        <option value="Wall Cupboards">Wall Cupboards</option>
        <option value="Gantries & Chefs Passes">Gantries & Chefs Passes</option>
        <option value="Extraction Canopies">Extraction Canopies</option>
        <option value="Grease Traps & Fat Seperators">Grease Traps & Fat Seperators</option>
        <option value="Shelving Units">Shelving Units</option>
        <option value="Equipment Stands">Equipment Stands</option>
        <option value="Waste Bins">Waste Bins</option>
        <option value="Trolleys & Carts">Trolleys & Carts</option>
        <option value="Stainless Steel GN Pans & Containers">Stainless Steel GN Pans & Containers</option>
        </select>
        )}

{value === "Cooking" && (
                      <select id="subcategory" name='subcategory' onChange={(event) => { SetSubcategory(event.target.value)}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">

        <option>Select a Sub category</option>
        <option value="Boiling Tops & Hobs">Boiling Tops & Hobs</option>
        <option value="Induction">Induction</option>
        <option value="Range Ovens & Floor Standing Cookers">Range Ovens & Floor Standing Cookers</option>
        <option value="Bains Marie & Hotpots">Bains Marie & Hotpots</option>
        <option value="Chargrills & Gas Grills">Chargrills & Gas Grills</option>
        <option value="BBQ Grills">BBQ Grills</option>
        <option value="Chip Scuttles">Chip Scuttles</option>
        <option value="Fryers">Fryers</option>
        <option value="Griddles">Griddles</option>
        <option value="Pasta Boilers">Pasta Boilers</option>
        <option value="Tilting Bratt Pans">Tilting Bratt Pans</option>
        <option value="Wok Stoves">Wok Stoves</option>
        <option value="Bases & Neutral Units">Bases & Neutral Units</option>
        <option value="Modular Cooking Ranges">Modular Cooking Ranges</option>
        </select>
        )}

{value === "Food prep" && (
                      <select id="subcategory" name='subcategory' onChange={(event) => { SetSubcategory(event.target.value)}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">

        <option>Select a Sub category</option>
        <option value="Planetary Mixers">Planetary Mixers</option>
        <option value="Spiral Mixers & Dough Kneaders">Spiral Mixers & Dough Kneaders</option>
        <option value="Vegetable Prep Machines">Vegetable Prep Machines</option>
        <option value="Hand Mixers & immersion Blenders">Hand Mixers & immersion Blenders</option>
        <option value="Meat Mincers">Meat Mincers</option>
        <option value="Meat Slicers">Meat Slicers</option>
        <option value="Bone Saw Machines">Bone Saw Machines</option>
        <option value="Sausage Stuffers">Sausage Stuffers</option>
        <option value="Potato peelers">Potato peelers</option>
        <option value="Bread Slicers">Bread Slicers</option>
        <option value="Vacuum Machines">Vacuum Machines</option>
        <option value="Hamburger Presses">Hamburger Presses</option>

        </select>
        )}

{value === "Beverage Equipment" && (
                      <select id="subcategory" name='subcategory' onChange={(event) => { SetSubcategory(event.target.value)}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">

        <option>Select a Sub category</option>
        <option value="Ice Cream & Yoghurt Machines">Ice Cream & Yoghurt Machines</option>
        <option value="Juice Dispensers">Juice Dispensers</option>
        <option value="Juicer Machines">Juicer Machines</option>
        <option value="Hand Mixers & immersion Blenders">Hand Mixers & immersion Blenders</option>
        <option value="Slush Machines">Slush Machines</option>
        <option value="Bar Blenders">Bar Blenders</option>
        <option value="Milshakes & Bar Mixers">Milshakes & Bar Mixers</option>
        <option value="Espresso Coffee Machines">Espresso Coffee Machines</option>
        <option value="Filter Coffee Machines">Filter Coffee Machines</option>
        <option value="Coffee Grinders">Coffee Grinders</option>
        <option value="Percolators & Coffee Urns">Percolators & Coffee Urns</option>
        <option value="Water Boilers & Water Dispensers">Water Boilers & Water Dispensers</option>
        <option value="Chocolate Machines">Chocolate Machines</option>
        <option value="Cup Warmers">Cup Warmers</option>
        </select>
        )}

{value === "Pizzeria & Grill" && (
                      <select id="subcategory" name='subcategory' onChange={(event) => { SetSubcategory(event.target.value)}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">

        <option>Select a Sub category</option>
        <option value="Pizza Ovens">Pizza Ovens</option>
        <option value="Pizza Prep Counters">Pizza Prep Counters</option>
        <option value="Dough Kneaders & Mixers">Dough Kneaders & Mixers</option>
        <option value="Gyros Donar Kebab Grills">Gyros Donar Kebab Grills</option>
        <option value="Planetary Mixers">Planetary Mixers</option>
        <option value="Rotisseries Ovens">Rotisseries Ovens</option>
        <option value="Charcoal Grills">Charcoal Grills</option>
        <option value="Pita Ovens & Salamander Grills">Pita Ovens & Salamander Grills</option>
        <option value="Chicken Warmers">Chicken Warmers</option>
        <option value="Dough Rollers & Dough Sheeters">Dough Rollers & Dough Sheeters</option>
        <option value="Pizza Storage & Transport">Pizza Storage & Transport</option>
        <option value="Pizza Utensils">Pizza Utensils</option>
        </select>
        )}

{value === "Oven & Steamers" && (
                      <select id="subcategory" name='subcategory' onChange={(event) => { SetSubcategory(event.target.value)}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">

        <option>Select a Sub category</option>
        <option value="Electric Convection Ovens Manual Controls">Electric Convection Ovens Manual Controls</option>
        <option value="Electric Combi Steamers Manual Controls">Electric Combi Steamers Manual Controls</option>
        <option value="Electric Combi Steamers Digital Controls">Electric Combi Steamers Digital Controls</option>
        <option value="Electric Bakery Ovens">Electric Bakery Ovens</option>
        <option value="Air Fryers">Air Fryers</option>
        <option value="Mini Ovens">Mini Ovens</option>
        <option value="Proofers, Proofing Ovens & Dehydrators">Proofers, Proofing Ovens & Dehydrators</option>
        <option value="Potato Ovens">Potato Ovens</option>
        <option value="Rotisseries Ovens">Rotisseries Ovens</option>
        <option value="Microwave Ovens">Microwave Ovens</option>
        <option value="Modular Cooking Ovens">Modular Cooking Ovens</option>
        <option value="Oven Trays & Grids">Oven Trays & Grids</option>
        </select>
        )}

{value === "Utensils" && (
        <select id="subcategory" name='subcategory' onChange={(event) => { SetSubcategory(event.target.value)}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">

        <option>Select a Sub category</option>
        <option value="Kitchen Utensils">Kitchen Utensils</option>
        <option value="Pots & Pans">Pots & Pans</option>
        <option value="Holders & Trays">Holders & Trays</option>
        <option value="Dispensers, Squeeze Bottles & Sauce Boats">Dispensers, Squeeze Bottles & Sauce Boats</option>
        <option value="Jugs & Carafes">Jugs & Carafes</option>
        <option value="Cleaning Equipments">Cleaning Equipments</option>
        <option value="Food Containers">Food Containers</option>
        <option value="Glass Holders">Glass Holders</option>
        <option value="Tab Grabbers & Bill Holders">Tab Grabbers & Bill Holders</option>
        <option value="GN Containers">GN Containers</option>

        </select>
        )}
              </div>


              {subcategoryError && <p className="error-message">{subcategoryError}</p>} 
            {value === "Refrigeration" && (
              <>
                                                       <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Product color
                           </label>
                           <input
                             onChange={(e) => {
                              setcolor(e.target.value);
                             }}
                             id="color"
                             name="color"
                             placeholder="Enter Product color"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Product Material
                           </label>
                           <input
                             onChange={(e) => {
                              setmaterial(e.target.value);
                             }}
                             id="material"
                             name="material"
                             placeholder="Enter Product Material"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                           <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                             Capacity
                           </label>
                           <input
                             onChange={(e) => {
                              setCapacity(e.target.value);
                             }}
                             id="capacity"
                             name="capacity"
                             placeholder="Enter Product Capacity"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                             Product Lid
                           </label>
                           <input
                             onChange={(e) => {
                              setlid(e.target.value);
                             }}
                             id="lid"
                             name="lid"
                             placeholder="Enter Product Lid"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                             Shelves
                           </label>
                           <input
                             onChange={(e) => {
                              setShelves(e.target.value);
                             }}
                             id="shelves"
                             name="shelves"
                             placeholder="Enter Product shelves"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>

                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                             Lightening
                           </label>
                           <input
                             onChange={(e) => {
                              setlightening(e.target.value);
                             }}
                             id="lightening"
                             name="lightening"
                             placeholder="Enter Product lightening"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Noise level
                           </label>
                           <input
                             onChange={(e) => {
                              setlevel(e.target.value);
                             }}
                             id="level"
                             name="level"
                             placeholder="Enter Product Noise level"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Door
                           </label>
                           <input
                             onChange={(e) => {
                              setdoor(e.target.value);
                             }}
                             id="door"
                             name="door"
                             placeholder="Enter Product doors"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Width
                           </label>
                           <input
                             onChange={(e) => {
                              setWidth(e.target.value);
                             }}
                             id="width"
                             name="width"
                             placeholder="Enter Product width"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Depth
                           </label>
                           <input
                             onChange={(e) => {
                              setDepth(e.target.value);
                             }}
                             id="depth"
                             name="depth"
                             placeholder="Enter Product depth"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Height
                           </label>
                           <input
                             onChange={(e) => {
                              setHeight(e.target.value);
                             }}
                             id="height"
                             name="height"
                             placeholder="Enter Product height"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Weight
                           </label>
                           <input
                             onChange={(e) => {
                              setWeight(e.target.value);
                             }}
                             id="weight"
                             name="weight"
                             placeholder="Enter Product weight"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>

                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power Consumption
                           </label>
                           <input
                             onChange={(e) => {
                              setconsumption(e.target.value);
                             }}
                             id="consumption"
                             name="consumption"
                             placeholder="Enter Product Power consumption"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power Supply
                           </label>
                           <input
                             onChange={(e) => {
                              setsupply(e.target.value);
                             }}
                             id="supply"
                             name="supply"
                             placeholder="Enter Product power supply"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power
                           </label>
                           <input
                             onChange={(e) => {
                              setPower(e.target.value);
                             }}
                             id="power"
                             name="power"
                             placeholder="Enter Product Power"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>

                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Temperature
                           </label>
                           <input
                             onChange={(e) => {
                              settemperature(e.target.value);
                             }}
                             id="temperature"
                             name="temperature"
                             placeholder="Enter Product temperature"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>  
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           cooling
                           </label>
                           <input
                             onChange={(e) => {
                              setcooling(e.target.value);
                             }}
                             id="cooling"
                             name="cooling"
                             placeholder="Enter Product cooling"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>                           
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Refrigerant
                           </label>
                           <input
                             onChange={(e) => {
                              setrefrigerant(e.target.value);
                             }}
                             id="refrigerant"
                             name="refrigerant"
                             placeholder="Enter Product refrigerant"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Warranty
                           </label>
                           <input
                             onChange={(e) => {
                              setwarranty(e.target.value);
                             }}
                             id="warranty"
                             name="warranty"
                             placeholder="Enter Product warranty"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         </>
                         
)}


{value === "Diswashing" && (
              <>
                <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Product color
                           </label>
                           <input
                             onChange={(e) => {
                              setcolor(e.target.value);
                             }}
                             id="color"
                             name="color"
                             placeholder="Enter Product color"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Water pressure inlet
                           </label>
                           <input
                             onChange={(e) => {
                              setpressure(e.target.value);
                             }}
                             id="pressure"
                             name="pressure"
                             placeholder="Enter Product Water pressure inlet"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Product Material
                           </label>
                           <input
                             onChange={(e) => {
                              setmaterial(e.target.value);
                             }}
                             id="material"
                             name="material"
                             placeholder="Enter Product Material"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                           <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                             Capacity
                           </label>
                           <input
                             onChange={(e) => {
                              setCapacity(e.target.value);
                             }}
                             id="capacity"
                             name="capacity"
                             placeholder="Enter Product Capacity"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>

                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Product Casters
                           </label>
                           <input
                             onChange={(e) => {
                              setcastors(e.target.value);
                             }}
                             id="castors"
                             name="castors"
                             placeholder="Enter Product castors"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                           <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           tray and Grid size
                           </label>
                           <input
                             onChange={(e) => {
                              settray(e.target.value);
                             }}
                             id="tray"
                             name="tray"
                             placeholder="Enter Product tray capacity"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>

                           <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Production
                           </label>
                           <input
                             onChange={(e) => {
                              setproduction(e.target.value);
                             }}
                             id="production"
                             name="production"
                             placeholder="Enter Product production"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Width
                           </label>
                           <input
                             onChange={(e) => {
                              setWidth(e.target.value);
                             }}
                             id="width"
                             name="width"
                             placeholder="Enter Product width"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Depth
                           </label>
                           <input
                             onChange={(e) => {
                              setDepth(e.target.value);
                             }}
                             id="depth"
                             name="depth"
                             placeholder="Enter Product depth"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Height
                           </label>
                           <input
                             onChange={(e) => {
                              setHeight(e.target.value);
                             }}
                             id="height"
                             name="height"
                             placeholder="Enter Product height"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Weight
                           </label>
                           <input
                             onChange={(e) => {
                              setWeight(e.target.value);
                             }}
                             id="weight"
                             name="weight"
                             placeholder="Enter Product weight"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Inner Height
                           </label>
                           <input
                             onChange={(e) => {
                              setinnerheight(e.target.value);
                             }}
                             id="innerheight"
                             name="innerheight"
                             placeholder="Enter Product inner height"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           basket Size
                           </label>
                           <input
                             onChange={(e) => {
                              setbasket(e.target.value);
                             }}
                             id="basket"
                             name="basket"
                             placeholder="Enter Product basket"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power Consumption
                           </label>
                           <input
                             onChange={(e) => {
                              setconsumption(e.target.value);
                             }}
                             id="consumption"
                             name="consumption"
                             placeholder="Enter Product Power consumption"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power Supply
                           </label>
                           <input
                             onChange={(e) => {
                              setsupply(e.target.value);
                             }}
                             id="supply"
                             name="supply"
                             placeholder="Enter Product power supply"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power
                           </label>
                           <input
                             onChange={(e) => {
                              setPower(e.target.value);
                             }}
                             id="power"
                             name="power"
                             placeholder="Enter Product Power"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>

                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Temperature
                           </label>
                           <input
                             onChange={(e) => {
                              settemperature(e.target.value);
                             }}
                             id="temperature"
                             name="temperature"
                             placeholder="Enter Product temperature"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>  
                       
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Programs
                           </label>
                           <input
                             onChange={(e) => {
                              setprograms(e.target.value);
                             }}
                             id="programs"
                             name="programs"
                             placeholder="Enter Product programs"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           volume Wash Tank
                           </label>
                           <input
                             onChange={(e) => {
                              setvolume(e.target.value);
                             }}
                             id="volume"
                             name="volume"
                             placeholder="Enter Product volume"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Washing Cycles
                           </label>
                           <input
                             onChange={(e) => {
                              setcycles(e.target.value);
                             }}
                             id="cycles"
                             name="cycles"
                             placeholder="Enter Product Washing cycles"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Drain Pump
                           </label>
                           <input
                             onChange={(e) => {
                              setpump(e.target.value);
                             }}
                             id="pump"
                             name="pump"
                             placeholder="Enter Product Drain pump"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Rinse Tank Power
                           </label>
                           <input
                             onChange={(e) => {
                              setrinsepower(e.target.value);
                             }}
                             id="rinsepower"
                             name="rinsepower"
                             placeholder="Enter Product Rinse Tank Power"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Rinse aid dispenser
                           </label>
                           <input
                             onChange={(e) => {
                              setdispenser(e.target.value);
                             }}
                             id="dispenser"
                             name="dispenser"
                             placeholder="Enter Product Rinse aid dispenser"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Rinse Function
                           </label>
                           <input
                             onChange={(e) => {
                              setrinsefunc(e.target.value);
                             }}
                             id="rinsefunc"
                             name="rinsefunc"
                             placeholder="Enter Rinse Function"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Volume of rinse tank
                           </label>
                           <input
                             onChange={(e) => {
                              setvolumerinse(e.target.value);
                             }}
                             id="volumerinse"
                             name="volumerinse"
                             placeholder="Enter Volume of rinse tank"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Warranty
                           </label>
                           <input
                             onChange={(e) => {
                              setwarranty(e.target.value);
                             }}
                             id="warranty"
                             name="warranty"
                             placeholder="Enter Product warranty"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         </>
                         
)}

{value === "Appliances" && (
              <>
                <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Product color
                           </label>
                           <input
                             onChange={(e) => {
                              setcolor(e.target.value);
                             }}
                             id="color"
                             name="color"
                             placeholder="Enter Product color"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Product version
                           </label>
                           <input
                             onChange={(e) => {
                              setversion(e.target.value);
                             }}
                             id="version"
                             name="version"
                             placeholder="Enter Product version"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Product Material
                           </label>
                           <input
                             onChange={(e) => {
                              setmaterial(e.target.value);
                             }}
                             id="material"
                             name="material"
                             placeholder="Enter Product Material"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                           <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                             Capacity
                           </label>
                           <input
                             onChange={(e) => {
                              setCapacity(e.target.value);
                             }}
                             id="capacity"
                             name="capacity"
                             placeholder="Enter Product Capacity"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>

                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Dranage tap
                           </label>
                           <input
                             onChange={(e) => {
                              settap(e.target.value);
                             }}
                             id="tap"
                             name="tap"
                             placeholder="Draining tab available? "
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                           
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Width
                           </label>
                           <input
                             onChange={(e) => {
                              setWidth(e.target.value);
                             }}
                             id="width"
                             name="width"
                             placeholder="Enter Product width"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Depth
                           </label>
                           <input
                             onChange={(e) => {
                              setDepth(e.target.value);
                             }}
                             id="depth"
                             name="depth"
                             placeholder="Enter Product depth"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Height
                           </label>
                           <input
                             onChange={(e) => {
                              setHeight(e.target.value);
                             }}
                             id="height"
                             name="height"
                             placeholder="Enter Product height"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Weight
                           </label>
                           <input
                             onChange={(e) => {
                              setWeight(e.target.value);
                             }}
                             id="weight"
                             name="weight"
                             placeholder="Enter Product weight"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Inner Height
                           </label>
                           <input
                             onChange={(e) => {
                              setinnerheight(e.target.value);
                             }}
                             id="innerheight"
                             name="innerheight"
                             placeholder="Enter Product inner height"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Output
                           </label>
                           <input
                             onChange={(e) => {
                              setoutput(e.target.value);
                             }}
                             id="output"
                             name="output"
                             placeholder="Enter Product Output"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power Consumption
                           </label>
                           <input
                             onChange={(e) => {
                              setconsumption(e.target.value);
                             }}
                             id="consumption"
                             name="consumption"
                             placeholder="Enter Product Power consumption"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power Supply
                           </label>
                           <input
                             onChange={(e) => {
                              setsupply(e.target.value);
                             }}
                             id="supply"
                             name="supply"
                             placeholder="Enter Product power supply"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power
                           </label>
                           <input
                             onChange={(e) => {
                              setPower(e.target.value);
                             }}
                             id="power"
                             name="power"
                             placeholder="Enter Product Power"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>

                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Temperature
                           </label>
                           <input
                             onChange={(e) => {
                              settemperature(e.target.value);
                             }}
                             id="temperature"
                             name="temperature"
                             placeholder="Enter Product temperature"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         
                         
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Warranty
                           </label>
                           <input
                             onChange={(e) => {
                              setwarranty(e.target.value);
                             }}
                             id="warranty"
                             name="warranty"
                             placeholder="Enter Product warranty"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         </>
                         
)}
{value === "Stainless Steel" && (
              <>
                <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Product color
                           </label>
                           <input
                             onChange={(e) => {
                              setcolor(e.target.value);
                             }}
                             id="color"
                             name="color"
                             placeholder="Enter Product color"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Product feet
                           </label>
                           <input
                             onChange={(e) => {
                              setfeet(e.target.value);
                             }}
                             id="feet"
                             name="feet"
                             placeholder="Enter Product feet"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Product Material
                           </label>
                           <input
                             onChange={(e) => {
                              setmaterial(e.target.value);
                             }}
                             id="material"
                             name="material"
                             placeholder="Enter Product Material"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                           <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           bottom shelf
                           </label>
                           <input
                             onChange={(e) => {
                              setbottomshelf(e.target.value);
                             }}
                             id="bottomshelf"
                             name="bottomshelf"
                             placeholder="Enter Product bottom shelf"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>

                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           bowl position
                           </label>
                           <input
                             onChange={(e) => {
                              setbowlpos(e.target.value);
                             }}
                             id="bowlpos"
                             name="bowlpos"
                             placeholder="bowl position? "
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           sink bowls
                           </label>
                           <input
                             onChange={(e) => {
                              setsinkbowl(e.target.value);
                             }}
                             id="sinkbowl"
                             name="sinkbowl"
                             placeholder="No. of sink bowls? "
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Upstand Size
                           </label>
                           <input
                             onChange={(e) => {
                              setupstand(e.target.value);
                             }}
                             id="upstand"
                             name="upstand"
                             placeholder="Splashback / upstand "
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Width
                           </label>
                           <input
                             onChange={(e) => {
                              setWidth(e.target.value);
                             }}
                             id="width"
                             name="width"
                             placeholder="Enter Product width"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Depth
                           </label>
                           <input
                             onChange={(e) => {
                              setDepth(e.target.value);
                             }}
                             id="depth"
                             name="depth"
                             placeholder="Enter Product depth"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Height
                           </label>
                           <input
                             onChange={(e) => {
                              setHeight(e.target.value);
                             }}
                             id="height"
                             name="height"
                             placeholder="Enter Product height"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Weight
                           </label>
                           <input
                             onChange={(e) => {
                              setWeight(e.target.value);
                             }}
                             id="weight"
                             name="weight"
                             placeholder="Enter Product weight"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>

                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           assembled
                           </label>
                           <input
                             onChange={(e) => {
                              setassembly(e.target.value);
                             }}
                             id="assembly"
                             name="assembly"
                             placeholder="Product assembled? "
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         
                         
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Warranty
                           </label>
                           <input
                             onChange={(e) => {
                              setwarranty(e.target.value);
                             }}
                             id="warranty"
                             name="warranty"
                             placeholder="Enter Product warranty"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         </>
                         
)}
{value === "Cooking" && (
              <>
                <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Product color
                           </label>
                           <input
                             onChange={(e) => {
                              setcolor(e.target.value);
                             }}
                             id="color"
                             name="color"
                             placeholder="Enter Product color"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           timer
                           </label>
                           <input
                             onChange={(e) => {
                              settimer(e.target.value);
                             }}
                             id="timer"
                             name="timer"
                             placeholder="Product timer available?"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Product Material
                           </label>
                           <input
                             onChange={(e) => {
                              setmaterial(e.target.value);
                             }}
                             id="material"
                             name="material"
                             placeholder="Enter Product Material"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>


              
                           
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Width
                           </label>
                           <input
                             onChange={(e) => {
                              setWidth(e.target.value);
                             }}
                             id="width"
                             name="width"
                             placeholder="Enter Product width"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Depth
                           </label>
                           <input
                             onChange={(e) => {
                              setDepth(e.target.value);
                             }}
                             id="depth"
                             name="depth"
                             placeholder="Enter Product depth"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Height
                           </label>
                           <input
                             onChange={(e) => {
                              setHeight(e.target.value);
                             }}
                             id="height"
                             name="height"
                             placeholder="Enter Product height"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Weight
                           </label>
                           <input
                             onChange={(e) => {
                              setWeight(e.target.value);
                             }}
                             id="weight"
                             name="weight"
                             placeholder="Enter Product weight"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Inner Height
                           </label>
                           <input
                             onChange={(e) => {
                              setinnerheight(e.target.value);
                             }}
                             id="innerheight"
                             name="innerheight"
                             placeholder="Enter Product inner height"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Controls
                           </label>
                           <input
                             onChange={(e) => {
                              setcontrols(e.target.value);
                             }}
                             id="controls"
                             name="controls"
                             placeholder="Enter Product controls"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power Consumption
                           </label>
                           <input
                             onChange={(e) => {
                              setconsumption(e.target.value);
                             }}
                             id="consumption"
                             name="consumption"
                             placeholder="Enter Product Power consumption"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power Supply
                           </label>
                           <input
                             onChange={(e) => {
                              setsupply(e.target.value);
                             }}
                             id="supply"
                             name="supply"
                             placeholder="Enter Product power supply"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power
                           </label>
                           <input
                             onChange={(e) => {
                              setPower(e.target.value);
                             }}
                             id="power"
                             name="power"
                             placeholder="Enter Product Power"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>

                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Temperature
                           </label>
                           <input
                             onChange={(e) => {
                              settemperature(e.target.value);
                             }}
                             id="temperature"
                             name="temperature"
                             placeholder="Enter Product temperature"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Warranty
                           </label>
                           <input
                             onChange={(e) => {
                              setwarranty(e.target.value);
                             }}
                             id="warranty"
                             name="warranty"
                             placeholder="Enter Product warranty"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         </>
                         
)}
{value === "Food prep" && (
              <>
                <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Product color
                           </label>
                           <input
                             onChange={(e) => {
                              setcolor(e.target.value);
                             }}
                             id="color"
                             name="color"
                             placeholder="Enter Product color"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Product RPM
                           </label>
                           <input
                             onChange={(e) => {
                              setrpm(e.target.value);
                             }}
                             id="rpm"
                             name="rpm"
                             placeholder="Product RPM?"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Product Material
                           </label>
                           <input
                             onChange={(e) => {
                              setmaterial(e.target.value);
                             }}
                             id="material"
                             name="material"
                             placeholder="Enter Product Material"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>

                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Product speeds
                           </label>
                           <input
                             onChange={(e) => {
                              setspeeds(e.target.value);
                             }}
                             id="speeds"
                             name="speeds"
                             placeholder="Enter Product speeds"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>                     
                             <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           included
                           </label>
                           <input
                             onChange={(e) => {
                              setincluded(e.target.value);
                             }}
                             id="included"
                             name="included"
                             placeholder="Enter Product included"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
              
                           
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Width
                           </label>
                           <input
                             onChange={(e) => {
                              setWidth(e.target.value);
                             }}
                             id="width"
                             name="width"
                             placeholder="Enter Product width"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Depth
                           </label>
                           <input
                             onChange={(e) => {
                              setDepth(e.target.value);
                             }}
                             id="depth"
                             name="depth"
                             placeholder="Enter Product depth"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Height
                           </label>
                           <input
                             onChange={(e) => {
                              setHeight(e.target.value);
                             }}
                             id="height"
                             name="height"
                             placeholder="Enter Product height"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Weight
                           </label>
                           <input
                             onChange={(e) => {
                              setWeight(e.target.value);
                             }}
                             id="weight"
                             name="weight"
                             placeholder="Enter Product weight"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                      
                        
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power Consumption
                           </label>
                           <input
                             onChange={(e) => {
                              setconsumption(e.target.value);
                             }}
                             id="consumption"
                             name="consumption"
                             placeholder="Enter Product Power consumption"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power Supply
                           </label>
                           <input
                             onChange={(e) => {
                              setsupply(e.target.value);
                             }}
                             id="supply"
                             name="supply"
                             placeholder="Enter Product power supply"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power
                           </label>
                           <input
                             onChange={(e) => {
                              setPower(e.target.value);
                             }}
                             id="power"
                             name="power"
                             placeholder="Enter Product Power"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>

                       
                         
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Warranty
                           </label>
                           <input
                             onChange={(e) => {
                              setwarranty(e.target.value);
                             }}
                             id="warranty"
                             name="warranty"
                             placeholder="Enter Product warranty"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         </>
                         
)}
            {value === "Beverage Equipment" && (
              <>
                          <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Product color
                           </label>
                           <input
                             onChange={(e) => {
                              setcolor(e.target.value);
                             }}
                             id="color"
                             name="color"
                             placeholder="Enter Product color"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Product Material
                           </label>
                           <input
                             onChange={(e) => {
                              setmaterial(e.target.value);
                             }}
                             id="material"
                             name="material"
                             placeholder="Enter Product Material"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                           <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                             Capacity
                           </label>
                           <input
                             onChange={(e) => {
                              setCapacity(e.target.value);
                             }}
                             id="capacity"
                             name="capacity"
                             placeholder="Enter Product Capacity"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           bin
                           </label>
                           <input
                             onChange={(e) => {
                              setbin(e.target.value);
                             }}
                             id="lid"
                             name="lid"
                             placeholder="Enter Product bid capacity"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           water connection
                           </label>
                           <input
                             onChange={(e) => {
                              setwaterconnection(e.target.value);
                             }}
                             id="waterconnection"
                             name="waterconnection"
                             placeholder="Enter Product water connection available?"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                         <label for="twitter" class="block mb-2 font-bold text-white">
                           Type
                           </label>
                           <input
                             onChange={(e) => {
                              settype(e.target.value);
                             }}
                             id="type"
                             name="type"
                             placeholder="Enter Product type"
                             class="border border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                             Production
                           </label>
                           <input
                             onChange={(e) => {
                              setproduction(e.target.value);
                             }}
                             id="production"
                             name="production"
                             placeholder="Enter Product production capacity"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Noise level
                           </label>
                           <input
                             onChange={(e) => {
                              setlevel(e.target.value);
                             }}
                             id="level"
                             name="level"
                             placeholder="Enter Product Noise level"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>

                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Width
                           </label>
                           <input
                             onChange={(e) => {
                              setWidth(e.target.value);
                             }}
                             id="width"
                             name="width"
                             placeholder="Enter Product width"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Depth
                           </label>
                           <input
                             onChange={(e) => {
                              setDepth(e.target.value);
                             }}
                             id="depth"
                             name="depth"
                             placeholder="Enter Product depth"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Height
                           </label>
                           <input
                             onChange={(e) => {
                              setHeight(e.target.value);
                             }}
                             id="height"
                             name="height"
                             placeholder="Enter Product height"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Weight
                           </label>
                           <input
                             onChange={(e) => {
                              setWeight(e.target.value);
                             }}
                             id="weight"
                             name="weight"
                             placeholder="Enter Product weight"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>

                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power Supply
                           </label>
                           <input
                             onChange={(e) => {
                              setsupply(e.target.value);
                             }}
                             id="supply"
                             name="supply"
                             placeholder="Enter Product power supply"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power
                           </label>
                           <input
                             onChange={(e) => {
                              setPower(e.target.value);
                             }}
                             id="power"
                             name="power"
                             placeholder="Enter Product Power"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>

                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Temperature
                           </label>
                           <input
                             onChange={(e) => {
                              settemperature(e.target.value);
                             }}
                             id="temperature"
                             name="temperature"
                             placeholder="Enter Product temperature"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>  
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           cooling
                           </label>
                           <input
                             onChange={(e) => {
                              setcooling(e.target.value);
                             }}
                             id="cooling"
                             name="cooling"
                             placeholder="Enter Product cooling"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>                           
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Refrigerant
                           </label>
                           <input
                             onChange={(e) => {
                              setrefrigerant(e.target.value);
                             }}
                             id="refrigerant"
                             name="refrigerant"
                             placeholder="Enter Product refrigerant"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Warranty
                           </label>
                           <input
                             onChange={(e) => {
                              setwarranty(e.target.value);
                             }}
                             id="warranty"
                             name="warranty"
                             placeholder="Enter Product warranty"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         </>
                         
)}
            {value === "Pizzeria & Grill" && (
              <>
                                                       <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Product color
                           </label>
                           <input
                             onChange={(e) => {
                              setcolor(e.target.value);
                             }}
                             id="color"
                             name="color"
                             placeholder="Enter Product color"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Product Material
                           </label>
                           <input
                             onChange={(e) => {
                              setmaterial(e.target.value);
                             }}
                             id="material"
                             name="material"
                             placeholder="Enter Product Material"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                           <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                             Capacity
                           </label>
                           <input
                             onChange={(e) => {
                              setCapacity(e.target.value);
                             }}
                             id="capacity"
                             name="capacity"
                             placeholder="Enter Product Capacity"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           lock
                           </label>
                           <input
                             onChange={(e) => {
                              setlock(e.target.value);
                             }}
                             id="lock"
                             name="lock"
                             placeholder="Product lock available?"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                             Shelves
                           </label>
                           <input
                             onChange={(e) => {
                              setShelves(e.target.value);
                             }}
                             id="shelves"
                             name="shelves"
                             placeholder="Enter Product shelves"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>

                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           work surface
                           </label>
                           <input
                             onChange={(e) => {
                              setworksurface(e.target.value);
                             }}
                             id="worksurface"
                             name="worksurface"
                             placeholder="Enter Product work surface"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Tray & Grid size
                           </label>
                           <input
                             onChange={(e) => {
                              settray(e.target.value);
                             }}
                             id="tray"
                             name="tray"
                             placeholder="Enter Product trays"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>

                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Width
                           </label>
                           <input
                             onChange={(e) => {
                              setWidth(e.target.value);
                             }}
                             id="width"
                             name="width"
                             placeholder="Enter Product width"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Depth
                           </label>
                           <input
                             onChange={(e) => {
                              setDepth(e.target.value);
                             }}
                             id="depth"
                             name="depth"
                             placeholder="Enter Product depth"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Height
                           </label>
                           <input
                             onChange={(e) => {
                              setHeight(e.target.value);
                             }}
                             id="height"
                             name="height"
                             placeholder="Enter Product height"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Weight
                           </label>
                           <input
                             onChange={(e) => {
                              setWeight(e.target.value);
                             }}
                             id="weight"
                             name="weight"
                             placeholder="Enter Product weight"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Gas Consumption
                           </label>
                           <input
                             onChange={(e) => {
                              setgasconsumption(e.target.value);
                             }}
                             id="gasconsumption"
                             name="gasconsumption"
                             placeholder="Enter Product Gas consumption"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power Consumption
                           </label>
                           <input
                             onChange={(e) => {
                              setconsumption(e.target.value);
                             }}
                             id="consumption"
                             name="consumption"
                             placeholder="Enter Product Power consumption"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power Supply
                           </label>
                           <input
                             onChange={(e) => {
                              setsupply(e.target.value);
                             }}
                             id="supply"
                             name="supply"
                             placeholder="Enter Product power supply"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power
                           </label>
                           <input
                             onChange={(e) => {
                              setPower(e.target.value);
                             }}
                             id="power"
                             name="power"
                             placeholder="Enter Product Power"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           controls
                           </label>
                           <input
                             onChange={(e) => {
                              setcontrols(e.target.value);
                             }}
                             id="controls"
                             name="controls"
                             placeholder="Enter Product controls"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>  
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Temperature
                           </label>
                           <input
                             onChange={(e) => {
                              settemperature(e.target.value);
                             }}
                             id="temperature"
                             name="temperature"
                             placeholder="Enter Product temperature"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>  
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           cooling
                           </label>
                           <input
                             onChange={(e) => {
                              setcooling(e.target.value);
                             }}
                             id="cooling"
                             name="cooling"
                             placeholder="Enter Product cooling"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>                           
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Refrigerant
                           </label>
                           <input
                             onChange={(e) => {
                              setrefrigerant(e.target.value);
                             }}
                             id="refrigerant"
                             name="refrigerant"
                             placeholder="Enter Product refrigerant"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Defrost
                           </label>
                           <input
                             onChange={(e) => {
                              setdefrost(e.target.value);
                             }}
                             id="defrost"
                             name="defrost"
                             placeholder="Enter Product defrost temperature"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Warranty
                           </label>
                           <input
                             onChange={(e) => {
                              setwarranty(e.target.value);
                             }}
                             id="warranty"
                             name="warranty"
                             placeholder="Enter Product warranty"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         </>
                         
)}
            {value === "Oven & Steamers" && (
              <>
                                                       <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Product color
                           </label>
                           <input
                             onChange={(e) => {
                              setcolor(e.target.value);
                             }}
                             id="color"
                             name="color"
                             placeholder="Enter Product color"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Product Material
                           </label>
                           <input
                             onChange={(e) => {
                              setmaterial(e.target.value);
                             }}
                             id="material"
                             name="material"
                             placeholder="Enter Product Material"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                           <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                             Capacity
                           </label>
                           <input
                             onChange={(e) => {
                              setCapacity(e.target.value);
                             }}
                             id="capacity"
                             name="capacity"
                             placeholder="Enter Product Capacity"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           steam / Humidification
                           </label>
                           <input
                             onChange={(e) => {
                              setsteam(e.target.value);
                             }}
                             id="steam"
                             name="steam"
                             placeholder="Product has steam function?"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                             Timer
                           </label>
                           <input
                             onChange={(e) => {
                              settimer(e.target.value);
                             }}
                             id="timer"
                             name="timer"
                             placeholder="Enter Product timer"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>

                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           included
                           </label>
                           <input
                             onChange={(e) => {
                              setincluded(e.target.value);
                             }}
                             id="included"
                             name="included"
                             placeholder="Enter Product included with it"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Trays / Grid size
                           </label>
                           <input
                             onChange={(e) => {
                              settray(e.target.value);
                             }}
                             id="tray"
                             name="tray"
                             placeholder="Enter Product trays"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Width
                           </label>
                           <input
                             onChange={(e) => {
                              setWidth(e.target.value);
                             }}
                             id="width"
                             name="width"
                             placeholder="Enter Product width"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Depth
                           </label>
                           <input
                             onChange={(e) => {
                              setDepth(e.target.value);
                             }}
                             id="depth"
                             name="depth"
                             placeholder="Enter Product depth"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Height
                           </label>
                           <input
                             onChange={(e) => {
                              setHeight(e.target.value);
                             }}
                             id="height"
                             name="height"
                             placeholder="Enter Product height"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Weight
                           </label>
                           <input
                             onChange={(e) => {
                              setWeight(e.target.value);
                             }}
                             id="weight"
                             name="weight"
                             placeholder="Enter Product weight"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Output
                           </label>
                           <input
                             onChange={(e) => {
                              setoutput(e.target.value);
                             }}
                             id="output"
                             name="output"
                             placeholder="Enter Product output"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power Consumption
                           </label>
                           <input
                             onChange={(e) => {
                              setconsumption(e.target.value);
                             }}
                             id="consumption"
                             name="consumption"
                             placeholder="Enter Product Power consumption"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power Supply
                           </label>
                           <input
                             onChange={(e) => {
                              setsupply(e.target.value);
                             }}
                             id="supply"
                             name="supply"
                             placeholder="Enter Product power supply"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Power
                           </label>
                           <input
                             onChange={(e) => {
                              setPower(e.target.value);
                             }}
                             id="power"
                             name="power"
                             placeholder="Enter Product Power"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           controls
                           </label>
                           <input
                             onChange={(e) => {
                              setcontrols(e.target.value);
                             }}
                             id="controls"
                             name="controls"
                             placeholder="Enter Product controls"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>  
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Temperature
                           </label>
                           <input
                             onChange={(e) => {
                              settemperature(e.target.value);
                             }}
                             id="temperature"
                             name="temperature"
                             placeholder="Enter Product temperature"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>  
                             
                       
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Warranty
                           </label>
                           <input
                             onChange={(e) => {
                              setwarranty(e.target.value);
                             }}
                             id="warranty"
                             name="warranty"
                             placeholder="Enter Product warranty"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         </>
                         
)}
            {value === "Utensils" && (
              <>
                                                       <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Product color
                           </label>
                           <input
                             onChange={(e) => {
                              setcolor(e.target.value);
                             }}
                             id="color"
                             name="color"
                             placeholder="Enter Product color"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Pieces
                           </label>
                           <input
                             onChange={(e) => {
                              setpieces(e.target.value);
                             }}
                             id="pieces"
                             name="pieces"
                             placeholder="Enter Product pieces"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                            Product Material
                           </label>
                           <input
                             onChange={(e) => {
                              setmaterial(e.target.value);
                             }}
                             id="material"
                             name="material"
                             placeholder="Enter Product Material"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                           <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                             Capacity
                           </label>
                           <input
                             onChange={(e) => {
                              setCapacity(e.target.value);
                             }}
                             id="capacity"
                             name="capacity"
                             placeholder="Enter Product Capacity"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                       
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Width
                           </label>
                           <input
                             onChange={(e) => {
                              setWidth(e.target.value);
                             }}
                             id="width"
                             name="width"
                             placeholder="Enter Product width"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Depth
                           </label>
                           <input
                             onChange={(e) => {
                              setDepth(e.target.value);
                             }}
                             id="depth"
                             name="depth"
                             placeholder="Enter Product depth"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Height
                           </label>
                           <input
                             onChange={(e) => {
                              setHeight(e.target.value);
                             }}
                             id="height"
                             name="height"
                             placeholder="Enter Product height"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           length
                           </label>
                           <input
                             onChange={(e) => {
                              setlength(e.target.value);
                             }}
                             id="length"
                             name="length"
                             placeholder="Enter Product length"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           diameter
                           </label>
                           <input
                             onChange={(e) => {
                              setdiameter(e.target.value);
                             }}
                             id="diameter"
                             name="diameter"
                             placeholder="Enter Product diameter"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                       
                         <div class="mb-5">
                           <label for="twitter" class="block mb-2 font-bold text-white">
                           Warranty
                           </label>
                           <input
                             onChange={(e) => {
                              setwarranty(e.target.value);
                             }}
                             id="warranty"
                             name="warranty"
                             placeholder="Enter Product warranty"
                             class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                           />
                         </div>
                         </>
                         
)}
            <div class="mb-5">
              <label for="twitter" class="block mb-2 font-bold text-white">
                Description
              </label>
              {/* <input type="text" id="twitter" name="twitter" placeholder="Put in your fullname." /> */}
              <textarea
                style={{ height: "100px" }}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                class="border  border-gray-300 shadow p-3 w-full rounded mb-"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <input type="file" onChange={handleFileChange} />

            <button
              onClick={handleUpload}
              class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg"
            >
              Add Product{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductuser;

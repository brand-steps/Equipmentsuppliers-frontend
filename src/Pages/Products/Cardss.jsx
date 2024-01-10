import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../Context/Context';
import { useTranslation } from 'react-i18next'

const Cardss = ({ index ,  price , img , text , paragraph , colors , cats, mats, capicitys, shelf, lids, lights, levels,
doors, widths, depths, heights, weights, consumptions, supplys, powers , temps ,refris, coolings, warrantys, castorss,
trays , pressures, productions, innerheights, baskets, programss, volumes, cycless, pumps, rinsepowers, dispensers, 
rinsefuncs, volumerinses, versions, taps, outputs, feets, bottomshelfs, bowlposs, sinkbowls, upstands, assemblys,
timers, controlss, rpms, speedss, includeds, weldingbars, bins, waterconnections, types, locks, worksurfaces, gasconsumptions,
defrosts, steams, piecess, diameters, lengths
}) => {
// console.log("Price" + price);
// console.log("Imdex" + price);
const {t} = useTranslation(["home"]);
  const {name, setName} = useContext(MyContext);
  const {pricep , setPricep} = useContext(MyContext);
  const {description, setDescription} = useContext(MyContext);
  const {image , setImage } = useContext(MyContext);
  const {category , setcategory } = useContext(MyContext);

  const {color , setcolor } = useContext(MyContext);
  const {material , setmaterial } = useContext(MyContext);
  const {capacity , setCapacity } = useContext(MyContext);
  const {shelves , setshelves } = useContext(MyContext);
  const {lid , setlid } = useContext(MyContext);
  const {lightening , setlightening } = useContext(MyContext);
  const {level , setlevel } = useContext(MyContext);
  const {door , setdoor } = useContext(MyContext);
  const {Width , setWidth } = useContext(MyContext);
  const {depth , setDepth } = useContext(MyContext);
  const {height , setHeight } = useContext(MyContext);
  const {weight , setWeight } = useContext(MyContext);
  const {consumption , setconsumption } = useContext(MyContext);
  const {supply , setsupply } = useContext(MyContext);
  const {power , setPower } = useContext(MyContext);
  const {temperature , settemperature } = useContext(MyContext);
  const {refrigerant , setrefrigerant } = useContext(MyContext);
  const {cooling , setcooling } = useContext(MyContext);
  const {warranty , setwarranty } = useContext(MyContext);
  const {castors , setcastors } = useContext(MyContext);
  const {tray , settray } = useContext(MyContext);
  const {pressure , setpressure } = useContext(MyContext);
  const {production , setproduction } = useContext(MyContext);
  const {innerheight , setinnerheight } = useContext(MyContext);
  const {basket , setbasket } = useContext(MyContext);
  const {programs , setprograms } = useContext(MyContext);
  const {volume , setvolume } = useContext(MyContext);
  const {cycles , setcycles } = useContext(MyContext);
  const {pump , setpump } = useContext(MyContext);
  const {rinsepower , setrinsepower } = useContext(MyContext);
  const {dispenser , setdispenser } = useContext(MyContext);
  const {rinsefunc , setrinsefunc } = useContext(MyContext);
  const {volumerinse , setvolumerinse } = useContext(MyContext);
  const {version , setversion } = useContext(MyContext);
  const {tap , settap } = useContext(MyContext);
  const {output , setoutput } = useContext(MyContext);
  const {feet , setfeet } = useContext(MyContext);
  const {bottomshelf , setbottomshelf } = useContext(MyContext);
  const {bowlpos , setbowlpos } = useContext(MyContext);
  const {sinkbowl , setsinkbowl } = useContext(MyContext);
  const {upstand , setupstand } = useContext(MyContext);
  const {assembly , setassembly } = useContext(MyContext);
  const {timer , settimer } = useContext(MyContext);
  const {controls , setcontrols } = useContext(MyContext);
  const {rpm , setrpm } = useContext(MyContext);
  const {speeds , setspeeds } = useContext(MyContext);
  const {included , setincluded } = useContext(MyContext);
  const {weldingbar , setweldingbar } = useContext(MyContext);
  const {bin , setbin } = useContext(MyContext);
  const {waterconnection , setwaterconnection } = useContext(MyContext);
  const {type , settype } = useContext(MyContext);
  const {lock , setlock } = useContext(MyContext);
  const {worksurface , setworksurface } = useContext(MyContext);
  const {gasconsumption , setgasconsumption } = useContext(MyContext);
  const {defrost , setdefrost } = useContext(MyContext);
  const {steam , setsteam } = useContext(MyContext);
  const {pieces , setpieces } = useContext(MyContext);
  const {diameter , setdiameter } = useContext(MyContext);
  const {length , setlength } = useContext(MyContext);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    setName({ ...name, key: text });
    setPricep({ ...pricep, key: price });
    setDescription({ ...description, key: paragraph });
    setImage({ ...image, key: img });
    setcolor({ ...color, key: colors });
    setcategory({...category, key:cats})
    setmaterial({...material, key:mats})
    setCapacity({...capacity, key:capicitys})
    setshelves({...shelves, key:shelf})
    setlid({...lid, key:lids})
    setlightening({...lightening, key:lights})
    setlevel({...level, key:levels})
    setdoor({...door, key:doors})
    setWidth({...Width, key:widths})
    setDepth({...depth, key:depths})
    setHeight({...height, key:heights})
    setWeight({...weight, key:weights})
    setconsumption({...consumption, key:consumptions})
    setsupply({...supply, key:supplys})
    setPower({...power, key:powers})
    settemperature({...temperature, key:temps})
    setrefrigerant({...refrigerant, key:refris})
    setcooling({...cooling, key:coolings})
    setwarranty({...warranty, key:warrantys})
    setcastors({...castors, key:castorss})
    settray({...tray, key:trays})
    setpressure({...pressure, key:pressures})
    setproduction({...production, key:productions})
    setinnerheight({...innerheight, key:innerheights})
    setbasket({...basket, key:baskets})
    setprograms({...programs, key:programss})
    setvolume({...volume, key:volumes})
    setcycles({...cycles, key:cycless})
    setpump({...pump, key:pumps})
    setrinsepower({...rinsepower, key:rinsepowers})
    setdispenser({...dispenser, key:dispensers})
    setrinsefunc({...rinsefunc, key:rinsefuncs})
    setvolumerinse({...volumerinse, key:volumerinses})
    setversion({...version, key:versions})
    settap({...tap, key:taps})
    setoutput({...output, key:outputs})
    setfeet({...feet, key:feets})
    setbottomshelf({...bottomshelf, key:bottomshelfs})
    setbowlpos({...bowlpos, key:bowlposs})
    setsinkbowl({...sinkbowl, key:sinkbowls})
    setupstand({...upstand, key:upstands})
    setassembly({...assembly, key:assemblys})
    settimer({...timer, key:timers})
    setcontrols({...controls, key:controlss})
    setrpm({...rpm, key:rpms})
    setspeeds({...speeds, key:speedss})
    setincluded({...included, key:includeds})
    setweldingbar({...weldingbar, key:weldingbars})
    setbin({...bin, key:bins})
    setwaterconnection({...waterconnection, key:waterconnections})
    settype({...type, key:types})
    setlock({...lock, key:locks})
    setworksurface({...worksurface, key:worksurfaces})
    setgasconsumption({...gasconsumption, key:gasconsumptions})
    setdefrost({...defrost, key:defrosts})
    setsteam({...steam, key:steams})
    setpieces({...pieces, key:piecess})
    setdiameter({...diameter, key:diameters})
    setlength({...length, key:lengths})

    navigate(`/Productdetail`);
    // console.log(name.key)
    // console.log(pricep.key)
    // console.log(description.key)
    // console.log(image.key)
  };


  return (
    <div className="carousel-item m-4" style={{ width: '300px', height: '400px' }}>
    <div className="carousel-content h-full flex flex-col justify-between">
      <img src={img} alt="Potato Peeling Machine" className="w-4/5 mx-auto rounded-lg shadow-md" />
      <div className="text-center mt-4">
        <h3 className="text-xl font-semibold">{text}</h3>
       {/* <p className="text-gray-600 mt-2">{paragraph}</p> */}
        <p className="text-black font-bold text-2xl mt-2">£{price}</p>
      </div>
      <button
        onClick={handleButtonClick}
        style={{ background: "#d6b02e", width: "80%", margin: "0 auto" }}
        className="text-black font-semibold px-4 py-2 rounded-lg mt-4 hover:bg-blue-700 transition-colors duration-300 ease-in-out"
      >
        {t("viewbutton")}
      </button>
    </div>
  </div>
  


    )
}

export default Cardss
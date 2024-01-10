import "./home.css";
import logo from "../../Images/equipment suppliers logo mini.png";
import logo1 from "../../Images/newlogo.png";

import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../Context/Context";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import flag1 from '../../Images/usa.png';
import flag2 from '../../Images/ger.png';
import flag3 from '../../Images/pol.png';
import flag4 from '../../Images/uk.png';

import { Dropdown } from 'flowbite-react';

const Home = () => {
  const {i18n, t} = useTranslation(["home"])
  const {
    name,
    setName,
    pricep,
    setPricep,
    description,
    setDescription,
    image,
    setImage,
  } = useContext(MyContext);
  const navigate = useNavigate();
  let [user, setUser] = useState(false);
  let [customeruser, setcustomeruser] = useState(false);
  let [customerresponse, setcustomerresponse] = useState("");

  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isUlVisible, setIsUlVisible] = useState(false);
  const [showList, setShowList] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  const [responce  , setResponce] = useState("")
  const [logout  , setlogout] = useState(false)
  const [lang  , setlang] = useState(false)

  // console.log('Home Page');
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18n.changeLanguage("en");
    }
  }, [])
  useEffect(() => {
    const getProfile = async () => {
      try {
        let response = await axios.get(
          `https://sore-cyan-fly-kit.cyclic.app/api/v1/profile`,
          {
            withCredentials: true,
            headers: {
              "Cache-Control": "no-cache",
              Pragma: "no-cache",
              Expires: "0",
            },
          }
        );

        // console.log("response: ", response);
        setResponce(response.data);
        setUser(true);
      } catch (error) {
        console.log("axios error: ", error);
      }
    };
    getProfile();
  }, []);
    useEffect(() => {
    const getProfile = async () => {
      try {
        let response = await axios.get(
          `https://sore-cyan-fly-kit.cyclic.app/api/v1/customerprofile`,
          {
            withCredentials: true,
            headers: {
              "Cache-Control": "no-cache",
              Pragma: "no-cache",
              Expires: "0",
            },
          }
        );

        // console.log("response: ", response);
        setcustomerresponse(response.data);
        setcustomeruser(true);
      } catch (error) {
        console.log("axios error: ", error);
      }
    };
    getProfile();
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlelanguage = (e) => {
    i18n.changeLanguage(e);
  }
  const handleBlur = () => {
    setTimeout(() => {
      setShowList(false);
    }, 200); // Delay to allow clicking on the list items
  };

  const handleFocus = () => {
    setShowList(true);
  };
  const handleLogouts = async () => {
    try {
      await axios.post('https://sore-cyan-fly-kit.cyclic.app/api/logout');
      console.log("logout")
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  const handleLogout = async () => {
    try {

      console.log("Logout successful");
      setcustomeruser(false);
      setUser(false);
      setcustomerresponse("");
      setResponce("");
      
      setlogout(true)
      alert("You have successfully Logged Out");
     // navigate('/', { replace: true }) 
        } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  const handleLogin = async () => {
    setUser(true);

  };
  const divStyle = {
    backgroundImage: "url('https://www.osimo.com.tr/assets/images/media-bg.jpg')",
    /* Other styles you might want to apply */
  };
  const handleButtonClick = (item) => {
    // console.log(item);
    const { name, price, description, imageUrl } = item;
    setName(name);
    setPricep(price);
    setDescription(description);
    setImage(imageUrl);
    navigate(`/Productdetail2`);
  };

  return (
    <nav className="nav bg-gray-900 flex flex-wrap items-center justify-between px-4">
      <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
        <div style={{ width: "220px" }} class="logo ">
          <Link to={"/"}>
            <img src={logo1} alt="" />
          </Link>
        </div>
      </div>

      <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
      <label
        className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
        htmlFor="menu-btn"
        onClick={toggleMenu}
      >
        <span className="navicon bg-grey-darkest flex items-center relative"></span>
      </label>

      <ul
        className={`menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto ${
          isMenuOpen ? "" : "hidden"
        }`}
        id="menu"
      >

        <Link to="/">
        <li className="md:border-none mt-2    mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
        {t("home")}
        </li>
        </Link>
        <Link to="/Corporate">
        <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
        {t("supplier")}
        </li>
        </Link>
        <Link to="/Prducts">
        <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
        {t("Products")}
        </li>
        </Link>
       {/*} <Link to="/OurDocument">
        <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          Our Documents
        </li>
        </Link>
      */}
        <Link to="/TechnicalService">
        <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
        {t("about")}
        </li>
        </Link>
        <Link to="/Contact">
        <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
        {t("contact")}
        </li>
        </Link>
        {user ? (
          <Link to="/UserDashboard">
          <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
            
              <span>
                {responce.firstname}{/*} <i className="fa fa-user" aria-hidden="true"></i>*/}
              </span>
            
          </li>
          </Link>
        ) : null}
                {customeruser ? (
         
          <li onClick={() => {navigate(`/CustomerOrders`)}} className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
            
              <span>
              {t("orders")} 
              </span>
            
          </li>

        ) : null}
        <Link to={"/CardPage"}>
          <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
            <i class="fa-solid fa-cart-shopping"></i>
          </li>
        </Link>


      

        *{customeruser ? (
          <>
            
          <button
            type="button" onClick={handleLogout}
            style={{ background: "rgb(236, 12, 54)" }}
            className="self-end text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out"
          >
            Logout
          </button>
        
          </>
        ) : 
        
        user ? (
<>
<button
            type="button" onClick={handleLogout}
            style={{ background: "#d6b02e" }}
            className="self-end text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out"
          >
            Logout
          </button>
</>
        ): 
        <>
                  <NavLink to="/loginform">
          <button
            type="button"
            style={{ background: "#d6b02e" }}
            className="self-end text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out"
          >
            {t("login")}
          </button>
        </NavLink>
        </>
        } 
           {/*}       <button
            type="button"
            style={{ background: "rgb(236, 12, 54)" }}
            className="self-end text-white font-medium rounded-lg text-sm  mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out"
          >
            <img src={flag1} alt="img" className="w-6 h-6" />
          </button>
          <div>
          <button
            type="button"
            style={{ background: "rgb(236, 12, 54)" }}
            className="self-end text-white font-medium rounded-lg text-sm  mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out"
          >
            <img src={flag1} alt="img" className="w-12 h-6" />
          </button>
          </div>
          
         
                <select style={{ background: "rgb(236, 12, 54)" }} id="language" name='language' value={localStorage.getItem("i18nextLng")} onChange={handlelanguage} className=" border text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 border-none block w-full p-0.5 0 h-8 w-20  ">
        <option value="en" > English
        </option>
        <option value="de" > German</option>
        <option value="pl" >Polish</option>

        </select>
       */}
        <div class="dropdown">
  <button class="dropbtn">Language</button>
  <div class="dropdown-content">
    <a id="language" name='language' value="en" onClick={()=>{handlelanguage("en")}}>
      <img
                className="mr-2 inline"
                width={"20px"}
                height={"20px"}
                src={flag4}
                alt=""
              />English</a>
    <a id="language" name='language' value="en" onClick={()=>{handlelanguage("de")}}>
    <img
                className="mr-2 inline"
                width={"20px"}
                height={"20px"}
                src={flag2}
                alt=""
              />German</a>
    <a id="language" name='language' value="en" onClick={()=>{handlelanguage("pl")}}>
    <img
                className="mr-2 inline"
                width={"20px"}
                height={"20px"}
                src={flag3}
                alt=""
              />Polish</a>
  </div>
</div>
      {/*}
           <Dropdown label="Select" size="sm" id="language" name='language' value={localStorage.getItem("i18nextLng")} onClick={(event) => { handlelanguage(event.target.value); }} >
        <Dropdown.Item value="en" ><img src={flag1} alt="img" className="w-6 h-6"/> </Dropdown.Item>
        <Dropdown.Item value="dl">Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
        */}
        
      </ul>


    </nav>
  );
};

export default Home;

import { useState } from "react";
import { Link } from "react-router-dom";
import avtar from "../../Images/avtar.png";
import { useNavigate } from "react-router-dom";
import logo from "../../Images/equipment suppliers logo mini.png";
import axios from "axios";
const Sidebaruser = () => {
  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleLogout = async () => {
    try {
      await axios.post("https://sore-cyan-fly-kit.cyclic.app/logout", {
        withCredentials: true, // This ensures that cookies are sent with the request
      });
      console.log("Logout successful");
      navigate('/', { replace: true }) 
        } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav bg-gray-900 flex flex-wrap items-center justify-between px-4">
      <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
        <div style={{ width: "260px" }} class="logo ">
          <Link to={"/"}>
            <img src={logo} alt="" />
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
                <li className="md:border-none mt-2    mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          <Link to="/">Home</Link>
        </li>
        <li className="md:border-none mt-2    mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          <Link to="/Profile"> Profile</Link>
        </li>
        <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          <Link to="/AddProduct/user">Add Products</Link>
        </li>
        <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          <Link to="/Allproduct">Products</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Sidebaruser;

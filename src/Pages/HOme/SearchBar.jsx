import "./home.css";
import logo from "../../Images/equipment suppliers logo mini.png";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../Context/Context";
import './home.css';

const SearchBar = () => {
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
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isUlVisible, setIsUlVisible] = useState(false);
  const [showList, setShowList] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();


  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      try {
        const response = await axios.get(
          `https://sore-cyan-fly-kit.cyclic.app/api/search?q=${searchTerm}`
        );
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }, 300); // Debounce time in milliseconds

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleBlur = () => {
    setTimeout(() => {
      setShowList(false);
    }, 200); // Delay to allow clicking on the list items
  };

  const handleFocus = () => {
    setShowList(true);
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


      <div
        className="search-container rounded-lg shadow p-4 "
        onBlur={handleBlur}
      >
        <div className="flex flex-col sm:flex-row searchbot">
          <input
            type="text"
            className="search-input border rounded-l-lg p-2 focus:outline-none mb-2 sm:mb-0 sm:mr-2"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={handleFocus}
          />
          <button
            type="button"
            style={{ background: "rgb(236, 12, 54)" }}
            className="self-end text-white font-medium text-sm px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out"
          >
            Search
          </button>
        </div>
        {searchResults.length === 0 ? (
          <p>No products were found matching your selection.</p>
        ) : (
          <ul className={`PrdouctSerchUl ${showList ? "block" : "hidden"}`}>
            {searchResults.map((item) => (
              <li
                key={item._id}
                onClick={() => handleButtonClick(item)}
                className="itemHoverEffect cursor-pointer flex items-center p-2 hover:bg-gray-100"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="mr-3"
                  width={70}
                  height={20}
                />
                <div>
                  <p className="text-md font-semibold">{item.name}</p>
                  <p className="text-gray-600">£{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
  );
};

export default SearchBar;

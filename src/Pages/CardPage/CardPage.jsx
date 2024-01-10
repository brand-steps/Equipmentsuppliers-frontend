import React, { useContext, useState, useEffect } from 'react';
import CartContext from '../Context/CartContext';
import Home from '../HOme/Home';
import Footer from '../Foooter/Footer';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../Context/Context';
import { useTranslation } from 'react-i18next'

const CardPage = () => {
  const {t} = useTranslation(["checkout"]);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);
  const [data, setData] = useState(cartItems);
  const [total, setTotal] = useState(0);
  const {name, setName} = useContext(MyContext);
  const {pricep , setPricep} = useContext(MyContext);
  const {description, setDescription} = useContext(MyContext);
  const {quantityProduct, setQuantityProduct} = useContext(MyContext);
  const {image , setImage } = useContext(MyContext);
  const {category , setcategory } = useContext(MyContext);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(parseFloat(pricep.key));
  const allProduct = [name ,  totalPrice , description , image , quantity , totalPrice]
  useEffect(() => {
    // Calculate the total price whenever data changes
    const newTotal = data.reduce((acc, innerArray) => {
      return acc + innerArray[4] * innerArray[5];
    }, 0);
    setTotal(newTotal);
  }, [data]);

  const handleIncreaseQuantity = (index) => {
    const newData = [...data];
    newData[index][4]++; 
    setData(newData); 
  };
const buttnstl = {
  backgroundColor: '#d6b02e'
}
  const handleDecreaseQuantity = (index) => {
    const newData = [...data];
    if (newData[index][4] > 1) {
      newData[index][4]--; // Decrease quantity
      setData(newData); // Update the state with the new data
    }
  };
  const productCheckOut = () => {
    console.log("asd",cartItems)
navigate("/PaymentPage");
 //   setShowDiv(true);
  //  addToCart(allProduct)

    // Automatically hide the div after 5 seconds (5000 milliseconds)

  };

  return (
    <div>
    <Home />
    <div className="h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">{t("product")}</th>
                    <th className="text-left font-semibold">{t("price")}</th>
                    <th className="text-left ml-6 font-semibold">{t("quantity")}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((innerArray, index) => (
                    <tr key={index}>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4"
                            src={innerArray[3].key} // Replace with your image source
                            alt="Product image"
                          />
                          <span className="font-semibold">
                            {innerArray[0].key} {/* Replace with your product name */}
                          </span>
                        </div>
                      </td>
                      <td className="py-4">£{innerArray[5]}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button
                            className="border rounded-md py-2 px-4 mr-2"
                            onClick={() => handleDecreaseQuantity(index)}
                          >
                            -
                          </button>
                          <span className="text-center w-8">{innerArray[4]}</span>
                          <button
                            className="border rounded-md py-2 px-4 ml-2"
                            onClick={() => handleIncreaseQuantity(index)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">{t("summary")}</h2>
              <div className="flex justify-between mb-2">
                <span>{t("subtotal")}</span>
                <span>£{total}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>{t("taxes")}</span>
                <span>{total ? "£1.99" : null}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>{t("shipping")}</span>
                <span>£0.00</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{t("total")}</span>
                <span className="font-semibold">£{total}</span>
              </div>
              <button onClick={productCheckOut} style={buttnstl} className=" text-black font-bold py-2 px-4 rounded-lg mt-4 w-full">{t("checkout")}</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
  );
};

export default CardPage;

import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/HOme/Home";
import Slider from "./Pages/Slider/Slider";
import Cards from "./Pages/Cards/Cards";
import About from "./Pages/Aboutus/About";
import ProductGroup from "./Pages/FirstPage/ProductGroup/ProductGroup";
import ProductSlider from "./Pages/FirstPage/ProductGroup/ProductSlider.jsx/ProductSlider";
import Services from "./Pages/FirstPage/Services/Services";
// import Login from './Pages/FirstPage/Login/Login';
import FairsComponent from "./Pages/FirstPage/FairsArticle/FairsArticle";
import Footer from "./Pages/Foooter/Footer";
import Corporate from "./Pages/Corporate/Corporate";
import Prducts from "./Pages/Products/Prducts";
import BackgroundDiv from "./Pages/FirstPage/FairsArticle/FairsArticle";
import OurDocument from "./Pages/OurDocuments/OurDocument";
import Contact from "./Pages/ContactForm/Contact";
import MainPage from "./Pages/MainPage/MainPage";
import Teachnical from "./Pages/TeachnicalService/Teachnical";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Productdetail from "./Pages/Products/ProductDetail";
import PaymentPage from "./Pages/Products/Payment";
import Dashbord from "./Pages/AdminDashboard/Dashboard";
import AddProduct from "./Pages/AdminDashboard/DashboardCrud/AddProduct/Addproduct";
import UserDashboard from "./Pages/Userdashboard/UserDashboard";
import Profile from "./Pages/Userdashboard/Profile";
import AddProductuser from "./Pages/Userdashboard/AddProduct";
import Allproduct from "./Pages/Userdashboard/Allproduct";
import { Provider } from "react-redux";
import { CartProvider } from "./Pages/Context/CartContext";
import Store from "./Store";
import { AllProductDashboad } from "./Pages/AdminDashboard/DashboardCrud/AddProduct/AllProduct/AllProduct";
import { MyContextProvider } from "./Pages/Context/Context";
import PrivacyPolicy from "./Pages/Policy/Policy";
import Productdetail2 from "./Pages/Products/ProductDetail2";
import CardPage from "./Pages/CardPage/CardPage";
import HoverButton from "./HowerAnimation/HowerAnimation";
import LoginPage from "./Pages/LoginPage";
import { AllUser } from "./Pages/AdminDashboard/DashboardCrud/Alluser/AllUser";
import { Selectuserproduct } from "./Pages/AdminDashboard/DashboardCrud/Alluser/Selectuserproduct";
import Productrequest from "./Pages/AdminDashboard/Productrequests/Productrequest";
import EdittProduct from "./Pages/Products/Editproduct/editproductcheck";
import EditUser from "./Pages/AdminDashboard/DashboardCrud/Alluser/EditUser";
import Editproductuser from "./Pages/Products/Editproduct/EditproductUser";
import Signform from "./Pages/Signinform/Signform";
import LoginForm from "./Pages/Loginform";
import Refrigration from "./Pages/Categorypages/Refrigeration";
import Dishwashing from "./Pages/Categorypages/Dishwashing";
import Appliances from "./Pages/Categorypages/Appliances";
import Stainlesssteel from "./Pages/Categorypages/Stainlesssteel";
import Cooking from "./Pages/Categorypages/Cooking";
import Foodprep from "./Pages/Categorypages/Foodprep";
import Beverage from "./Pages/Categorypages/Beverage";
import Pizzeria from "./Pages/Categorypages/Pizzaria";
import Ovens from "./Pages/Categorypages/Ovens";
import Utensils from "./Pages/Categorypages/Utensils";
import Subcategorypage from "./Pages/SubCategory/Subcategorypage";
import Editrefrigerator from "./Pages/Products/Editproductbycategory/Editrefrigerator";
import EditDishwashing from "./Pages/Products/Editproductbycategory/EditDishwashing";
import EditAppliance from "./Pages/Products/Editproductbycategory/EditAppliance";
import EditSteel from "./Pages/Products/Editproductbycategory/EditSteel";
import EditCooking from "./Pages/Products/Editproductbycategory/EditCooking";
import EditFoodprep from "./Pages/Products/Editproductbycategory/EditFoodprep";
import EditBeverage from "./Pages/Products/Editproductbycategory/Editbeverage";
import EditPizza from "./Pages/Products/Editproductbycategory/EditPizza";
import EditOven from "./Pages/Products/Editproductbycategory/EditOven";
import EditUtensils from "./Pages/Products/Editproductbycategory/EditUtensils";
import VendorLogin from "./Pages/vendorlogin/Vendorlogin";
import Signupcustomer from "./Pages/SignupCustomer/Signupcustomer";
import { AllCustomer } from "./Pages/AdminDashboard/Allcustomers/AllCustomer";
import EditCustomers from "./Pages/AdminDashboard/Allcustomers/EditCustomers";
import Applianceedit from "./Pages/Userdashboard/Edituserproduct/Applianceedit";
import Beverageedit from "./Pages/Userdashboard/Edituserproduct/Beverageedit";
import Cookingedit from "./Pages/Userdashboard/Edituserproduct/Cookingedit";
import Dishwashingedit from "./Pages/Userdashboard/Edituserproduct/Dishwashingedit";
import Foodprepedit from "./Pages/Userdashboard/Edituserproduct/Foodprepedit";
import Ovenedit from "./Pages/Userdashboard/Edituserproduct/Ovenedit";
import Pizzaedit from "./Pages/Userdashboard/Edituserproduct/Pizzaedit";
import Refrigeratoredit from "./Pages/Userdashboard/Edituserproduct/Refrigeratoredit";
import Steeledit from "./Pages/Userdashboard/Edituserproduct/Steeledit";
import Utensilsedit from "./Pages/Userdashboard/Edituserproduct/Utensilsedit";
import Catalog from "./Pages/Catalogue/Catalog";
import Customerorder from "./Pages/Orders/Customerorder";
import { Allorder } from "./Pages/AdminDashboard/Allorders/Allorder";
import BestSellers from "./Pages/AdminDashboard/BestSellers/BestSeller";

function App() {
  return (
    <div>
      <CartProvider>
        <MyContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<MainPage />} />
              <Route path={"/Corporate"} element={<Corporate />} />
              <Route path={"/About"} element={<About />} />
              <Route path={"/Prducts"} element={<Prducts />} />
              <Route path={"/OurDocument"} element={<OurDocument />} />
              <Route path={"/Contact"} element={<Contact />} />
              <Route path={"/TechnicalService"} element={<Teachnical />} />
              <Route path={"/Login"} element={<Login />} />
              <Route path="/Productdetail" element={<Productdetail />} />
              <Route
                path="/PaymentPage/:totalPrice/:quantity"
                element={<PaymentPage />}
              />
                            <Route
                path="/PaymentPage"
                element={<PaymentPage />}
              />
              <Route path="/Dashbord" element={<Dashbord />} />
              <Route path="/AddProduct" element={<AddProduct />} />
              <Route path="/UserDashboard" element={<UserDashboard />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/AddProduct/user" element={<AddProductuser />} />
              <Route path="/Allproduct" element={<Allproduct />} />
              <Route path="/AllProductDashboad" element={<AllProductDashboad />} />
              <Route path="/AllUser" element={<AllUser />} />
              <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/Productdetail2" element={<Productdetail2 />} />
              <Route path="/CardPage" element={<CardPage />} />
              <Route path="/productrequest" element={<Productrequest />} />
              <Route path="/bestSeller" element={<BestSellers />} />
              <Route path="/UserProduct" element={<Selectuserproduct />} />
              <Route path="/signupform" element={<Signform />} />
              <Route path="/Loginform" element={<LoginForm />} />
              <Route path="/Refrigeration" element={<Refrigration />} />
              <Route path="/Dishwashing" element={<Dishwashing />} />
              <Route path="/Appliances" element={<Appliances />} />
              <Route path="/StainlessSteel" element={<Stainlesssteel />} />
              <Route path="/Cooking" element={<Cooking />} />
              <Route path="/Foodprep" element={<Foodprep />} />
              <Route path="/Beverage" element={<Beverage />} />
              <Route path="/Pizzeria" element={<Pizzeria />} />
              <Route path="/Ovens" element={<Ovens />} />
              <Route path="/Utensils" element={<Utensils />} />
              <Route path="/vendorlogin" element={<VendorLogin />} />
              <Route path="/eCatalogue" element={<Catalog />} />
              <Route path="/CustomerOrders" element={<Customerorder />} />
              <Route path="/allOrders" element={<Allorder />} />
              <Route path="/EditProduct/:id" element={<EdittProduct />} />
              <Route path="/Editproductuser/:id" element={<Editproductuser />} />
              <Route path="/EditUser/:id" element={<EditUser />} />
              <Route path="/Subcategorypage/:subcat" element={<Subcategorypage />} />

              <Route path="/Editrefrigerator/:id" element={<Editrefrigerator />} />
              <Route path="/Editdishwashing/:id" element={<EditDishwashing />} />
              <Route path="/Editappliance/:id" element={<EditAppliance />} />
              <Route path="/Stainlesssteels/:id" element={<EditSteel />} />
              <Route path="/Editcooking/:id" element={<EditCooking />} />
              <Route path="/EditFoodprep/:id" element={<EditFoodprep />} />
              <Route path="/Editbeverage/:id" element={<EditBeverage />} />
              <Route path="/Editpizza/:id" element={<EditPizza />} />
              <Route path="/Editoven/:id" element={<EditOven />} />
              <Route path="/Editutensils/:id" element={<EditUtensils />} />
              <Route path="/signupCustomer" element={<Signupcustomer />} />
              <Route path="/Allcustomers" element={<AllCustomer />} />
              <Route path="/Editcustomers/:id" element={<EditCustomers />} />

              <Route path="/applianceedit/:id" element={<Applianceedit />} />
              <Route path="/beverageedit/:id" element={< Beverageedit />} />
              <Route path="/cookingedit/:id" element={<Cookingedit />} />
              <Route path="/dishwashingedit/:id" element={<Dishwashingedit />} />
              <Route path="/foodprepedit/:id" element={<Foodprepedit />} />
              <Route path="/oveneditedit/:id" element={<Ovenedit />} />
              <Route path="/pizzaedit/:id" element={<Pizzaedit />} />
              <Route path="/refrigeratoredit/:id" element={<Refrigeratoredit />} />
              <Route path="/steeledit/:id" element={<Steeledit />} />
              <Route path="/utensilsedit/:id" element={<Utensilsedit />} />

            </Routes>
          </BrowserRouter>
        </MyContextProvider>
      </CartProvider>
    </div>
  );
}

export default App;

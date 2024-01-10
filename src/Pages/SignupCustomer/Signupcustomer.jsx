import TextField from '@mui/material/TextField';
import React, { useState, useEffect } from 'react';
import { useNavigate , useParams} from 'react-router';
import axios from 'axios'
import './signupcustomer.css'
import Loginbar from '../HOme/Loginbar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useTranslation } from 'react-i18next'

const Signupcustomer = () => {
  const {t} = useTranslation(["login"]);

  const navigate = useNavigate();
    const [email, setemail] = useState()
    const [firstname, setFirstName] = useState()
    const [lastname, setLastName] = useState()
    const [phone, setPhone] = useState()
    const [postal, setPostal] = useState()
    const [address, setAddress] = useState()
    const [country, setCountry] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [password, setPassword] = useState()
    const [reTypepassword, setReTypePassword] = useState()

    const [emailError, setEmailError] = useState();
    const [firstnameError, setFirstError] = useState();
    const [phoneError, setPhoneError] = useState();
    const [CompanyError, setCompanyError] = useState();
    const [postalError, setPostalError] = useState();
    const [addressError, setAddressError] = useState();
    const [countryError, setCountryError] = useState();
    const [cityError, setCityError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [reTypePasswordError, setReTypePasswordError] = useState(false);


    const signupForm = async () => {


        console.log('Signup Form');
        if (!firstname) {
            setFirstError(`${t("firstnameerror")}`);
            return;
          }
          if (!phone) {
            setPhoneError(`${t("phoneerror")}`);
            return;
          }

          if (!postal) {
            setPostalError(`${t("postalerror")}`);
            return;
          }
        if (!email) {
          setEmailError(`${t("emailerror")}`);
          return;
        }

          if (!address) {
            setAddressError(`${t("addresserror")}`);
            return;
          }
          if (!password) {
            setPasswordError(`${t("passworderror")}`);
            return;
          }
    
        if (password !== reTypepassword) {
          setReTypePasswordError(`${t("retypeerror")}`);
          return;
        }
          if (!country || country === `${t("country")}`) {
            setCountry("");
            setCountryError(`${t("countryerror")}`)
          }
          if (!city) {
            setCityError(`${t("cityerror")}`);
            return;
          }



        if (firstname && email && phone && postal && address &&country &&city && password && reTypepassword) {
          try {
            const response = await axios.post('https://sore-cyan-fly-kit.cyclic.app/customerregister', {
              firstname,
              lastname,
              email,
              phone,
              postal,
              address,
              country,
              city,
              state,
              password,
            });
    
            // Handle the response according to your needs
            if (response.status === 201) {
              console.log('Signup successful');
              alert("you have successfully registered");
              navigate("/Loginform")
              
              // Perform any necessary actions on successful signup
            } else {
              alert("Customer failed to register")

              // Handle signup failure
            }
          } catch (error) {
            console.error(error);
            alert("User with this Email ID already exist!")
            // Handle error
          }
    
        }
        else {
            console.log("else")
            alert("Feilds are required to be filled")
        }
    
      };
      

    return (
        <>
        <Loginbar/>
        <div className='rootcontainers'>
        <h1 className='Headings bg-cyan-950 text-white'>{t("signuphead")}</h1>
        </div>
        <div className='mx-10 my-6 '>
        <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" onChange={(event) => { setFirstName(event.target.value); setFirstError("") }} name="firstname" id="firstname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="firstname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("firstname")}</label>
        {firstnameError && <p className="error-message">{firstnameError}</p>} 
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="lastname" onChange={(event) => { setLastName(event.target.value) }} id="lastname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="lastname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("lastname")}</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
      <input type="number" name="phone" onChange={(event) => {setPhone (event.target.value); setPhoneError("")}} id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("phone")}</label>
      {phoneError && <p className="error-message">{phoneError}</p>} 

  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="number" onChange={(event) => { setPostal(event.target.value); setPostalError("") }} name="postal" id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("postal")}</label>
      {postalError && <p className="error-message">{postalError}</p>} 

  </div>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="email" name="email" id="email" onChange={(event) => { setemail(event.target.value); setEmailError("") }} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("emailaddress")}</label>
      {emailError && <p className="error-message">{emailError}</p>} 

  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input name="address" id="address" onChange={(event) => { setAddress(event.target.value); setAddressError("") }} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("address")}</label>
      {addressError && <p className="error-message">{addressError}</p>} 

  </div>

  <div className="relative z-0 w-full mb-6 group">
      <input type="password" name="password" onChange={(event) => { setPassword(event.target.value); setPasswordError("") }} id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("passwords")}</label>
      {passwordError && <p className="error-message">{passwordError}</p>} 

  </div>
  
  <div className="relative z-0 w-full mb-6 group">
      <input type="password" name="retype" onChange={(event) => { setReTypePassword(event.target.value); setReTypePasswordError("") }} id="retype" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="retype" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("retype")}</label>
      {reTypePasswordError && <p className="error-message">{reTypePasswordError}</p>} 

  </div>

  <div className="grid md:grid-cols-3 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
    <select id="country" onChange={(event) => { setCountry(event.target.value); setCountryError("") }} name='country' className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>{t("country")}</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="United States">United States</option>
        <option value="Canada">Canada</option>
        <option value="germany">Germany</option>
</select>
{countryError && <p className="error-message">{countryError}</p>} 
 </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="city" id="city" onChange={(event) => { setCity(event.target.value); setCityError("") }} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("city")}</label>
        {cityError && <p className="error-message">{cityError}</p>} 
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="state" id="state" onChange={(event) => { setState(event.target.value) }} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="state" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("state")}</label>
    </div>
  </div>
  <button type="submit" onClick={signupForm} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{t("registerscus")}</button>
</div>

        </>
    )
};
export default Signupcustomer;
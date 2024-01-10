import { Link, Router, Routes, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./loginform.css";
import Loginbar from "../HOme/Loginbar";
import axios from 'axios';
import { useTranslation } from 'react-i18next'


// for customer login

const LoginForm = () => {
  const {t} = useTranslation(["login"]);

  const navigate = useNavigate();
  const [email, setemail] = useState()
  const [password, setPassword] = useState()
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState(false);

  
  const LoginForm = async () => {
    if (!email || !password) {
      console.log('Value is not Given');
      return
    }
    // https://glorious-hat-bat.cyclic.app      // old url
    else {
      try {
        let response = await axios.post(`https://sore-cyan-fly-kit.cyclic.app/Customerlogin`, {
          email: email,
          password: password
        }, {
          withCredentials: true
        })
          console.log("login successful");
          navigate('/', { replace: true })

      } catch (error) {
        console.log(error)
        setErrorMessage('Invalid Email or Password'); 
      }
    }
  };


  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '300px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const containerStyle2 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderRadius: '8px',
    width: '300px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    marginBottom: '16px',
  };

  const buttonStyle = {
    background: '#28231d',
    color: 'white',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '8px',
    marginTop: '12px',
    cursor: 'pointer',
  };

  

  return (
    <div className="form-main">
      <Loginbar/> 
              <div className='flex  justify-evenly flex-wrap my-4 mt-8' >

              <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 sm:mt-5 md:mt-5 dark:bg-gray-800 dark:border-gray-700 w-2/4">
    <div class="space-y-6">
        <h4 class="text-xl font-medium text-gray-900 dark:text-white">{t("customer")}</h4>
        <hr/>
        <div>
        <h5 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-lg">{t("register")}</h5>
        </div>
        <div>
        <h5 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {t("regdes")}        
        </h5>

        </div>
        <div>
          
        <button type="submit" onClick={() => {navigate("/signupCustomer")}} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:mt-8">{t("continue")}</button>
        </div>
    </div>
</div>

<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 sm:mt-5 md:mt-5 dark:bg-gray-800 dark:border-gray-700">
    <div class="space-y-6">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">{t("returning")}</h5>
        <hr/>
        <div>
        <h5 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-lg">{t("returningsub")}</h5>
        </div>
        <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("email")}</label>
            <input type="email" name="email" id="email"  onChange={(event) => { setemail(event.target.value); setEmailError(false); }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
        </div>
        <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("password")}</label>
            <input type="password" name="password" onChange={(event) => { setPassword(event.target.value) }} id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        {errorMessage && (
          <p className="text-red-500 font-semibold">{errorMessage}</p>
        )}

        <button onClick={LoginForm} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{t("login")}</button>
    </div>
</div>


</div>


    </div>
  );
};

export default LoginForm;

import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next'

const Login = () => {
  const {t} = useTranslation(["home"]);
  let button = "LOGIN  ";
  return (
    <div
      className="my-4 flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://www.osimo.com.tr/assets/images/services-bg.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "500px" /* Increased height */,
      }}
    >
      <div className="flex flex-col">
        <h3 style={{ color: "#d6b02e" }} className="text-2xl py-4">
          {t("login")}
        </h3>
        {/*<h1 className="text-white text-4xl font-bold mb-4">Login</h1>
   */}      <p className="text-white">
          {t("logindes")}
        </p>
        <input
          type="text"
          className="w-3/5	 my-4 p-2 rounded"
          placeholder="Username"
        />
        <input
          type="text"
          className="w-3/5	 my-4 p-2 rounded"
          placeholder="Password"
        />
        <NavLink to="/Login">
          <button
            style={{
              background: "#d6b02e",
              padding: "8px 16px",
              fontSize: "16px",
            }}
            className="text-black font-semibold rounded-lg mt-4 hover:bg-blue-700 w-40"
          >
            {t("login")}
          </button>
        </NavLink>
        ;
      </div>
    </div>
  );
};

export default Login;

// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "./image/logo.png";
import { NavLink } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  return (
    <>
      <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center gap-4">
            <div className="">
              <a
                href="#"
                className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
              >
                <img className="w-14" src={Logo} alt="logo" />
                Food Recup
              </a>
            </div>
            <div className="flex justify-between items-center gap-4 ">
              <NavLink
                to="/app"
                className=" sm:flex items-center gap-4 inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
              >
                Accueil
              </NavLink>

              <NavLink
                to="/commande"
                className=" sm:flex items-center gap-4 inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
              >
                Commande
              </NavLink>

              <NavLink
                to="/decouvert"
                className=" sm:flex items-center gap-4 inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
              >
                Decouvert
              </NavLink>

              <NavLink
                to="/profil"
                className=" sm:flex items-center gap-4 inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
              >
                Profil
              </NavLink>
              <NavLink to="/signup">
                <button className="sm:flex items-center gap-4 inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200 ">
                  {" "}
                  <AccountCircleIcon />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

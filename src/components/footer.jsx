// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="text-white">
        <div className="bg-black/40 min-h-[400px]">
          <div className="container grid grid-cols-3 pb-20 pt-5 ">
            <div className="">
              <a href="#" className="">
                Food Récup
              </a>
              <p>Luttons contre le gaspilage alimentaire ensemble</p>
            </div>

            <div>
              <NavLink to="/accueil">Accueil</NavLink>

              <NavLink to="/carte">Carte</NavLink>

              <NavLink to="/commande">Commande</NavLink>

              <NavLink to="/profil">Profil</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

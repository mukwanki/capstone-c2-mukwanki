// eslint-disable-next-line no-unused-vars
import React from "react";
import FleurImg from "./image/spaghetti.jpg";
const backgroundStyle = {
  backgroundImage: `url(${FleurImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  return (
    <>
      <div style={backgroundStyle} className="py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <div className="space-y-6 max-w-xl mx-auto">
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold pl-3 text-white/90 ">
                L’APPLICATION FOOD RÉCUP QUI A DU GOUT
              </h1>
              <p className="flex flex-wrap justify-center sm:justify-start items-center text-xl text-center text-white font-medium sm:text-xl ">
                Une petite faim ? Avec l’application Food Récup, Rendez-vous
                dans les restaurants et magasins près de chez vous pour
                récupérer de délicieux paniers surprise à petits prix.
              </p>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

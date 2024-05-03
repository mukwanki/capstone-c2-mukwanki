// eslint-disable-next-line no-unused-vars
import React from "react";
import Cookie from "./image/cooookie.jpg";
import Frite from "./image/frite.jpg";
import Boaef from "./image/boaf.jpg";
import Miam from "./image/miam.jpg";

function Service() {
  return (
    <div className="py-10 ">
      <div className="container">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursive text-black">
            La meilleure nourriture pour vous
          </h1>
        </div>
        {/*baniere image*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap3 place-items-center ">
          <div className=" duration-200 group relative">
            <img
              className="rounded-2xl bg-white hover:bg-primary mx-auto -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"
              src={Cookie}
              alt="photo"
            />
          </div>

          <div className=" duration-200  group relative">
            <img
              className="rounded-2xl bg-white hover:bg-primary  mx-auto -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"
              src={Frite}
              alt="photo"
            />
          </div>

          <div className=" duration-200  group relative">
            <img
              className="rounded-2xl bg-white hover:bg-primary  mx-auto -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"
              src={Boaef}
              alt="photo"
            />
          </div>

          <div className=" duration-200  group relative">
            <img
              className="rounded-2xl bg-white hover:bg-primary  mx-auto -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"
              src={Miam}
              alt="photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;

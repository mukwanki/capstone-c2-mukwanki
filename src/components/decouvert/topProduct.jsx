// eslint-disable-next-line no-unused-vars
import React from "react";
import { AiOutlineArrowLeft, AiOutlineRight } from "react-icons/ai";
import SteackImg from "src/components/image/steack.png";
import CookieImg from "src/components/image/cooookie.jpg";

const TopProduct = () => {
  return (
    <>
      <div className="container w-full bg-stone-200 py-5 relative">
        <div className="Top-Produits w-4/5 m-auto grid lg:grid-cols-6 grid-cols-3 gap-5 justify-items-center my-10">
          <div className="product w-36 space-y-2">
            <div className=" w-36 h-36">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={SteackImg}
                alt=""
              />
            </div>
            <h1 className="font-semibold">Lorem ipsum dolor sit amet.</h1>
          </div>
          <div className="product w-36 space-y-2">
            <div className=" w-36 h-36">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={SteackImg}
                alt=""
              />
            </div>
            <h1 className="font-semibold">Lorem ipsum dolor sit amet.</h1>
          </div>
          <div className="product w-36 space-y-2">
            <div className=" w-36 h-36">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={SteackImg}
                alt=""
              />
            </div>
            <h1 className="font-semibold">Lorem ipsum dolor sit amet.</h1>
          </div>
          <div className="product w-36 space-y-2">
            <div className=" w-36 h-36">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={SteackImg}
                alt=""
              />
            </div>
            <h1 className="font-semibold">Lorem ipsum dolor sit amet.</h1>
          </div>
          <div className="product w-36 space-y-2">
            <div className=" w-36 h-36">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={SteackImg}
                alt=""
              />
            </div>
            <h1 className="font-semibold">Lorem ipsum dolor sit amet.</h1>
          </div>
          <div className="product w-36 space-y-2">
            <div className=" w-36 h-36">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={SteackImg}
                alt=""
              />
            </div>
            <h1 className="font-semibold">Lorem ipsum dolor sit amet.</h1>
          </div>
        </div>
        <div className="arrows absolute inset-y-1/2 flex justify-between w-full px-5">
          <div className="p-2 py-4  bg-white rounded-full flex items-center">
            <AiOutlineArrowLeft />{" "}
          </div>
          <div className="p-2 py-4 bg-white rounded-full flex items-center">
            <AiOutlineRight />{" "}
          </div>
        </div>
      </div>
      <div className="w-4/5 m-auto grid grid-rows-2 grid-cols-4 gap-5 p-5 my-20">
        <div className="row-span-2 col-span-2">
          <img
            className="w-full h-full object-cover"
            src="src/components/image/cooookie.jpg"
            alt=""
          />
        </div>
        <div className="col-span-1 row-span-1">
          <img className="w-full h-full object-cover" src={CookieImg} alt="" />
        </div>
        <div className="col-span-1 row-span-1">
          <img className="w-full h-full object-cover" src={CookieImg} alt="" />
        </div>
        <div className="col-span-2">
          <img className="w-full h-full object-cover" src={CookieImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default TopProduct;

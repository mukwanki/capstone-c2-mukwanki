// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import SamouImg from "../image/samouuu.jpg";
import BoafImg from "../image/boaf.jpg";
import CookImg from "../image/cooookie.jpg";
import FriteImg from "../image/frite.jpg";
import ViandeImg from "../image/tilapia.jpg";

const ProductsS = (produit) => {
  return (
    <div className="w-11/12 m-auto">
      <div className="my-16 flex justify-between">
        <h1 className="text-2xl font-semibold">Menu Disponible </h1>
        <button className="px-10 py-2 rounded bg-primary text-white">
          Filtre
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <div className=" space-y-2">
          <Link to="/product-detail?image=src\components\image\samouuu.jpg&description=Samoussa&price=$45">
            <img
              className="w-full h-64 object-cover cursor-pointer transition duration-300 transform hover:scale-105"
              src={SamouImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl text-center">Samoussa</h1>
          <p className="font fold text-center">$45</p>
        </div>
        <div className=" space-y-2">
          <Link to="/product-detail?image=src\components\image\boaf.jpg&description=Boaf&price=$45">
            <img
              className="w-full h-64 object-cover cursor-pointer transition duration-300 transform hover:scale-105"
              src={BoafImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl text-center">Boaf</h1>
          <p className="font fold text-center">$45</p>
        </div>
        <div className="space-y-2">
          <Link to="/product-detail?image=src\components\image\cooookie.jpg&description=Cookie&price=$45">
            <img
              className="w-full h-64 object-cover cursor-pointer transition duration-300 transform hover:scale-105"
              src={CookImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl text-center">Cookie</h1>
          <p className="font fold text-center">$45</p>
        </div>
        <div className="space-y-2">
          <Link to="/product-detail?image=src\components\image\cooookie.jpg&description=&Cookie&price=$45">
            <img
              className="w-full h-64 object-cover cursor-pointer transition duration-300 transform hover:scale-105"
              src={CookImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl text-center">Cookie au lait</h1>
          <p className="font fold text-center">$45</p>
        </div>
        <div className="space-y-2">
          <Link to="/product-detail?image=src\components/image/cooookie.jpg&description=&Cookie&price=$45">
            <img
              className="w-full h-64 object-cover cursor-pointer transition duration-300 transform hover:scale-105"
              src={CookImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl text-center">Cookie au miel</h1>
          <p className="font fold text-center">$45</p>
        </div>
        <div className="space-y-2">
          <Link to="/product-detail?image=src/components/image/cooookie.jpg&description=Cookie.&price=$45">
            <img
              className="w-full h-64 object-cover cursor-pointer transition duration-300 transform hover:scale-105"
              src={CookImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl text-center">Cookie miel sucre</h1>
          <p className="font fold text-center">$45</p>
        </div>
        <div className="space-y-2">
          <Link to="/product-detail?image=src/components/image/cooookie.jpg&description=cookie&price=$90">
            <img
              className="w-full h-64 object-cover cursor-pointer transition duration-300 transform hover:scale-105"
              src={CookImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl text-center">Cookie</h1>
          <p className="font fold text-center">$90</p>
        </div>
        <div className="space-y-2">
          <Link to="/product-detail?image=src/components/image/cooookie.jpg&description=cookie&price=$40">
            <img
              className="w-full h-64 object-cover cursor-pointer transition duration-300 transform hover:scale-105"
              src={CookImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl text-center">Cookie</h1>
          <p className="font fold text-center">$40</p>
        </div>
        <div className="space-y-2">
          <Link to="/product-detail?image=src/components/image/frite.jpg&description=frite&price=$45">
            <img
              className="w-full h-64 object-cover cursor-pointer transition duration-300 transform hover:scale-105"
              src={FriteImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl text-center">Frite au ketchup</h1>
          <p className="font fold text-center">$45</p>
        </div>
        <div className="space-y-2">
          <Link to="/product-detail?image=src/components/image/tilapia.jpg&description=tilapia&price=$45">
            <img
              className="w-full h-64 object-cover cursor-pointer transition duration-300 transform hover:scale-105"
              src={ViandeImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl text-center">Tilapia </h1>
          <p className="font fold text-center">$45</p>
        </div>
        <div className="space-y-2">
          <Link to="/product-detail?image=src/components/image/cooookie.jpg&description=cookie&price=$24">
            <img
              className="w-full h-64 object-cover cursor-pointer transition duration-300 transform hover:scale-105"
              src={CookImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl text-center">Cookie</h1>
          <p className="font fold text-center">$24</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsS;

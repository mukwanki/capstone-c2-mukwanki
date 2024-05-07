// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import SamouImg from "../image/samouuu.jpg";
import BoafImg from "../image/boaf.jpg";
import CookImg from "../image/cooookie.jpg";
import FriteImg from "../image/frite.jpg";
import ViandeImg from "../image/viande.png";

const ProductsS = (produit) => {
  return (
    <div className="w-11/12 m-auto">
      <div className="my-16 flex justify-between">
        <h1 className="text-2xl font-semibold">Menu Disponible </h1>
        <button className="px-10 py-2 rounded bg-primary text-white">
          Filtre
        </button>
      </div>
      <div className="products grid justify-items-center grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-col-5">
        <div className="product space-y-2">
          <Link to="/product-detail?image=src\components\image\samouuu.jpg&description=Samoussa&price=$45">
            <img
              className="w-full h-[250px] object-cover cursor-pointer"
              src={SamouImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl">Samoussa</h1>
          <p className="font fold">$45</p>
        </div>
        <div className="product space-y-2">
          <Link to="/product-detail?image=src\components\image\boaf.jpg&description=Boaf&price=$45">
            <img
              className="w-full h-[250px] object-cover cursor-pointer"
              src={BoafImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl">Boaf</h1>
          <p className="font fold">$45</p>
        </div>
        <div className="product space-y-2">
          <Link to="/product-detail?image=src\components\image\cooookie.jpg&Cookie&price=$45">
            <img
              className="w-full h-[250px] object-cover cursor-pointer"
              src={CookImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl">Cookie</h1>
          <p className="font fold">$45</p>
        </div>
        <div className="product space-y-2">
          <Link to="/product-detail?image=src\components\image\cooookie.jpg&description=>&Cookie&price=$45">
            <img
              className="w-full h-[250px] object-cover cursor-pointer"
              src={CookImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl">Cookie au lait</h1>
          <p className="font fold">$45</p>
        </div>
        <div className="product space-y-2">
          <Link to="/product-detail?image=src\components\image\cooookie.jpg&description=&Cookie&price=$45">
            <img
              className="w-full h-[250px] object-cover cursor-pointer"
              src={CookImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl">Cookie au miel</h1>
          <p className="font fold">$45</p>
        </div>
        <div className="product space-y-2">
          <Link to="/product-detail?image=src\components\image\cooookie.jpg&description=Cookie.&price=$45">
            <img
              className="w-full h-[250px] object-cover cursor-pointer"
              src={CookImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl">Cookie miel sucre</h1>
          <p className="font fold">$45</p>
        </div>
        <div className="product space-y-2">
          <Link to="/product-detail?image=src\components\image\cooookie.jpg&description=cookie&price=$90">
            <img
              className="w-full h-[250px] object-cover cursor-pointer"
              src={CookImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl">Cookie</h1>
          <p className="font fold">$90</p>
        </div>
        <div className="product space-y-2">
          <Link to="/product-detail?image=src\components\image\cooookie.jpg&description=cookie&price=$40">
            <img
              className="w-full h-[250px] object-cover cursor-pointer"
              src={CookImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl">Cookie</h1>
          <p className="font fold">$40</p>
        </div>
        <div className="product space-y-2">
          <Link to="/product-detail?image=src\components\image\frite.jpg&description=frite&price=$45">
            <img
              className="w-full h-[250px] object-cover cursor-pointer"
              src={FriteImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl">Frite au ketchup</h1>
          <p className="font fold">$45</p>
        </div>
        <div className="product space-y-2">
          <Link to="/product-detail?image=src\components\image\viande.png&description=viande&price=$45">
            <img
              className="w-full h-[250px] object-cover cursor-pointer"
              src={ViandeImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl">Viande</h1>
          <p className="font fold">$45</p>
        </div>
        <div className="product space-y-2">
          <Link to="/product-detail?image=src\components\image\cooookie.jpg&description=cookie&price=$24">
            <img
              className="w-full h-[250px] object-cover cursor-pointer"
              src={CookImg}
              alt="photo"
              id={produit}
            />
          </Link>
          <h1 className="text-xl">Cookie</h1>
          <p className="font fold">$24</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsS;

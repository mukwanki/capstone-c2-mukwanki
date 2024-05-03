// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductDetail = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <div className="w-3/5 m-auto">
      <div className="container flex items-center my-10 space-x-10">
        <div className="product-img w-[500px] h-[500px]">
          <img
            className="w-full h-full object-cover"
            src="src\components\image\steack.png"
            alt=""
          />
        </div>
        <div className="product-detail w-1/2 space-y-10 ">
          <h1 className="text-4xl font-bold">poulet braisee</h1>
          <h2 className="text-xl font-semibold">$45</h2>
          <p>
            Lorem ipsum dolor sit amet. 33 vitae distinctio et sint quasi est
            natus illum. Est officiis dolore eos minus ducimus aut deserunt
            voluptas sed saepe quos ut voluptates
          </p>
        </div>
        <div className="start flex space-x-2">
          <div>
            {" "}
            <AiFillStar />{" "}
          </div>
          <div>
            {" "}
            <AiFillStar />
          </div>
          <div>
            <AiFillStar />
          </div>
          <div>
            <AiOutlineStar />
          </div>
          <div>
            <AiOutlineStar />
          </div>
        </div>
        <input
          className="outline-0 w-16 px-2 border-2  border-gray-800"
          type="number"
          id="amout"
        />
        <div className="btns space-x-5">
          <button
            className="bg-primary text-white px-5 py-2 border m-2 rounded-lg "
            onClick={() => addToCart("L'article est enregistre avec succes")}
          >
            Add to cart
          </button>

          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

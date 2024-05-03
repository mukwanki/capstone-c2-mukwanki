import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React from "react";
const ProductsS = () => {
  const navigate = useNavigate();
  const ProductDetail = () => {
    navigate("/product-detail");
  };
  return (
    <div className=" w-11/12 m-auto ">
      <div className=" my-16 flex justify-between ">
        <h1 className="text-2xl font-semibold">Menu Disponible </h1>
        <button className="px-10 py-2 rounded bg-primary text-white">
          Filtre
        </button>
      </div>
      <div className="products grid justify-items-center grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-col-5 ">
        <div className="product space-y-2 ">
          <div
            className="w-[300px] h-[250px] cursor-pointer"
            onClick={ProductDetail}
          >
            <img
              className="w-full h-full object-cover"
              src="src\components\image\boaf.jpg"
              alt="photo"
            />
          </div>
          <h1 className="text-xl">poulet braisee</h1>
          <p className="font fold">$45</p>
        </div>

        <div className="product space-y-2">
          <div
            className="w-[300px] h-[250px] cursor-pointer"
            onClick={ProductDetail}
          >
            <img
              className="w-full h-full object-cover"
              src="src\components\image\boaf.jpg"
              alt="photo"
            />
          </div>
          <h1 className="text-xl">poulet braisee</h1>
          <p className="font fold">$23</p>
        </div>
        <div className="product space-y-2">
          <div
            className="w-[300px] h-[250px] cursor-pointer"
            onClick={ProductDetail}
          >
            <img
              className="w-full h-full object-cover"
              src="src\components\image\boaf.jpg"
              alt="photo"
            />
          </div>
          <h1 className="text-xl">poulet braisee</h1>
          <p className="font fold">$19</p>
        </div>
        <div className="product space-y-2">
          <div
            className="w-[300px] h-[250px] cursor-pointer"
            onClick={ProductDetail}
          >
            <img
              className="w-full h-full object-cover"
              src="src\components\image\boaf.jpg"
              alt="photo"
            />
          </div>
          <h1 className="text-xl">poulet braisee</h1>
          <p className="font fold">$50</p>
        </div>
        <div className="product space-y-2">
          <div
            className="w-[300px] h-[250px] cursor-pointer"
            onClick={ProductDetail}
          >
            <img
              className="w-full h-full object-cover"
              src="src\components\image\boaf.jpg"
              alt="photo"
            />
          </div>
          <h1 className="text-xl">poulet braisee</h1>
          <p className="font fold">$10</p>
        </div>
        <div className="product space-y-2">
          <div
            className="w-[300px] h-[250px] cursor-pointer"
            onClick={ProductDetail}
          >
            <img
              className="w-full h-full object-cover"
              src="src\components\image\boaf.jpg"
              alt="photo"
            />
          </div>
          <h1 className="text-xl">poulet braisee</h1>
          <p className="font fold">$100</p>
        </div>
        <div className="product space-y-2">
          <div
            className="w-[300px] h-[250px] cursor-pointer"
            onClick={ProductDetail}
          >
            <img
              className="w-full h-full object-cover"
              src="src\components\image\boaf.jpg"
              alt="photo"
            />
          </div>
          <h1 className="text-xl">poulet braisee</h1>
          <p className="font fold">$70</p>
        </div>
        <div className="product space-y-2">
          <div
            className="w-[300px] h-[250px] cursor-pointer"
            onClick={ProductDetail}
          >
            <img
              className="w-full h-full object-cover"
              src="src\components\image\boaf.jpg"
              alt="photo"
            />
          </div>
          <h1 className="text-xl">poulet braisee</h1>
          <p className="font fold">$8</p>
        </div>
      </div>
      <div className="btns my-10 flex justify-center space-x-5">
        <button className="px-5 py-2 text-white bg-primary rounded">
          Prev
        </button>
        <button className="px-5 py-2 text-white bg-primary rounded">1</button>
        <button className="px-5 py-2 text-white bg-primary rounded">2</button>
        <button className="px-5 py-2 text-white bg-primary rounded">3</button>
        <button className="px-5 py-2 text-white bg-primary rounded">4</button>
        <button className="px-5 py-2 text-white bg-primary rounded">5</button>
        <button className="px-5 py-2 text-white bg-primary rounded">
          Next
        </button>
      </div>
      <div className=" w-full my-20 flex justify-between items-center">
        <div className="w-[500px] h-[400px] border-l-8 border-stone-800 p-2">
          <img
            className="w-full h-full object-cover"
            src="src\components\image\frite.jpg"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <h1 className="xl:text-6xl text-5xl font-bold">
            Transformez vos restes
            <span className="text-primary text-5xl xl:text-6xl">
              en délices avec
            </span>
            Food Récup.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProductsS;

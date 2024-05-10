import { useState } from "react";
import products from "../models/product";

function List() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="py-10">
      <div className="container">
        <div className="w-11/12 h-auto p-0 pb-8">
          <div className="flex flex-wrap justify-between px-12 py-10">
            <h1 className="inline-block tracking-wide border-b-2 border-solid border-green-500 pb-4 text-4xl font-bold">
              Decouvert
            </h1>
            <input
              className="w-3/5 px-2 pr-4 bg-transparent border border-gray-800 text-xl capitalize outline-none tracking-wide font-medium text-green-500"
              id="searchInput"
              type="text"
              placeholder="search here......."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>

          <div className="flex flex-wrap justify-between">
            {products
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.Tittle.toLowerCase().includes(
                    searchTerm.toLocaleLowerCase()
                  )
                ) {
                  return val;
                }
              })
              .map((val) => (
                <div
                  key={val.id}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 flex flex-col items-center rounded shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                >
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img
                      className="object-cover w-full max-w-full transition duration-300 ease-in-out transform hover:scale-110"
                      src={val.image}
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2 transition duration-300 ease-in-out hover:text-green-500">
                      {val.Tittle}
                    </h3>
                    <p className="font-medium transition duration-300 ease-in-out hover:text-green-500">
                      {val.Description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;

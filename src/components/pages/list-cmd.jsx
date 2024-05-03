import { useState } from "react";
import products from "../models/product";
function List() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="py-10 ">
        <div className="container">
          <div className="w-11/12 h-auto p-0 pb-8 ">
            <div className="flex px-12 justify-between py-10">
              <h1 className="inline-block tracking-wide border-b-2 border-solid border-green-500 pb-4 text-4xl font-bold">
                Decouvert
              </h1>
              <input
                className=" w-3/5 px-2 pr-4 bg-transparent border border-gray-800 text-xl capitalize outline-none tracking-wide font-medium text-green-500"
                id="searchInput"
                type="text"
                placeholder="search here......."
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </div>

            <div className="flex justify-between flex-wrap text-left">
              {products
                .filter((val) => {
                  if (searchTerm == "") {
                    return val;
                  } else if (
                    val.Tittle.toLowerCase().includes(
                      searchTerm.toLocaleLowerCase()
                    )
                  ) {
                    return val;
                  }
                })
                .map((val) => {
                  return (
                    <div
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center  "
                      key={val.id}
                    >
                      <div className="relative">
                        <img
                          className="flex max-w-full rounded-2xl object-contain h-full mx-auto"
                          src={val.image}
                          alt=""
                        />
                        <h3 className=" pt-2 text-2xl font-normal">
                          {val.Tittle}
                        </h3>
                        <p className="px-1 py-0 font-medium  ">
                          {val.Description}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;

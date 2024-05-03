import { TimesOneMobiledataRounded } from "@mui/icons-material";

const Panier = () => {
  return (
    <div className="container py-10">
      <div className=" border-b border-gray-400 rounded-md">
        <h3 className="text-3xl p-4 text-red-300 border-b border-gray-400 text-center">
          Products
        </h3>
        <div className="grid p-5 ">
          <div className="rounded-3xl bg-white flex items-center gap-6 p-8 relative">
            <TimesOneMobiledataRounded className="absolute top-28 right-4 text-4xl cursor-pointer text-black hover:bg-green-900" />
            <img className="h-60" src="src\components\image\boaf.jpg" alt="" />
            <div className="">
              <h3 className="text-black text-4xl">deliciouse food</h3>
              <span className=" text-2xl text-green-500">quantity : </span>
              <input
                className="flex w-32 p-24 text-2xl text-black m-28"
                type="number"
                name=""
                id=""
                value="1"
              />
              <span className="text-green-200 text-3xl">price : </span>
              <span>$40</span>
            </div>
          </div>

          <div className="rounded-3xl bg-white flex items-center gap-6 p-8 relative">
            <TimesOneMobiledataRounded className="absolute top-28 right-4 text-4xl cursor-pointer text-black hover:bg-green-900" />
            <img className="h-32" src="src\components\image\boaf.jpg" alt="" />
            <div className="">
              <h3 className="text-black text-4xl">deliciouse food</h3>
              <span className=" text-2xl text-green-500">quantity : </span>
              <input
                className="flex w-32 p-24 text-2xl text-black m-28"
                type="number"
                name=""
                id=""
                value="1"
              />
              <span className="text-green-200 text-3xl">price : </span>
              <span>$40</span>
            </div>
          </div>

          <div className="rounded-3xl bg-white flex items-center gap-6 p-8 relative">
            <TimesOneMobiledataRounded className="absolute top-28 right-4 text-4xl cursor-pointer text-black hover:bg-green-900" />
            <img className="h-32" src="src\components\image\boaf.jpg" alt="" />
            <div className="">
              <h3 className="text-black text-4xl">deliciouse food</h3>
              <span className=" text-2xl text-green-50">quantity : </span>
              <input
                className="flex w-32 p-24 text-2xl text-black m-28"
                type="number"
                name=""
                id=""
                value="1"
              />
              <span className="text-green-200 text-3xl">price : </span>
              <span>$40</span>
            </div>
          </div>

          <div className="rounded-3xl bg-white flex items-center gap-6 p-8 relative">
            <TimesOneMobiledataRounded className="absolute top-28 right-4 text-4xl cursor-pointer text-black hover:bg-green-900" />
            <img className="h-32" src="src\components\image\boaf.jpg" alt="" />
            <div className="">
              <h3 className="text-black text-4xl">deliciouse food</h3>
              <span className=" text-2xl text-green-50">quantity : </span>
              <input
                className="flex w-32 p-24 text-2xl text-black m-28"
                type="number"
                name=""
                id=""
                value="1"
              />
              <span>$40</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panier;

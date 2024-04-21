import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Profil() {
  return (
    <div>
      <section className="z-50 flex items-center top-0 bg-opacity-95 relative">
        <ArrowBackIcon />
      </section>

      <section className="container min-h-screemh-10 w-full bg-cover  px-28 py-5 absolute bg-center">
        <div className="w-[100%] h-[15%] object-cover"></div>
        <img src="src\components\image\Rectangle 80.png" alt="profil" />
      </section>

      <section className="pl-6 ">
        <div className="flex items-stretch text-base h-[100%] w-[15rem] absolute ">
          <img
            className=" rounded-full border-solid border-white transform -translate-y-24 w-40 h-40"
            src="src\components\image\Ellipse 15.png"
            alt="photo"
          />
        </div>
      </section>
      <div>
        <div className="flex items-center">
          <h1 className="font-bold text-lg"> Cecilia perez</h1>
        </div>
      </div>
      <div className="mt-2 space-y-3">
        <p>Hello, i like to eat</p>
        <div className="py-1 flex space-x-5">
          <div className="flex items-center text-gray-500">
            <LocationOnIcon />
            <p className="ml-2">congo</p>
          </div>
          <div className="flex items-center text-gray-500"></div>
        </div>
      </div>
    </div>
  );
}

export default Profil;

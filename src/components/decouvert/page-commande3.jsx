import CommadImg from "../image/deco.jpeg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const nourrStyle = {
  backgroundImage: `url(${CommadImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
  gap: "10px",
};

const Ikos = () => {
  return (
    <>
      <div className="py-2">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="order-2 sm:order-1 flex flex-col justify-center gap-6">
              <h1 className="text-xl sm:text-2xl lg:text-2xl font-semibold">
                Plus pres de chez vous
              </h1>
            </div>
          </div>

          <div style={nourrStyle} className="py-14">
            <div className="flex justify-center items-center">
              <h1 className="font-bold text-lg text-white">Restaurant Ikos</h1>
            </div>

            <div className="flex justify-center items-center mt-2 space-y-3 text-white">
              <StarBorderIcon />
              <p>6,1(100). à 15 min</p>
            </div>

            <div className="flex justify-end items-end">
              <FavoriteIcon />
            </div>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="cursor-pointer hover:bg-secondary bg-primary rounded-full px-8 text-white"
              >
                En Vente
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ikos;

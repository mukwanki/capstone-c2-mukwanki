import CommadImg from "../image/bannerComd.jpg";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink } from "react-router-dom";
const champstStyle = {
  backgroundImage: `url(${CommadImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
  gap: "10px",
};

const Champagne = () => {
  return (
    <>
      <div className="">
        <div className="container py-2">
          <div className="grid grid-cols-1 sm:grid-cols-2"></div>

          <div style={champstStyle} className="py-14">
            <div className="flex justify-center items-center">
              <h1 className="font-bold text-lg text-white">
                Restaurant Malamu
              </h1>
            </div>

            <div className="flex justify-center items-center mt-2 space-y-3 text-white">
              <StarBorderIcon />
              <p>6,3(276). à 12 min</p>
            </div>

            <div className="flex justify-end items-end translate-y-12">
              <FavoriteIcon />
            </div>

            <div className="flex justify-center items-center">
              <NavLink to="/details">
                <button
                  type="submit"
                  className="cursor-pointer hover:bg-secondary bg-primary rounded-full px-8 text-white"
                >
                  En Vente
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Champagne;

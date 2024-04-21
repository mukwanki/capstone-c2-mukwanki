import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function ProfileClient() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <section className="z-50  flex items-center  sticky top-0 bg-opacity-95 relative">
        <ArrowBackIcon />
      </section>
      <section>
        <img
          className="w-[100%] h-[15%] object-cover"
          src="src\components\image\Rectangle 80.png"
          alt="profil"
        />
      </section>
      <section className="pl-6 ">
        <div className="flex items-stretch text-base h-[100%] w-[15rem] absolute ">
          <img
            className=" rounded-full border-solid border-white transform -translate-y-24 w-40 h-40"
            src="src\components\image\Ellipse 15.png"
            alt="photo"
          />
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">
              Restaurant au coeur de kinshasa
            </h1>
            <StarBorderIcon />
          </div>
        </div>
        <div className="mt-2 space-y-3">
          <p>4,3(276). à 2 min</p>
          <FavoriteBorderIcon />
        </div>
        <section className="py-5">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Afficher tout" value="1" />
                  <Tab label="Repas" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <p>Menu regulier</p>
              </TabPanel>
              <TabPanel value="2">Repas</TabPanel>
            </TabContext>
          </Box>
        </section>
      </section>
    </div>
  );
}

export default ProfileClient;
